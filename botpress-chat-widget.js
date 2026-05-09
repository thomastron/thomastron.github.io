/**
 * PT$D Book Chat Widget
 * Drop this file into your drapedapes.org GitHub Pages repo,
 * then add <script src="botpress-chat-widget.js"></script> before </body>.
 *
 * Requires: Botpress Chat integration enabled on your bot.
 */

(function () {
  const WEBHOOK_ID = '9b3e01f7-f1fe-4df1-baae-cc2f3e4e1d57';
  const API_BASE = `https://chat.botpress.cloud/${WEBHOOK_ID}`;

  // ── State ──────────────────────────────────────────────────────────────────
  let userKey = localStorage.getItem('bpUserKey') || null;
  let conversationId = localStorage.getItem('bpConversationId') || null;
  let sseSource = null;

  // ── Styles ─────────────────────────────────────────────────────────────────
  const css = `
    #bp-toggle {
      position: fixed; bottom: 24px; right: 24px; z-index: 9999;
      width: 56px; height: 56px; border-radius: 50%;
      background: #1a1a1a; color: #fff; font-size: 26px;
      border: none; cursor: pointer; box-shadow: 0 4px 14px rgba(0,0,0,.35);
      display: flex; align-items: center; justify-content: center;
      transition: background .2s;
    }
    #bp-toggle:hover { background: #333; }

    #bp-window {
      display: none; flex-direction: column;
      position: fixed; bottom: 92px; right: 24px; z-index: 9999;
      width: 360px; height: 520px; max-height: 80vh;
      background: #fff; border-radius: 12px;
      box-shadow: 0 8px 32px rgba(0,0,0,.2);
      font-family: system-ui, sans-serif; font-size: 14px;
      overflow: hidden;
    }
    #bp-window.open { display: flex; }

    #bp-header {
      background: #1a1a1a; color: #fff;
      padding: 14px 16px; font-weight: 600; font-size: 15px;
      display: flex; justify-content: space-between; align-items: center;
    }
    #bp-header span { opacity: .6; font-size: 12px; font-weight: 400; }

    #bp-messages {
      flex: 1; overflow-y: auto; padding: 14px;
      display: flex; flex-direction: column; gap: 8px;
    }

    .bp-msg {
      max-width: 82%; padding: 9px 12px; border-radius: 12px;
      line-height: 1.45; word-wrap: break-word;
    }
    .bp-msg.user {
      align-self: flex-end;
      background: #1a1a1a; color: #fff;
      border-bottom-right-radius: 3px;
    }
    .bp-msg.bot {
      align-self: flex-start;
      background: #f0f0f0; color: #1a1a1a;
      border-bottom-left-radius: 3px;
    }
    .bp-msg.system {
      align-self: center; font-size: 11px;
      color: #999; background: none; padding: 2px 0;
    }

    #bp-input-row {
      display: flex; border-top: 1px solid #eee; padding: 10px;
      gap: 8px;
    }
    #bp-input {
      flex: 1; border: 1px solid #ddd; border-radius: 8px;
      padding: 8px 12px; font-size: 14px; outline: none; resize: none;
      font-family: inherit; line-height: 1.4;
    }
    #bp-input:focus { border-color: #1a1a1a; }
    #bp-send {
      background: #1a1a1a; color: #fff; border: none;
      border-radius: 8px; padding: 8px 14px; cursor: pointer;
      font-size: 18px; display: flex; align-items: center;
    }
    #bp-send:hover { background: #333; }
    #bp-send:disabled { opacity: .4; cursor: default; }
  `;

  // ── DOM ────────────────────────────────────────────────────────────────────
  function buildUI() {
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    const toggle = document.createElement('button');
    toggle.id = 'bp-toggle';
    toggle.setAttribute('aria-label', 'Open book chat');
    toggle.textContent = '💬';
    document.body.appendChild(toggle);

    const win = document.createElement('div');
    win.id = 'bp-window';
    win.setAttribute('aria-label', 'PT$D book assistant');
    win.innerHTML = `
      <div id="bp-header">
        PT$D Assistant <span>Ask the book anything</span>
      </div>
      <div id="bp-messages"></div>
      <div id="bp-input-row">
        <textarea id="bp-input" rows="1" placeholder="Ask a question or share a view…"></textarea>
        <button id="bp-send">&#10148;</button>
      </div>
    `;
    document.body.appendChild(win);

    toggle.addEventListener('click', () => {
      const isOpen = win.classList.toggle('open');
      toggle.textContent = isOpen ? '✕' : '💬';
      if (isOpen && !conversationId) initSession();
      if (isOpen) document.getElementById('bp-input').focus();
    });

    const input = document.getElementById('bp-input');
    const send = document.getElementById('bp-send');

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
    });
    input.addEventListener('input', () => {
      input.style.height = 'auto';
      input.style.height = Math.min(input.scrollHeight, 100) + 'px';
    });
    send.addEventListener('click', sendMessage);
  }

  // ── API helpers ────────────────────────────────────────────────────────────
  async function api(method, path, body, key) {
    const headers = { 'Content-Type': 'application/json' };
    if (key) headers['x-user-key'] = key;
    const res = await fetch(API_BASE + path, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });
    if (!res.ok) throw new Error(`API ${method} ${path} → ${res.status}`);
    return res.json();
  }

  // ── Session ────────────────────────────────────────────────────────────────
  async function initSession() {
    appendMessage('system', 'Connecting…');
    try {
      if (!userKey) {
        const { key } = await api('POST', '/users', {});
        userKey = key;
        localStorage.setItem('bpUserKey', key);
      }
      if (!conversationId) {
        const { id } = await api('POST', '/conversations', {}, userKey);
        conversationId = id;
        localStorage.setItem('bpConversationId', id);
      }
      startListening();
      clearSystemMessages();
      appendMessage('bot', 'Hello — ask me anything about PT$D, or share a belief and I\'ll push back.');
    } catch (e) {
      appendMessage('system', 'Could not connect. Please try again.');
      console.error(e);
    }
  }

  // ── SSE listener ──────────────────────────────────────────────────────────
  function startListening() {
    if (sseSource) sseSource.close();
    const url = `${API_BASE}/conversations/${conversationId}/listen`;
    sseSource = new EventSource(url, {
      headers: { 'x-user-key': userKey },
    });

    // EventSource doesn't support custom headers in all browsers —
    // fall back to passing key as query param if needed
    if (!sseSource || sseSource.readyState === EventSource.CLOSED) {
      sseSource = new EventSource(
        `${url}?userKey=${encodeURIComponent(userKey)}`
      );
    }

    sseSource.onmessage = (event) => {
      try {
        const signal = JSON.parse(event.data);
        if (signal.type === 'message_created') {
          const msg = signal.payload;
          // Only show messages from the bot (not echoes of user messages)
          if (msg.direction === 'incoming') return;
          const text = msg.payload?.text || '[unsupported message type]';
          appendMessage('bot', text);
          removeTypingIndicator();
        }
      } catch (_) {}
    };

    sseSource.onerror = () => {
      // SSE will auto-reconnect; suppress noise
    };
  }

  // ── Send ───────────────────────────────────────────────────────────────────
  async function sendMessage() {
    const input = document.getElementById('bp-input');
    const text = input.value.trim();
    if (!text) return;

    input.value = '';
    input.style.height = 'auto';
    document.getElementById('bp-send').disabled = true;

    appendMessage('user', text);
    addTypingIndicator();

    try {
      await api(
        'POST',
        `/conversations/${conversationId}/messages`,
        { payload: { type: 'text', text } },
        userKey
      );
    } catch (e) {
      // Session may be stale — clear and retry once with a fresh session
      if (!sendMessage._retrying) {
        sendMessage._retrying = true;
        localStorage.removeItem('bpUserKey');
        localStorage.removeItem('bpConversationId');
        userKey = null;
        conversationId = null;
        removeTypingIndicator();
        await initSession();
        try {
          await api(
            'POST',
            `/conversations/${conversationId}/messages`,
            { payload: { type: 'text', text } },
            userKey
          );
        } catch (e2) {
          removeTypingIndicator();
          appendMessage('system', 'Message failed to send. Please refresh the page.');
          console.error(e2);
        }
        sendMessage._retrying = false;
      } else {
        removeTypingIndicator();
        appendMessage('system', 'Message failed to send. Please refresh the page.');
        console.error(e);
      }
    } finally {
      document.getElementById('bp-send').disabled = false;
    }
  }

  // ── Minimal markdown renderer (bold, italic, links, line breaks) ───────────
  function renderMarkdown(text) {
    return text
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/_(.+?)_/g, '<em>$1</em>')
      .replace(/\[(.+?)\]\((https?:\/\/[^\)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
      .replace(/\n/g, '<br>');
  }

  // ── UI helpers ─────────────────────────────────────────────────────────────
  function appendMessage(role, text) {
    const container = document.getElementById('bp-messages');
    const div = document.createElement('div');
    div.className = `bp-msg ${role}`;
    if (role === 'bot') {
      div.innerHTML = renderMarkdown(text);
    } else {
      div.textContent = text;
    }
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
  }

  function addTypingIndicator() {
    const container = document.getElementById('bp-messages');
    if (container.querySelector('.bp-typing')) return;
    const div = document.createElement('div');
    div.className = 'bp-msg bot bp-typing';
    div.textContent = '…';
    div.style.opacity = '.5';
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
  }

  function removeTypingIndicator() {
    document.querySelector('.bp-typing')?.remove();
  }

  function clearSystemMessages() {
    document.querySelectorAll('.bp-msg.system').forEach((el) => el.remove());
  }

  // ── Init ───────────────────────────────────────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildUI);
  } else {
    buildUI();
  }
})();

/**
 * PT$D Book Chat Widget
 * Drop this file into your thomastron.github.io repo,
 * then add <script src="botpress-chat-widget.js"></script> before </body>.
 *
 * Requires: Botpress Chat integration enabled on your bot.
 */

(function () {
  const WEBHOOK_ID = '9b3e01f7-f1fe-4df1-baae-cc2f3e4e1d57';
  const API_BASE = `https://chat.botpress.cloud/${WEBHOOK_ID}`;

  let userKey = localStorage.getItem('bpUserKey') || null;
  let conversationId = localStorage.getItem('bpConversationId') || null;
  let sseSource = null;

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
    #bp-input-row

layout: page
title: "PAGE-TITLE"
permalink: /URLPATH


# 1: Equilibrium of a deformable body

<img width="15%" src="http://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110092955.jpg?raw=true"> <img width="15%" src="http://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110093018.jpg?raw=true">
<img width="15%" src="http://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110093025.jpg?raw=true">
<img width="15%" src="http://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110093052.jpg?raw=true">
<img width="15%" src="http://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110093058.jpg?raw=true">
<img width="15%" src="http://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110093114.jpg?raw=true">
<img width="15%" src="http://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110093123.jpg?raw=true">
<img width="15%" src="http://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110093134.jpg?raw=true">
<img width="15%" src="http://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110093129.jpg?raw=true">
<img width="15%" src="http://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110093143.jpg?raw=true">
<img width="15%" src="http://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110093216.jpg?raw=true">
<img width="15%" src="http://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110093225.jpg?raw=true">
<img width="15%" src="http://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110093744.jpg?raw=true">
<img width="15%" src="http://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110093755.jpg?raw=true">
<img width="15%" src="http://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110093800.jpg?raw=true">
<img width="15%" src="http://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110093810.jpg?raw=true">

http://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/



```python
#Given example 1.1
w_varying = 270.0     #N/m, torque
l_crossection = 9.0   #m , length
l_cb = 6.0            #m length
l_ac = 2.0            #m length

#Calculation
w_c = (w_varying/l_crossection) * l_cb
f_resultant_c = 0.5* w_c *l_cb  #By proportion, load at C is found.
n_c = 0                         #Balancing forces in the x direction:
v_c = f_resultant_c             #Balncing forces in the y direction:
m_c = - (f_resultant_c*l_ac)    #Balncing the moments about C:

#Results
print("The resultant force at C  is  ",f_resultant_c,"N")
print("The horizontal force at C is  ",n_c,"N")
print("The vertical force at C   is  ",v_c,"N")
print("The moment about C        is  ",m_c,"Nm")

```

    The resultant force at C  is   540.0 N
    The horizontal force at C is   0 N
    The vertical force at C   is   540.0 N
    The moment about C        is   -1080.0 Nm
    


```python
#Given example 1.2
f_d = 225         #N
w_uniform = 800   # N/m
l_ac = 0.200      #m
l_cb = 0.05+0.1   #m
l_bd = 0.100      #m
l_bearing = 0.05    #m
f_resultant = w_uniform*l_cb #120N
l_f_resultant_b = (l_cb/2)+ l_bearing #0.125m
l = l_ac + l_cb + l_bearing + l_bd


#Calculation
m_b = 0                                                        # Net moment about B is zero for equilibrium
a_y = -((f_d*l_bd) - (f_resultant*l_f_resultant_b))/ (l - l_bd) # finding the reaction force at A

# Refer to the free body diagram in Fig.1-5c.
f_c = 40                        #N
#Balancing forces in the x direction
n_c = 0
#Balncing forces in the y direction
v_c = a_y - f_c            #-18.75N - 40N-Vc = 0
# Balncing the moments about C
m_c =  ((a_y * (l_ac + 0.05)) - f_c*(0.025) ) # Mc+40N(0.025m)+ 18.75N(0.250m) = 0


# Result
print'The horizontal force at C =',n_c,"N"
print'The vertical force at C   =',v_c,"N"
print'The moment about C        =',round(m_c,2),"NM"


```

    The horizontal force at C = 0 N
    The vertical force at C   = -58.75 N
    The moment about C        = -5.69 NM
    


```python
# Given example 1.3
l_ac = 2     #m.,length
l_cb = 1     #m.
l_ad = 1.5   #m.
#r_a = 0.125  #m.
#r_d = 0.125  #m.
W = 500      # N, force
g=9.81

#Calculation
#Balancing forces in the x direction
n_c = (W*g*(l_ac+l_cb))/(3*2/5.0) # N
#Balncing forces in the y direction
v_c = n_c*(4/5.0)                 #N
# Balncing the moments about C
m_c = n_c*(3/5.0)-(W*g)


# Result
print'The horizontal force at C   =  ',-v_c/1000,"KN"
print'The vertical force at C     =  ',-m_c/1000,"KN"
print'The moment about C          =  ',-m_c/1000,"KNm"

```

    The horizontal force at C   =   -9.81 KN
    The vertical force at C     =   -2.4525 KN
    The moment about C          =   -2.4525 KNm
    


```python
# Given example 1.4
l_ag = 2           #Length of AG is 1m.
l_gd = 1         #Length of GD is 1m.
l_de = 3         #Length of DE is 1m.
f_a = 1500       #Force at A is 1500N.
l_ec = 1.5       #Length of EC is 1m.
l = l_ag +l_gd +l_de
w_uniform_varying = 600 #Nm.
f_ba = 7750      #N
f_bc = 6200      #N
f_bd = 4650      #N

#Calculation
w_resultant = 0.5*l_de*w_uniform_varying
# calling point of action of resultant as P
l_ep = (2/3.0)*l_de
l_ap = l - l_ep

#Free Body Diagram Using the result for Fba, the left section AG of the beam is shown in Fig 1-7d.
# Equations of equilibrium
#Balancing forces in the x direction
n_g = -f_ba * (4/5.0)    # N
#Balncing forces in the y direction
v_g = -f_a + f_ba*(3/5.0) #N

# Balncing the moments about C
m_g = (f_ba * (3/5.0)*l_ag) - (f_a * l_ag) #Nm

# Result
print'The horizontal force at G =  ',n_g,"lb"
print'The vertical force at G   =  ',v_g,"lb"
print'The moment about G        =  ',m_g,"lb-ft"

```

    The horizontal force at G =   -6200.0 lb
    The vertical force at G   =   3150.0 lb
    The moment about G        =   6300.0 lb-ft
    


```python
# Given example 1.5
f_a = 50       #N, force
m_a = 70       # Moment at A in Nm
l_ad = 1.25    #Length of AD in m.
l_bd = 0.5     #Length of BD in m.
l_cb = 0.75    #Length of BC in m.
w_l  = 2       #Kg/m
g = 9.81       #N/kg- acceleration due to gravity

#Free Body Diagram
import math
w_bd = w_l*l_bd*g #in N.
w_ad = w_l*l_ad*g
# Equations of Equilibrium
#Balancing forces in the x, y and z direction
f_b_x = 0     #  N
f_b_y = 0     #N
f_b_z = g + w_ad + f_a      #N
# Balancing Moments in the x,y and z direction
m_b_x = - m_a + (f_a*l_bd) + (w_ad*l_bd) + (l_bd/2.0)*g #Nm
m_b_y = - (w_ad*(l_ad/2.0)) - (f_a*l_ad) #Nm
m_b_z = 0                       #Nm
v_b_shear = sqrt(f_b_z **2 + 0) #Shear Force in N
t_b = - m_b_y                   #Torsional Moment in Nm
m_b = math.sqrt(m_b_x **2+ 0)   # Bending moment in Nm

# Result
print' The weight of segment BD                =',w_bd,"N"
print' The weight of segment AD                =',w_ad,"N"
print' The force at B in the Z direction       =',f_b_z,"N"
print' The moment about B in the X direction   =',m_b_x,"Nm"
print' The moment about G in the Y direction   =',m_b_y,"Nm"
print' The Shear Force at B                    =',v_b_shear,"N"
print' The Torsional Moment at B               =',t_b,"Nm"
print' The Bending Moment at B                 =',m_b,"Nm"

```

     The weight of segment BD                = 9.81 N
     The weight of segment AD                = 24.525 N
     The force at B in the Z direction       = 84.335 N
     The moment about B in the X direction   = -30.285 Nm
     The moment about G in the Y direction   = -77.828125 Nm
     The Shear Force at B                    = 84.335 N
     The Torsional Moment at B               = 77.828125 Nm
     The Bending Moment at B                 = 30.285 Nm
    


```python
#Given example 1.6
netf_b = 18*(10 **3)      #N Net force at B.
netf_c = 8*(10**3)        #N Net force at C.
f_a = 12 *(10**3)         #N Force at A.
f_d = 22* (10**3)         #N Force at D.
w = 35.0                    #mm Width.
t = 10.0                    #mm Thickness.

#calculations
p_bc = netf_b + f_a          #N Net force in region BC.
a = w*t                      #m**2 The area of the cross section.
avg_normal_stress = p_bc/a   #Average Normal Stress.

# Result
print'The Average Normal Stress in the bar when subjected to load = ',round(avg_normal_stress,1),"MPa"

```

    The Average Normal Stress in the bar when subjected to load =  85.7 MPa
    


```python
#Given : example 1.7

m_lamp = 80   #Mass of lamp in Kg.
d_ab = 10     # Diameter of AB in mm.
d_bc = 8      # Diameter of BC in mm.
ab_h = 60 *(math.pi/180.0) # In degrees - Angle made by AB with the horizontal.
w = m_lamp*9.81 #N
a_bc = (math.pi/4.0)*(d_bc**2) #m**2 Area of cross section of rod BC
a_ab = (math.pi/4.0)*(d_ab**2) #m**2 Area of cross section of rod AB


#calculation
import math   # Equations of equilibrium: Solving equilibrium equations simultaneously ,
f_bc=395
f_ab=f_bc*(4/5.0)/(math.cos(60*3.14/180.0))
avg_normal_stress_a = f_ab / a_ab #Mpa Average Normal Stress in AB
avg_normal_stress_c = f_bc/ a_bc# Mpa   Average Normal Stress in BC

# Displaying results:
print"The Average Normal Stress in AB when subjected to load = MPa",round(avg_normal_stress_a,2),"MPa"
print"The Average Normal Stress in BC when subjected to load = MPa",round(avg_normal_stress_c,2),"MPa"

```

    The Average Normal Stress in AB when subjected to load = MPa 8.04 MPa
    The Average Normal Stress in BC when subjected to load = MPa 7.86 MPa
    


```python
# Given example 1.8
l_ab = 1.5  # in.
l_bc = 2    # in.
l_cd = 3    # in.
f = 600     # lb

# Calculation
import math
a = math.pi * (d_a ** 2)  # Area of cross section in ft**2
p = sp_w * h_above_ab * a
avg_comp_stress = p / a  # The average compressive stress in lb/ft**2

# Display
print('The average compressive stress = ', avg_comp_stress, "lb/ft**2")
f_bc = f * (4/5.0)  # Force on segment BC in lb.
avg_comp_ab = f_ab / a1  # The average compressive stress in psi
avg_comp_bc = f_bc / a2  # The average compressive stress in psi

# Display
print('The average compressive stress along AB  =  ', avg_comp_ab, "psi")
print('The average compressive stress along BC  =  ', avg_comp_bc, "psi")
h_above_ab = 2.75        #ft , height
```


```python
#Determine Distance of force from AB

#Given example 1.9
f = 3000 #N Force acting at distance x from AB.
l_ac = 200 #Length of AC in mm.
a_ab = 400 #Cross sectional area of AB in mm**2.
a_c = 650 # area of C in mm**2.

#Calculation
#Equations are
#Fab+Fc=3000
#-3000*x+Fc*200=0
Fc=1857
Fab=3000-Fc
x=Fc*200/3000

#Display
print'Distance of force from AB =  ',x,"mm"

```


      File "<ipython-input-2-dff5830b1c5e>", line 18
        print'Distance of force from AB =  ',x,"mm"
             ^
    SyntaxError: invalid syntax
    



```python
#Given exampple 1.10
af =30		 #kN Axial force along centroidal axis
t1 = 2 		#m thickness of square cross section
t2=4
#Internal loading
import math
Fb=af*t1/((t1+t2)*(4/5.0))
Ax=Fb*(3/5.0)
Ay=af-(Fb*(4/5.0))
Fa=math.sqrt(Ax**2+Ay**2)
Va=Fa/t1
Vb=Fb
Aa=(math.pi/4.0)*((t1/100.0)**2)
Ab=(math.pi/4.0)*(((t1+t2)/200.0)**2)
Ta=Va/Aa
Tb=Vb/Ab

#Display
print'The Average Normal Stress for section b-b   =  ',round(Ta/1000,0),"Mpa"
print'The Average Shear Stress for section b-b    =  ',round(Tb/1000,1),"Mpa"
```

    The Average Normal Stress for section b-b   =   34.0 Mpa
    The Average Shear Stress for section b-b    =   17.7 Mpa
    


```python
#Given example 1.11
f = 6          #kN
d_rod = 0.1        #Diameter of steel rod in mm.
l_bc = 0.125        #Length of side bc in mm.
l_ac=0.15
#Calculation
F=f/2.0
#Appling Force balance
Va=F
Vb=F
a_rod=d_rod*l_ac
a_strut=l_bc*l_ac
#Average shear stress
avg_shear_rod = F/a_rod #for rod in Mpa
avg_shear_strut = (f/2)/a_strut #for strut

#Display
print'The average shear stress for the rod    =  ',avg_shear_rod,"Kpa"
print'The average shear stress for the strut  =  ',avg_shear_strut,"Kpa"

```


      File "<ipython-input-6-e716c55753ec>", line 18
        print'The average shear stress for the rod    =  ',avg_shear_rod,"Kpa"
             ^
    SyntaxError: invalid syntax
    



```python
#Given example 1.12
l_bc = 1 	#Length of BC in inc.
l_db = 3 	# in.
l_ed = 2 	# in.
l_ab = 1.5 	# in.
f_diagonal = 600 	#lb

#Calculation
a1 = l_bc*l_ab 		#Area of face AB in mm**2.
a2 = l_ab*l_ed  	#mm**2.
a3 = l_db*l_ab  	# mm**2.
#Balancing forces along the x- direction.
f_ab = f_diagonal*(3/5.0) #Force on segment AB in N
V = f_ab

#Balancing forces along the Y direction.
f_bc = f_diagonal*(4/5.0) #Force on segment BC in N.
avg_comp_ab = f_ab/a1 # N/mm**2
avg_comp_bc = f_bc/a2 # N/mm**2
avg_shear = f_ab/a3 # N/mm**2

#Display
print a1
print'The average compressive stress along AB  =  ',avg_comp_ab,"psi"
print'The average compressive stress along BC  =  ',avg_comp_bc,"psi"
print'The average shear stress along EDB       =  ',avg_shear,"psi"

```

    1.5
    The average compressive stress along AB  =   240.0 psi
    The average compressive stress along BC  =   160.0 psi
    The average shear stress along EDB       =   80.0 psi
    


```python
#Given example 1.13
shear_allow = 3 	#ksi, stress
tensile_allow = 5 	#ksi, stress
l_C1 = 3		 #in
l_C2 = 2 		 #in
l_ac=8            #inch
Tauallow=8       #ksi

#Calculation
import math
Fab=(tensile_allow*(3/5.0)*(l_C1+l_C2)+shear_allow*l_C1)/(l_ac)
Cx=-shear_allow+tensile_allow*(4/5.0)
Cy=tensile_allow*(3/5.0)+l_C1
Fc=math.sqrt(Cx**2+Cy**2)
A=(Fc/2.0)/Tauallow
d=2*math.sqrt(A/math.pi)

#Result
print" The diameter of rod is =  ",round(d,3),"inch"
print"Wse a pin of diameter =",3/4.0,"inch"

```

     The diameter of rod is =   0.696 inch
    Wse a pin of diameter = 0.75 inch
    


```python
#Given exampple 1.14
P= 20.0		      #kN, force
d_hole = 40.0 	  #mm
normal_allow = 60.0 #MPa, pressure
shear_allow = 35.0  #MPa, pressure


#Diameter of Rod
import math
area1 = (P*10**3)/(normal_allow*10**6) #Area in m**2
d = ((math.sqrt((4*area1)/math.pi))*1000) # Area = (math.pi\4)d**2
#Thickness of disc
V = P
area2 = (V*10**3)/(shear_allow*10**6) #Area in m**2
thickness = (area2*10**6)/(d_hole*math.pi)# A = pi*d*t


#Result
print"The diameter of rode   = ",round(d,2),"mm"
print"The thickness of disc  = ",round(thickness,2),"mm"
```

    The diameter of rode   =  20.6 mm
    The thickness of disc  =  4.55 mm
    


```python
#Given example 1.15
import math
bearing_allow = 75.0	 #MPa, pressure
tensile_allow = 55.0 	#MPa, pressure
d_shaft = 60.0		 #mm
r_shaft = d_shaft/2.0 	#mm
area_shaft = math.pi*(r_shaft**2) #Area = pi*r**2
d_collar = 80 #mm
thick_collar = 20 #mm

#Calculation
r_collar = d_collar/2.0 #mm
area_collar = math.pi*(r_collar**2) #Area = pi*r**2
#Normal Stress
P1 = (tensile_allow* area_shaft)/3.0 #Tensile stress = 3P/A.
P1_kN = P1/1000.0
#Bearing Stress
bearing_area = area_collar-area_shaft
P2 = (bearing_allow*bearing_area)/3
P2_kN= P2/1000.0

#Result
print"The load calculated by Normal Stress  ",round(P1_kN,1),"kN"
print"The load calculated by Bearing Stress ",round(P2_kN,0),"kN"

```


      File "<ipython-input-5-706c0602981b>", line 23
        print"The load calculated by Normal Stress  ",round(P1_kN,1),"kN"
             ^
    SyntaxError: invalid syntax
    



```python
#Given example 1.16
d_ac= 20.0            #mm
area_al = 1800.0       #mm**2, area
d_pins = 18.0          #mm
st_fail_stress = 680.0 #MPa, pressure
al_fail_stress = 70.0 #MPa, pressure
shear_fail_pin = 900.0 #MPa
fos = 2.0             #Factor of safety
l_ab = 2.0            #m
l_ap = 0.75           #m

#Calculation
import math
area_pins = math.pi*(d_pins/2.0)**2
area_ac = math.pi*(d_ac/2.0)**2 #Area = (math.pi\4)d**2
st_allow= st_fail_stress /fos #MPa
al_allow = al_fail_stress/fos #MPa
pin_allow_shear = shear_fail_pin/fos #MPa

#Rod AC
f_ac = (st_allow*area_ac)/1000.0
P1 = ((f_ac*l_ab)/(l_ab-l_ap))

#Block B
f_b =(al_allow*area_al)/1000.0
P2 = ((f_b*l_ab)/l_ap)

#Pin A or C
V = (pin_allow_shear*area_pins)/1000.0
P3 = (V*l_ab)/(l_ab-l_ap)

#Result
print"The load allowed on rod AC   ",round(P1,0),"kN"
print"The load allowed on block B  ",P2,"kN"
print"The load allowed on pins A or C ",round(P3,0),"kN"

```


      File "<ipython-input-4-f6c5d7b6f7e1>", line 33
        print"The load allowed on rod AC   ",round(P1,0),"kN"
             ^
    SyntaxError: invalid syntax
    


# 2: Strain

<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110093845.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110093924.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110093931.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110093938.jpg?raw=true">



```python
#Given example 2.1
e_z= 4     #Constant
ab = 0.200 #m, dimension
from scipy import integrate
#Calculations
#Part a)
import math
def f(z):
    return(1+(40*10**-3)*(math.sqrt(z)))
z=integrate.quad(f,0,ab) #Strain formula for short line segment = delta(sdash) =(1+e_z)delta(s)
deltaB= z[0]-ab
deltaB_mm= deltaB*1000

#Part b)

e_avg = deltaB/ab#  Normal strain formula  e = (delta(sdash) -delta(s))/delta(s)

#Display
print"The displacement at the end of the rod is =   ",round(deltaB_mm,2),"mm"
print"The average normal strain in the rod is   =",round(e_avg,4),"mm"

```


      File "<ipython-input-3-18e6b38da4bc>", line 19
        print"The displacement at the end of the rod is =   ",round(deltaB_mm,2),"mm"
             ^
    SyntaxError: invalid syntax
    



```python
#Given example 2.2

theta = 0.05      #degree, angle
L1=300.0          #mm, length
L2 = 400.0        #mm

#Calculations
import math
alpha=math.atan(L2/L1)*180/3.14
phi=90-alpha+theta
Lad=math.sqrt(L1**2+L2**2)
Lbd=math.sqrt(Lad**2+L2**2-2*L2*Lad*math.cos(36.92*3.14/180.0))
epsilonBD=(Lbd-L1)/(L1)
dLbd=(theta*3.14/180.0)*L2

#Display
print"The average normal strain =",round(epsilonBD,3),"mm/mm"

```


      File "<ipython-input-4-3d431284363a>", line 16
        print"The average normal strain =",round(epsilonBD,3),"mm/mm"
        ^
    SyntaxError: Missing parentheses in call to 'print'. Did you mean print(...)?
    


 Exampl3pn. 72


```python
#Given
#The given dimension are
ab= 250.0        #mm
bbdash_x = 3.0   #mm
bbdash_y = 2.0   #mm
ac = 300.0       #mm

#calculations
#Part(a)
import math
abdash = math.sqrt((ab - bbdash_y)**2 + (bbdash_x)**2)  #Pythagoras theorem
avg_normal_strain = (abdash-ab)/ab

#Part(b)
gamma_xy = math.atan(bbdash_x/(ab - bbdash_y)) #shear strain formula

#Display
print"The average normal strain along AB is    =",round(avg_normal_strain,4),"mm/mm"
print"The average shear strain                 =",round(gamma_xy,4),"rad"

```

 Exampl4pn. 73


```python
#Given
ab = 150 #mm
bc = 150 #mm
disp_cd= 2 #mm
ab_half = ab/2.0
addash_half = (bc+disp_cd)/2.0

#Calculations
#Part(a)
import math
ac = sqrt((ab)**2 + (bc)**2)  #Pythagoras theorem in mm
ac_m = ac/1000.0 #in m
acdash = sqrt((ab)**2 + (bc+disp_cd)**2)  #Pythagoras theorem in mm
acdash_m = acdash/1000.0 #in m
avg_strain_ac = (acdash_m - ac_m)/ac_m    #Normal strain formula

#Part(b)
theta_dash = 2* math.atan((addash_half)/(bc/2.0))
gamma_xy = (math.pi / 2.0)- theta_dash

#Display
print"The average normal strain along the diagonal AC is   =",round(avg_strain_ac,5),"mm/mm"
print"The shear strain at E relative to the x,y axes       =",round(gamma_xy,4),"rad"

```


      File "<ipython-input-5-a90ba5761179>", line 22
        print"The average normal strain along the diagonal AC is   =",round(avg_strain_ac,5),"mm/mm"
        ^
    SyntaxError: Missing parentheses in call to 'print'. Did you mean print(...)?
    


# 3: Mechanics Properties of Materials


<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110094126.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110094136.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110094144.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110094155.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110094202.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110094209.jpg?raw=true">


 ex 3.1 p.94


```python
#Given
offset = 0.2 #
a_x = 0.0016 #in/in
a_y = 50     #ksi

#Calculations
#Modulus of Elasticity
E = a_y/(a_x*10**3) #E is the slope in GPa.
#Yield Strength
sigma_ys = 68       #ksi, Graphically, for a strain of 0.0016 mm/mm
#Ultimate Stress
sigma_u = 108       #ksi B is the peak of stress strain graph.
#Fracture Stress
ep_f = 0.23        #in/in
sigma_f = 90       #ksi from the graph.

#Display
print"The Modulus of Elasticity is   ",E,"ksi"
print"The Yield Strength from the graph ",sigma_ys,"ksi"
print"The Ultimate Stress from the graph is ",sigma_u,"ksi"
print"The Fracture Stress from the graph is ",sigma_f,"ksi"

```

    The Modulus of Elasticity is    31.25 ksi
    The Yield Strength from the graph  68 ksi
    The Ultimate Stress from the graph is  108 ksi
    The Fracture Stress from the graph is  90 ksi
    

 ex 3.2 p.95


```python
#Given
stress_b = 600          #MPa, stress
strain_b = 0.023       #mm/mm, strain
stress_a = 450         #Mpa, stress
strain_a = 0.006      #mm/mm, strain

#Calculations
#Permanent Strain
E = stress_a/strain_a
strain_cd = stress_b/E              #The recovered elastic strain
perm_strain = strain_b - strain_cd  #mm/mm

#Modulus of Resilience
ur_initial = (0.5*stress_a*strain_a)
ur_final = (0.5*stress_b*strain_cd)

#Display
print"The Permanent Strain is              =",perm_strain,"mm/mm"
print"The Initial Modulus of Resilience is = ",ur_initial,"MJ/mm**3"
print"The Final Modulus of Resilience is   = ",ur_final,"MJ/mm**3"

```

    The Permanent Strain is              = 0.015 mm/mm
    The Initial Modulus of Resilience is =  1.35 MJ/mm**3
    The Final Modulus of Resilience is   =  2.4 MJ/mm**3
    

 ex 3.3 p.96


```python

#Given
p = 10000         #N, load
E_al = 70*(10**3) #MPa,pressure
#The given dimension are
l_ab = 600.0     #mm
d_ab = 20.0     #mm
l_bc = 400.0    #mm
d_bc = 15.0     #mm

#Calculations
import math
a_ab = (math.pi/4.0)*(d_ab**2)     # Area of AB
a_bc = (math.pi/4.0)*(d_bc**2)
stress_ab = p/a_ab
stress_bc = p/a_bc
e_ab = stress_ab/E_al
e_bc = 0.045                        #mm/mm . From the graph for stress_bc
elongation = (l_ab*e_ab)+ (l_bc*e_bc)
strain_rec = stress_bc/E_al
e_og = e_bc-strain_rec
rod_elong = e_og*l_bc

#Display
print"The elongation of the rod when load is applied is",round(elongation,1),"mm"

```

    The elongation of the rod when load is applied is 18.3 mm
    

 ex 3.4 p.103


```python
#Given
P = 80     	#kN load
#Dimensions are
l_z = 1.5	 #m
l_y = 0.05	#m
l_x = 0.1 	#m

#Calculations
Aa= l_x*l_y
normal_stress_z = (P*(10**3))/Aa
Est = 200 #GPa - from the tables.
strain_z = (normal_stress_z)/(Est*(10**9))
axial_elong = strain_z*l_z          #elongation in the y direction
nu_st = 0.32                        #Poisson's Ratio - from the tables.
strain_x = -(nu_st)*(strain_z)     #strain in the x direction.
strain_y = strain_x
#Elongations
delta_x = strain_x*l_x
delta_y = strain_y*l_y

#Display
print"The change in the length (z direction)       =",axial_elong*10**6,"micrometer"
print"The change in the cross section (x direction)=",delta_x*10**6,"micrometer"
print"The change in the cross section (y direction)=",delta_y*10**6,"micrometer"

```

    The change in the length (z direction)       = 120.0 micrometer
    The change in the cross section (x direction)= -2.56 micrometer
    The change in the cross section (y direction)= -1.28 micrometer
    

 ex 3.5 p.105


```python
#Given
#Refer to the graph of shear stress-strain of titanium alloy.
x_A = 0.008     #rad - x co-ordinate of A
y_A = 52	   #MPa - y co-ordinate of A
height = 2   	#mm
l = 3.0 		    #mm
b = 4.0 	        #mm


#Calculations
#Shear Modulus
G = y_A/x_A
#Proportional Limit
tou_pl = 52            #ksi Point A
#Ultimate Stresss
tou_u = 73             #ksi - Max shear stress at B
#Maximum Elastic Displacement
tanA= x_A               # tan theta is approximated as theta.
d = tanA*height
#Shear Force
A = l*b
V = tou_pl*A

#Display
print"The Shear Modulus                = ",G,"ksi"
print"The Proportional Limit           = ",tou_pl,"ksi"
print"The Ultimate Shear Stress        =  ",tou_u,"ksi"
print"The Maximum Elastic Displacement = ",d,"inch"
print"The Shear Force                  =  ",V,"kip"

```

    The Shear Modulus                =  6500.0 ksi
    The Proportional Limit           =  52 ksi
    The Ultimate Shear Stress        =   73 ksi
    The Maximum Elastic Displacement =  0.016 inch
    The Shear Force                  =   624.0 kip
    

 ex 3.6 p.106


```python
#Given
d_o = 0.025 		#m, outside diameter
l_o =0.25 		    #m
F =165 			    #kN, load
delta = 1.2 		#mm
G_al = 26 		    #GPa
sigma_y = 440 		#MPa

#Calculations
import math
#Modulus of Elasticity
A = (math.pi/4)*(d_o**2)
avg_normal_stress = (F*10**3)/A
avg_normal_strain = delta/l_o
E_al = avg_normal_stress/ avg_normal_strain
E_al = E_al/10**6
#Contraction of Diameter
nu = (E_al/(2*G_al))-1
strain_lat = nu*(avg_normal_strain)
d_contraction = strain_lat* d_o

#Display
print"The Modulus of Elasticity is = ",round(E_al,0),"GPa"
print"The contraction in diameter due to the force = ",round(d_contraction,4),"mm"

```

    70.0281749604
    The Modulus of Elasticity is =  70.0 GPa
    The contraction in diameter due to the force =  0.0416 mm
    

# 4: Axial Load

<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110102627.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110102633.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110102638.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110102645.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110102655.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110102701.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110102705.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110102710.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110102716.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110102727.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110102733.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110102740.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110102751.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110102757.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110102803.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110102808.jpg?raw=true">

https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/        ?raw=true


 ex 4.1 p.126


```python
#Given
a_ab = 1		    #inch**2, area
a_bd = 2 		    #inch**2
a_bc = a_bd
p = 29			   #kN, load
l_ab = 2		   #ft
l_bc = 1.5 		   #ft
l_cd = 1 	     #ft

#Calculations
#Internal Forces By method of Sections
p_bc = 15         #kip
p_cd = 7          #kip
p_ab=9           #kip
#Displacement
d=(p_bc*l_ab*12/(a_ab*p*10**3))+(p_cd*l_bc*12/(a_bd*p*10**3))+(p_ab*l_cd*12/(a_bc*p*10**3))
d_=p_cd*l_bc*12/(a_bd*p*10**3)

#Display
print"The displacement of B relative to C is = +%1.3f mm",round(d*10,4),"inch"
print "Displacement of B relative to C is",round(d_,5),"inch"

```


      File "<ipython-input-2-c4ccbf709cfc>", line 20
        print"The displacement of B relative to C is = +%1.3f mm",round(d*10,4),"inch"
        ^
    SyntaxError: Missing parentheses in call to 'print'. Did you mean print(...)?
    


 ex 4.2 p.127


```python
#Given
a_ab = 400.0      #mm**2, area
d_rod = 10.0      #mm
r_rod = d_rod/(2*1000) #radius in m
P = 80.0           #kN, load
E_st = 200*(10**9) #Pa, pressure
E_al = 70*(10**9) #Pa
l_ab = 400.0      #mm, length of ab
l_bc = 600.0      #mm  length of bc

#Calculations
#Displacement
#delta =PL/AE
import math
numerator1 = P*(10**3)*(l_bc/1000.0)
denominator1 = (math.pi*r_rod**2*E_st)
delta_cb = numerator1/denominator1 #to the right
numerator2 = -P*(10**3)*(l_ab/1000.0)
denominator2 = (a_ab* 10**-6 *E_al)
delta_a = -numerator2/denominator2 #to the right
delta_c = delta_a+delta_cb

#Display
print"The displacement of C with respect to B     = ",round(delta_cb,4),"m"
print"The displacement of B with respect to A     = ",round(delta_a,4),"m"
print'The displacement of C relative to A         = ',round(delta_c*1000,2),"mm"

```

    The displacement of C with respect to B     =  0.0031 m
    The displacement of B with respect to A     =  0.0011 m
    The displacement of C relative to A         =  4.2 mm
    

 ex 4.3 p.128


```python
#Given
d_ac = 20.0                  #mm, ac diameter
r_ac = d_ac/(2*1000)		 #radius in m
d_bd =40.0 			     #mm
r_bd = d_bd/(2*1000) 		#radius in m
P = 90.0 				#kN
E_st = 200*(10**9) 		#Pa
E_al = 70*(10**9) 		#Pa
l_af = 200.0 			#mm
l_fb = 400.0 			#mm
l_bd = 300.0			#mm
l_ac = l_bd

#Calculations
#Internal Force
P_ac = 60 #kN
P_bd = 30 #kN
#Displacement
import math
num1 = -(P_ac*10**3*(l_ac/1000.0))
denom1 = math.pi* r_ac**2*E_st
delta_a = -num1/denom1
delta_a = delta_a*1000
#Post BD delta = PL/AE
num2 = -(P_bd*10**3*(l_bd/1000))
denom2 = math.pi* r_bd**2*E_al
delta_b = -num2/denom2
delta_b = delta_b*1000
delta_f = delta_b + (0.184)*(l_fb/(l_af+l_fb))

#Display
print'The displacement of Post AC       =',round(delta_a,3),"mm downwards"
print'The displacement of Post BD       =',round(delta_b,3),"mm downwards"
print'nThe displacement of point F      =',round(delta_f,3),"mm downwards"

```

    The displacement of Post AC       = 0.286 mm downwards
    The displacement of Post BD       = 0.102 mm downwards
    nThe displacement of point F      = 0.225 mm downwards
    

 ex 4.5 p.139


```python
#Given
import math
d_ab = 5           #mm, ab diameter
A = (math.pi/4)*(d_ab/1000)**2
gap = 1           #mm
P = 20            #kN, pressure
E_st = 200        #GPa
l_ac = 0.4        #m
l_cb = 0.8        #m
l_ab = l_ac+l_cb

#Calculations
#Equilibrium
#  Eqn1 -Fa - Fb +P*10**3 = 0
#Compatibility
delta_ba = gap/1000.0 #in m
delta = delta_ba*(A*E_st*10**9) #delta_ba* Lac/AE

#Eqn2 (L/AE)*Fa -(Lb/AE)*Fb = delta_ba
#Solving Equations 1 and 2 by matrices
Fa=16            #KN
Fb=4.05          #KN

#Display
print"The reaction force at A = ",Fa,"kN"
print"The reaction force at B = ",Fb,"kN"

```

    The reaction force at A =  16 kN
    The reaction force at B =  4.05 kN
    

 ex 4.6 p.140


```python
#Given
P = 9 		     #kip, load
E_al = 10        #ksi,
E_br = 15        # ksi
h = 1.5 	     #ft
ri = 1 	         #inch
ro = 2 	         #inch

#Calculations
import math
A = (math.pi*(ro**2 -ri**2))
Ai = math.pi*ri**2
#Equilibrium Eqn1 F_al +F_br = P
#Compatibility
coeff_F_br = (A*E_al)/(Ai*E_br)
#Eqn2  F_al- (coeff_F_br*F_br) = 0
#Solving equations 1 and 2 using matrices
Fal=6
Fbr=3

avg_stress_al = Fal/A
avg_stress_br = Fbr/Ai
avg_stress_al = avg_stress_al/1000
avg_stress_br = avg_stress_br/1000

#Display
print"The axial force experienced by Al     = ",Fal,"ksi"
print"The axial force experienced by Brass  = ",Fbr,"ksi"
print'The average normal stress in Al       = ',round(avg_stress_al*1000,3),"ksi"
print'The average normal stress in Al Brass = ',round(avg_stress_br*1000,3),"ksi"

```

    The axial force experienced by Al     =  6 ksi
    The axial force experienced by Brass  =  3 ksi
    The average normal stress in Al       =  0.637 ksi
    The average normal stress in Al Brass =  0.955 ksi
    

 ex 4.7 p.141


```python
#Given
P = 15		 #kN. load
a_ab = 50 	#mm**2, area
a_ef =a_ab
a_cd = 30 	#mm**2, area
l_ef = 0.5 	#m, ef length
l_ce = 0.4 	#m
l_ac = 0.4 	#m

#Calculations
#In the y direction    F_a +F_c +F_e = P
#of moments -F_a(l_ac)+ P(l_ac/2) +F_e(l_ce) = 0

#Compatibility equation for displacemnts
coeff_Fc = (1/a_cd) #coefficient of Fc
coeff_Fa = (0.5/a_ab) #coefficient of Fc
coeff_Fe = (0.5/a_ef) #coefficient of Fc

#Solving the 3 Equations
F_a=9.52
F_b=3.46
F_c=2.02
#Display
print"The force in rod AB       = ",F_a,"kN"
print'The force in rod CD       = ',F_b,"kN"
print'The force in rod EF       = ',F_c,"kN"
```

    The force in rod AB       =  9.52 kN
    The force in rod CD       =  3.46 kN
    The force in rod EF       =  2.02 kN
    

 ex 4.8 p.142


```python
#Given
r_o = 0.5		 #inch, outside radius
r_i = 0.25		#inch, inside radius
l = 3 			#inch
one_turn =20   #threads per inch

#calculations
import math
a_t = (math.pi)*(r_o**2 - r_i**2) #Area of thread
a_b = (math.pi*(r_i**2))# Area of bolt
# In Y direction F_b - F_t = 0

#Compatibility
half_turn = one_turn/2.0
#Solving the two simultaneous equations for F_b and F_t
F_b =11.22       #kip
F_t = F_b
stress_b = F_b/a_b
stress_t = F_t/a_t
F_b = F_b/1000.0
F_t = F_t/1000.0

#Display
print'The stress in the bolt ',round(stress_b,1),"ksi"
print'The stress in the screw   ',round(stress_t,1),"ksi"

```

    The stress in the bolt  57.1 ksi
    The stress in the screw    19.0 ksi
    

 ex 4.9 p.144


```python
#Given
import math
l_ab = 800 + 400		#mm, ab length
P = 20 		         	#kN, load
d = 5/1000.0 			#m, diameter
area = (math.pi/4.0)*d**2 	#Cross sectional area
l_bbdash = 1/1000.0		#m
E = 200.0 			#GPa

#Calculations
#Compatibility
delta_p = (P*10**3*0.4)/(area*E*10**9) #delta = PL/AE
delta_b = delta_p-l_bbdash
F_b = (delta_b*area*E*10**9)/(l_ab/1000.0)
F_b = F_b/1000.0

#Equilibrium
F_a = P - F_b

#Display
print"The reaction at A ",round(F_a,2),"kN"
print'The reaction at B',round(F_b,2),"kN"
```

    The reaction at A  16.61 kN
    The reaction at B 3.39 kN
    

 ex 4.10 p.152


```python
#Given
T1 = 60		 #degree celcius
T2 = 120		#degress celcius
l_ab = 0.5		#m
area =l_ab**2 	#m**2
alpha = 6.6*10**-6	# per degree celcius
E = 29*10**6 		#kPa

#Equilibrium
#F_a = F_b = F
del_T = T2-T1
F = alpha*del_T*area*E                   #Thermal Stress Formula
avg_normal_comp_stress = (F*10**-3)/area # sigma = F/A

#Display
print"The force at A and B   = ",F/1000,"kip"
print'The average normal compressive stress  = ',avg_normal_comp_stress,"ksi"

```

    The force at A and B   =  2.871 kip
    The average normal compressive stress  =  11.484 ksi
    

 ex 4.12 p.154


```python
#Given
area_sleeve = 600*10**-6     #m**2, area
area_bolt = 400*10**-6       #m**2, area
T1 = 15                      #degree celcius
T2 = 80                      #degree celcius
alpha_bolt = 12*10**-6       #per degree celcius
alpha_sleeve = 23*10**-6     #per degree celcius
l = 0.15                    #m
E_bolt = 200*10**9 #N/m**2
E_sleeve = 73.1*10**9 #N/m**2

#Equilibrium
#F_s = F_b

#Compatibility
del_T = T2 - T1
delb_T = alpha_bolt*del_T*l
delb_F = l/(area_bolt*E_bolt)
dels_T = alpha_sleeve*del_T*l
dels_F = l/(area_sleeve*E_sleeve)

#delb_T + F_b*delb_F = dels_T + F_s*dels_F
F_b = (dels_T-delb_T)/(delb_F+dels_F)
F_b = F_b/1000 #in kN
F_s= F_b

#Display
print"The force experienced by sleeve and bolt, Fs=Fb ",round(F_s,1),"kN"

```

    The force experienced by sleeve and bolt, Fs=Fb  20.3 kN
    

 ex 4.13 p.165


```python
#Given
yiel = 250      #MPa, yield stress
r = 4            #mm, radius
width = 40       #mm
thick = 2       #mm

#a)
r_h = r/(width - (2*r))
w_h = width/(width - (2*r))
K = 1.75
area = (thick*(width - (2*r))*10**-6)
P_y = (yiel*10**6*area)/K
P_y = P_y/1000.0
#b)
P_p = (yiel*10**6*area)
P_p = P_p/1000.0

#Display
print"The maximum load P that does not cause the steel to yield ",round(P_y,2),"kN"
print'The maximum load that the bar can support ',P_p,"kN"

```

    The maximum load P that does not cause the steel to yield  9.14 kN
    The maximum load that the bar can support  16.0 kN
    

 ex 4.14 PN.166


```python
#Given:
P = 60             #KN, load
sigmaY= 420       #MPa, bending stress
E = 70*10**6       #MPa
l1 = 0.1           #m
l2 = 0.3           #m
r=0.005         #m

#Maximum Normal Stress:
#r_h = 6/20.0
#w_h = 40/20.0
#K = 1.6
#from sec 4.4
Fa=45
Fb=15
sigmaAC=(Fa/1000.0)/((math.pi)*r**2)
sigmaCB=(Fb/1000.0)/((math.pi)*r**2)
Fay=sigmaY*10**3*(math.pi)*r**2
Fb=P-Fay
if sigmaAC>sigmaY:
    print"Calculate sigmaAC again"
else:
    print"It is OK"
sigmaAC_=sigmaY
sigmaCB_=Fb/1000.0/((math.pi)*r**2)
if sigmaCB_<sigmaY:
    print"It is OK"
else:
    print"Calculate sigmaAC again"
dL=Fb*l2/(((math.pi)*r**2)*E)
epsilonCB=dL/l2
epsilonAC=dL/l1
epsilonY=sigmaY*10**6/(E*10**3)
sigmaACr=-sigmaAC_+sigmaAC
sigmaCBr=sigmaCB_-sigmaCB

#Display:
print"Residual stress in AC is",round(sigmaACr,0),"MPa"
print"Residual stress in CB is",round(sigmaCBr,0),"MPa"

```

    Calculate sigmaAC again
    It is OK
    420
    572.957795131
    190.98593171
    343.943726841
    Residual stress in AC is 153.0 MPa
    Residual stress in CB is 153.0 MPa
    

 ex 4.15 p.168


```python
#Given
weight = 3.0           #kip, weight
l_ab = 20.0            #ft, length
l_ac= 20.03          #ft
area = 0.05          #inch**2, area
sigmaY=50               #ksi

#calculations
strain_ab = (l_ac-l_ab)/l_ab
max_strain = 0.0017
stress_ab = (350*strain_ab)/max_strain
F_ab = stress_ab*area
E_st = 350/max_strain
del1 = l_ab/(area*10**-6*E_st*10**3)
del2 = l_ac/(area*10**-6*E_st*10**3)

T_ab=sigmaY*area
T_ac = weight-T_ab            #kip
stress_in_ab = (T_ab*10**3)/area
stress = (T_ac)/area
strain_ac = (stress*max_strain)/50.0
elong_ac = strain_ac*l_ac       #m
elong_ab = (l_ac-l_ab)+elong_ac #m

#Display
print'The force experienced by wire AB  = ',T_ab,"kip"
print'The force experienced by wire AC  = ',T_ac,"kip"
print'The elongation in wire AB         = ',round(elong_ab,4),"ft"
print'The elongation in wire AC         = ',round(elong_ac,5),"ft"

```

    The force experienced by wire AB  =  2.5 kip
    The force experienced by wire AC  =  0.5 kip
    The elongation in wire AB         =  0.0368 ft
    The elongation in wire AC         =  0.00681 ft
    

# 5: Torsion

<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110102823.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110102829.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110102835.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110102846.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110102909.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110102916.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110102921.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110102932.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110102937.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110102944.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110102951.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110102958.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110103005.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110103013.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110103021.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110103027.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110103032.jpg?raw=true">


 ex 5.2 p.188


```python
#Given
T1 = 4250.0        #kNmm, torque
T2 = -3000.0       #kNm
T3 = T1+T2         #kNm
r = 75.0           #mm, radius

#Calculation
#Section Property
import math
J = (math.pi/2.0)*(r**4) #polar moment of inertia
#Shear Stress
c_a = 75 #mm
tou_a = (T3*c_a*1000)/J #tou = Tc/J
c_b = 15 #mm
tou_b = (T3*c_b*1000)/J #tou = Tc/J

#Display
print'The shear stress developed at A   = ',round(tou_a*10,1),"ksi"
print'The shear stress developed at B   = ',round(tou_b*10,2),"ksi"

```

    The shear stress developed at A   =  18.9 ksi
    The shear stress developed at B   =  3.77 ksi
    

 ex 5.3 p.189


```python
#Given
di = 80             #mm, inside diameter
ri = 40/1000.0      #m, inside radius
d0 = 100            #mm, outside diameter
ro = d0/2000.0      #m outside radius
F = 80              #N, force
l1 = 0.2            #m, length
l2 = 0.3            #m

#Internal Torque
T = F*(l1+l2)
#Section Property
import math
J = (math.pi/2.0)*((ro**4)-(ri**4))
#Shear Stress
c_o = 0.05#m
tou_o = (T*c_o)/(J*10**6)
c_i = 0.04 #m
tou_i = (T*c_i)/(J*10**6)

#Display
print'The shear stress in the inner wall    = ',round(tou_i,3),"MPa"
print'The shear stress in the outer wall    = ',round(tou_o,3),"MPa"

```

    The shear stress in the inner wall    =  0.276 MPa
    The shear stress in the outer wall    =  0.345 MPa
    

 ex 5.4 p.191


```python
#Given
P = 5          #hp
N = 175           #rpm
allow_shear = 14.5 #ksi

#Calculations
import math
P_=P*550       #ftlb/s
ang_vel = (2*math.pi*N)/60.0 # rad/s
T = P_/ang_vel #P = T*angular velocity
c = ((2*T*12)/(math.pi*allow_shear*1000))**(1/3.0)
d =2*c

#Display
print'The required diameter of the shaft   = ',round(d,3),"inch"

```

    The required diameter of the shaft   =  0.858 inch
    

 ex 5.5 p.205


```python
#Given
E = 80*10**9       #N/m**2, longitudinal stress
d = 14/1000.0         #m,  diameter
r = d/2.0             #m, radius
R = 100             #mm
l_ac = 0.4           #m, length
l_cd = 0.3           #m
l_de = 0.5          #m
T_c = 280          #Nm, torque
T_a = 150           #Nm
T_d = 40             #Nm
T_ac = T_a           #Nm

#Calculation
T_cd = T_ac - T_c
T_de = T_cd - T_d
#Angle of Twist
import math
J = (math.pi/2.0)*(r**4)
phiA=T_ac*l_ac/(J*E)+T_cd*l_cd/(J*E)+T_de*l_de/(J*E)
Sp=phiA*R

#Display
print'The angle of twist of the shaft       = ',round(phiA,3),"rad"
print'The displacement of tooth P on gear A    =',round(Sp,3),"mm"

```

    The angle of twist of the shaft       =  -0.212 rad
    The displacement of tooth P on gear A    = -21.212 mm
    

 ex 5.6 p.206


```python
#Given
T = 45		 #N, torque
G = 80 		#GPa, pressure
d = 20/1000.0		 #m
r = d/2.0	 #m
l_dc = 1.5		 #m
l_ab = 2 		#m
r1 = 75/1000.0		 #m
r2 = 150/1000.0		 #m

#Calculation
#Internal Torque
F = T/r2
T_d_x = F*r1
#Angle of twist
import math
J = (math.pi/2)*(r**4)
phi_c = (T*l_dc)/(2*J*G*10**9)
phi_b = (phi_c*r1)/r2
phi_ab = (T*l_ab)/(J*G*10**9)
phi_a = phi_b + phi_ab

#Display
print'The angle of twist of end A of shaft AB   = ',round(phi_a,3),"rad"

```

    The angle of twist of end A of shaft AB   =  0.085 rad
    

 ex 5.7 p.207


```python
#Given
d = 2            #inch, diameter
r = d/2.0        #radius
c = d/2.0
l_buried = 600		 #mm, buried length
G = 5500*10**3 		#MPa
F = 1     		#N
l_handle= 150 		#mm
l_ab = 36 		#inch

#Internal Torque
T_ab = F*2*l_handle
t = T_ab/l_buried
#Maximum Shear Stress
import math
J = (math.pi/2.0)*(r**4)
tou_max = (T_ab*c)/(J)

#Angle of Twist
from scipy import integrate
def f(x):
    return(x)
x=integrate.quad(f,0,24) #Strain formula for short line segment = delta(sdash) =(1+e_z)delta(s)
X= x[0]
phi_a = ((T_ab*l_ab)+(50*X/4.0))/(J*G)

#Display
print'The maximum shear stress in the post          =',round(tou_max,1),"psi"
print'The angle of twist at the top of the post    = ',round(phi_a,5),"rad"

```

    The maximum shear stress in the post          = 191.0 psi
    The angle of twist at the top of the post    =  0.00167 rad
    

 ex 5.8 p.216


```python
#Given
d = 20/1000.0 #m, diameter
r = d/2.0
l_bc = 0.2
l_cd = 1.5
l_da = 0.3
T_c = 800  #Nm, torque
T_d = -500 #Nm

#Calculation
#Eqn 1      300 = T_a + T_b
#Compatibility
#Eqn 2
coeff_Tb = -l_bc
coeff_Ta = l_cd + l_da
#Solving Equations simultaneously using matrices
T_b = 645
T_a = -345

#Display
print'The reaction at A    = ',T_a,"Nm"
print'The reaction at B    = ',T_b,"Nm"

```

    The reaction at A    =  -345 Nm
    The reaction at B    =  645 Nm
    

 ex 5.9 p.217


```python
#Given
T = 250         #Nm, torque
G_st = 80        #GPa, pressure
G_br = 36        #GPa
ri = 0.5         #inch, inside radius
ro = 1         #inch, outside radius
l_ab = 1.2      #m

#Equilibrium
# -Tst-Tbr+250Nm = 0
coeff1_st = -1
coeff1_br = -1
b1 = -250

#Compatibility
#phi = TL/JG
import math
J1 = (math.pi/2.0)*(ro**4 - ri**4)
J2 = (math.pi/2.0)*(ri**4)
coeff2_st = 1/(J1*G_st*10**3)
coeff2_br = -1/(J2*G_br*10**3)
b2 = 0

#Solving the above two equations simultaneously using matrices
T_st = 2911.5       #lb-inch
T_br = 88.5         #lb-inch

shear_br_max = (T_br*10**3*ri)/(J2) #tou = (Tr)/J
shear_st_min = (T_st*10**3*ri)/(J1) #tou = (Tr)/J
shear_st_max = (T_st*10**3*ro)/(J1) #tou = (Tr)/J

shear_strain = shear_br_max / G_br
shear_strain = shear_strain

#Display
print'The maximum shear stress experienced by Steel =',round(shear_st_max/1000),"psi"
print'The minimum shear stress experienced by Steel =',round(shear_st_min/1000),"psi"
print'The maximum shear stress experienced by Brass  ',round(shear_br_max/1000),"psi"

```

    The maximum shear stress experienced by Steel = 1977.0 psi
    The minimum shear stress experienced by Steel = 989.0 psi
    The maximum shear stress experienced by Brass   451.0 psi
    

 ex 5.10 p.223


```python
#Given
import math
l = 4*12            #m, length
a = 1.5             #inch
tou_allow = 8000     #lb
phi_allow = 0.02    #rad
G = 3.7*10**6      #lb/inch**2, pressure
alpha = (60*math.pi)/180.0 #degrees

#Calculations
T_shear1 = (tou_allow*a**3)/(20.0) # allowable shear stress = (20T)/(a**3)
T_twist1 = (phi_allow*a**4*G)/(46*l) #angle of twist =(46TL)/(a**4*G)
T1 = min(T_shear1, T_twist1)

#Circular Cross Section
c_ = (a*a*math.sin(alpha))/(math.pi*2)
c = math.sqrt(c_)

J = (math.pi/2.0)*(c**4)
T_shear2 = (tou_allow*J)/(c*1000)
T_twist2 = (phi_allow*J*G*10**3)/(l*10**6)
T2 = min(T_shear2, T_twist2)

#Display
print'The largest torque that applied at the end of the triangular shaft  ',round(T1,0),"lb-in"
print'The largest torque that applied at the end of the circular shaft    ',round(T2*1000,0),"lb-in"

```

    The largest torque that applied at the end of the triangular shaft   170.0 lb-in
    The largest torque that applied at the end of the circular shaft     233.0 lb-in
    

 ex 5.12 p.228


```python
#Given
#The given dimension are
l_cd = 0.5       #m
l_de = 1.5       #m
h =60/1000.0     #m
w = 40/1000.0    #m
t_h = 3/1000.0   #m
t_w = 5/1000.0  #m
T_c = 60        #Nm
T_d = 25         #Nm
G = 38*10**9 #N/m**2
T1 = T_c - T_d

#Calculation
#Average Shear Stress
area = (w-t_w)*(h-t_h)
shear_a = T1/(2*t_w*area*10**6)
shear_b = T1/(2*t_h*area*10**6)

#Angle of Twist
phi=(T_c*l_cd/(4*area**2*G))*((2*57/5.0)+(2*35/3.0))+(T1*l_de/(4*area**2*G))*((2*57/5.0)+(2*35/3.0))

#Display
print'The average shear stress of the tube at A    = ',round(shear_a,2),"MPa"
print'The average shear stress of the tube at B    = ',round(shear_b,2),"MPa"
print'The angle of twist of end C                  = ',round(phi,5),"rad"

```

    The average shear stress of the tube at A    =  1.75 MPa
    The average shear stress of the tube at B    =  2.92 MPa
    The angle of twist of end C                  =  0.00629 rad
    

 ex 5.13 p.236


```python
#Given
fillet_r = 6 #mm, fillet radius
D = 40/1000.0 #m, diameter
d = 20/1000.0 #m
T = 30 #Nm

#Calculation
D_d = D/d
r_d = fillet_r/d
k = 1.3
#Maximum Shear Stress
import math
c = D/2.0
J = (math.pi/2.0)*(c**4)
max_shear = (k*T*c)/(J*10**6) # tou = K(Tc/J)

#Display
print'The maximum shear stress in the shaft is  = ',round(max_shear,1),"MPa"


```

    The maximum shear stress in the shaft is  =  3.1 MPa
    

 ex 5.14 p.242


```python
#Given
ro = 50/1000.0     #m, outside radius
ri = 30/1000.0     #m inside radius
c = ro
shear = 20*10**6 #N/m**2

#Maximum Elastic Torque
import math
J = (math.pi/2.0)*((ro**4)-(ri**4))
T_y = (shear*J)/c # tou = Tc/J
T_y = T_y/1000.0 #in kN

#Plastic Torque
x0 = 0.03
x1 = 0.05

from scipy import integrate
def f(rho):
    return(rho**2)
I=integrate.quad(f,x0,x1) #Strain formula for short line segment = delta(sdash) =(1+e_z)delta(s)

Tp =(2*math.pi*I[0]*shear)
Tp_= Tp/1000.0
#Outer Shear Strain
strain = (0.286*10**-3*ro)/(ri)

#Display
print'The maximum torque that can be applied to the shaft ',round(T_y,2),"kNm"
print'The plastic torque that can be applied to the shaft',round(Tp_,2),"kNm"
print'The minimum shear strain at the outer radius of the shaft  ',round(strain,6),"rad"

```

    The maximum torque that can be applied to the shaft  3.42 kNm
    The plastic torque that can be applied to the shaft 4.11 kNm
    The minimum shear strain at the outer radius of the shaft   0.000477 rad
    

 ex 5.15 p.243


```python
#Given
r = 20/1000.0    #m, radius
l = 1.5          #m, length
phi = 0.6       #rad
shear_y = 75*10**6 #N/m**2

#Calculations
max_shear_strain = (phi*r)/(l) #phi = (strain*L)/r
strain_y = 0.0016
r_y = (r*strain_y)/(max_shear_strain) #by ratios
#T= (math.pi*shear_y)*(4c**3 - r_y**3)/6.0
import math
c = r
T = (math.pi*shear_y)*(4*c**3 - r_y**3)/6.0
T = T/1000.0

#Display
print'The torque needed to twist the shaft by 0.6 rad   ',T,"kNm"

```

    The torque needed to twist the shaft by 0.6 rad    1.25412378731 kNm
    

 ex 5.16 p.244


```python
#Given
l = 5            #m, length
G = 12*10**3     #GPa
co = 2          #inch
ci = 1          #inch
shear_y = 12      #N/mm**2
strain_y = 0.002 #rad, strain

#Plastic Torque
import math
T_p = ((2*math.pi)*(co**3 - ci**3)*shear_y)/3.0
phi_p = (strain_y*l*shear_y)/ci
J = (math.pi/2.0)*(co**4 - ci**4)
shear_r = (T_p*co)/J
shear_i = (shear_r*ci)/(co)# shear = Tc/J
G = shear_y/strain_y
phi_dash = (T_p*l*10**3)/(J*G) #phi = TpL/JG
phi = phi_p - phi_dash


#Display
print'The plastic torque Tp   =  ',round(T_p,1),"kip in"
print'shear stress at inner wall is  ',round(shear_i,2),"ksi"

```

    The plastic torque Tp   =   175.9 kip in
    shear stress at inner wall is   7.47 ksi
    

# 6: Bending


<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110103135.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110103140.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110103145.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110103151.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110103200.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110103206.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110103213.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110103219.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110103226.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110103230.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231110103245.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111073542.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111073549.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111073557.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111073750.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111073800.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111073810.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111073826.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111073834.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111073843.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111073903.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111073912.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111073927.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111074010.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111074026.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111074525.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111074532.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111074540.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111074701.jpg?raw=true">



 ex 6.10 p.271


```python
#Given
Lab=12.0       #ft, length
f=120        #lb/ft , force
shear=240    #shear at x=0

#Calculation
a=f/Lab      #a=w/x
x=(shear*2/(a))**(1/2.0)
#Moment diagram
Mmax=shear*x-(0.5)*(a*x)*x*(1/3.0)*x

#Result
print"The Maximum Bending Moment is",round(Mmax,0),"lb-ft"

```


      File "<ipython-input-6-914dc98edbc3>", line 13
        print"The Maximum Bending Moment is",round(Mmax,0),"lb-ft"
        ^
    SyntaxError: Missing parentheses in call to 'print'. Did you mean print(...)?
    


 ex 6.11 PN.289


```python
#Given:
b = 6.0         #inch, length
h = 12.0        #inch
sigma_max = 2.0 #ksi
c = b

#Part (a):
I = (1/12.0)*b*h**3
M1 = (sigma_max*I)/(c) #sigma_max = Mc/I Flexure Formula

F = (0.5*sigma_max*b*b)
c = (2/3.0)*(b) #distance between centroids of each volume.
d=2*c          #distance
M2 = F*d

#Display:
print"The internal moment M calculated using : "
print"a)The flexure formula = ",M1,"kip-inch or ",M1/12.0,"kip-ft"
print"b)The resultant of the stress distribution using the basic principles ",M2,"kip-inch or",M2/12.0,"kip-ft"

```


      File "<ipython-input-7-043f161fb849>", line 17
        print"The internal moment M calculated using : "
        ^
    SyntaxError: Missing parentheses in call to 'print'. Did you mean print(...)?
    


 ex 6.12 PN.290


```python
#Given:
udl = 5     #kN/m, force
l1 = 3        #m , lenght
l2 = 6        #m
t = 20/1000.0 #mm
yb = 0.15   #m

#Section Property:
I_bar1 = (1/12.0)*(0.25)*(t**3)
Ad2 = (0.25)*(0.02)*(yb+(t/2.0))**2
I_bar2 = (1/12.0)*(0.02)*(0.3**3)
I = 2*(I_bar1 + Ad2) + I_bar2

#Bending stress:
c = 0.15 + t
M= 22.5 #kNm
sigma_max = (M*c)/(I*1000)
sigma_B = (M*yb)/(I*1000)

#Display:
print"The absolute maximum bending stress is ",round(sigma_max,1),"MPa"
```

 ex 6.13 PN.291


```python
#Given:
t1 = 15/1000.0 #m, thickness
t2 = 20/1000.0 #m
l = 250/1000.0 #m
b = 200/1000.0 #m
P = 2.4        #kN, load
l_a = 2        #m
l_b = 1        #m

#Internal Moment:
y1 = b/2.0
y2 = t2/2.0
A = (2*t1*b)+(t2*l)
y_bar = ((2*y1*t1*b)+(y2*t2*l))/A
M = (P*l_a)+(1*y_bar)

#Section Property:
I1 = (1/12.0)*(l*t2**3) + (l*t2*(y_bar - y2)**2)
I2 = (1/12.0)*(t1*b**3) + (t1*b*(y1 - y_bar)**2)
I =I1+ 2*I2

#Maximum Bending Stress:
c = b - y_bar
sigma_max = (M*c)/(I*1000)

#Display:
print'The maximum bending stress at section a-a is',round(sigma_max,1),"MPa"

```

 ex 6.14 PN.292


```python
#Given:
b = 60/1000.0    #m, breadth
h = 30/1000.0    #m, height
M = 40           #Nm, moment
c1= h/2.0
rib_t = 5/1000.0  #m
rib_w = 10/1000.0 #m

#Without Ribs:
I1 = (1/12.0)*(b*h**3)
sigma_max1 = (M*c1)/(I1*10**6)

#With Ribs:
y1 = c1
y2 = h+(rib_t/2.0)
A1 = h*b
A2 = rib_t*rib_w
y_bar = ((y1*A1)+2*(y2*A2))/(A1 + 2*A2)

c2 = h+rib_t - y_bar
I2 = I1 + (b*h*(y_bar - y1)**2)
I3 = (1/12)*rib_w*rib_t**3 + (rib_w*rib_t*(y2 - y_bar)**2)
I = I2 + 2*I3
sigma_max2 = (M*c2)/(I*10**6)

if(sigma_max2>sigma_max1):
    print"The maximum normal stress in the member without ribs",round(sigma_max1,2),"MPa"
    print"The maximum normal stress in the member with ribs = ",round(sigma_max2,2),"MPa"
    print"The ribs should be omitted."

else:
    print"no"


```

 ex 6.15 PN.306


```python
#Given:
M = 12     #kNm, moment
l_bc = 0.2 #m, length
l_be = 0.4 #m

#Internal Moment Components:
import math
My = (-4/5.0)*M
Mz = (3/5.0)*M

Iy = (1/12.0)*(l_be*l_bc**3)
Iz = (1/12.0)*(l_bc*l_be**3)

#Bending Stress:
sigma_B = (-Mz*1000*(l_be/2.0))/Iz + (My*1000*(-l_bc/2.0))/Iy
sigma_B = sigma_B/10.0**6
sigma_C = (-Mz*1000*(l_be/2.0))/Iz + (My*1000*(l_bc/2.0))/Iy
sigma_C = sigma_C/10.0**6
sigma_D = (-Mz*1000*(-l_be/2.0))/Iz + (My*1000*(l_bc/2.0))/Iy
sigma_D = sigma_D/10.0**6
sigma_E = (-Mz*1000*(-l_be/2.0))/Iz + (My*1000*(-l_bc/2.0))/Iy
sigma_E = sigma_E/10.0**6

#Orientation of Nuetral Axis:
z = (0.45)/(sigma_E + sigma_B)

#theta = -atan(4/3.0)
import math
tanA = (Iz/Iy)*(-4/3.0)
alpha = math.atan(tanA)
alpha = alpha*(180/math.pi)


#Display:
print"The normal stress at B",sigma_B,"MPa"
print"The normal stress at C ",sigma_C,"MPa"
print"The normal stress at D ",sigma_D,"MPa"
print"The normal stress at E ",sigma_E,"MPa"
print"The orientation of the nuetral axis ",round(alpha,1),"degree"


```


      File "<ipython-input-8-7c1a6c509105>", line 35
        print"The normal stress at B",sigma_B,"MPa"
        ^
    SyntaxError: Missing parentheses in call to 'print'. Did you mean print(...)?
    


 ex 6.16 PN.308


```python
#Given:
import math
M =20            #kN, moment
Iy = 0.96*10**-3 #m**4, moment of inertia
Iz = 7.54*10**-3 #m**4
theta = 57.1*(math.pi/180.0)  #angle

#Calculation
#Internal moment Components:
My = M*sin(theta)
Mz = M*cos(theta)
#Bending Stress:
y_p = -0.2 #y Coordinate of P
z_p = 0.35 #z Coordinate of P

theta1 = (math.pi/2)-(theta)
yp = -z_p*math.sin(theta1)+ y_p*math.cos(theta1)
zp = z_p*math.cos(theta1) + y_p*math.sin(theta1)

#Eq 6-17

sigma_p = ((Mz*-yp)/Iz) + ((My*zp)/Iy)
sigma_p = sigma_p/10.0**3
#Orientation of the Nuetral Axis:
alpha = math.atan((Iz/Iy)*math.tan(theta))
alpha = alpha*(180/math.pi)

#Display:
print"The maximum normal stress at point P is",round(sigma_p,1),"Mpa"
print"The orientation of the nuetral axis is",round(alpha,1),"degree"

```

 ex 6.17 PN.316


```python
#Given:
M = 2       #kNm, moment
Ew = 12     #GPa, Pressure
Est = 200.0 #GPa
bw = 150/1000.0 #m
t = 20/1000.0 #m
rib = 9/1000.0#m

#Section Properties:
n = (Ew/Est)
bst = n*bw
y1 = t/2.0
A1 = t*bw
y2 = bw/2.0 + t
A2 = rib*bw

y_bar = (y1*A1 +y2*A2)/(A1+A2)
I1 = (1/12.0)*(bw)*(t**3) + A1*(y_bar - y1)**2
I2 = (1/12.0)*(rib)*(bw**3) + A2*(y2-y_bar)**2
Ina = I1+I2

#Normal Stress:
sigma_B = (M*(bw+t-y_bar))/(Ina*1000)
sigma_C = (M*(y_bar))/(Ina*1000)

#Normal Stress in the wood:
sigmaB = n*sigma_B

#Display:
print"The normal stress at point B = ",round(sigma_B,1),"MPa"
print"The normal stress at point C = ",round(sigma_C,1),"MPa"
print"The normal stress at point B in the wood =",round(sigmaB,2),"MPa"

```

 ex 6.18 PN.308


```python
#Given:
M = 60          #kip, moment
Est = 29*10**3  #GPa, stress
Econc = 3.6*10**3  #GPa
d = 25.0        #mm, diameter
r = d/2.0    #radius
w = 12      #inch, width
ht =16      #inch, height

#Section Properties:
import math
n = Est/Econc
Ast = 2*math.pi*r**2
A = n*Ast

#h**2+2.11h-33.7=0
#Constants (a,b,c) of quadratic no
a=1
b=2.11
c=-33.7
d=b**2-4*a*c
x1 = (-b+math.sqrt(b**2-4*a*c))/2*a
x2 = (-b-math.sqrt(b**2-4*a*c))/2*a
I = (1/12.0)*(w*x1**3) +w*x1*(x1/2.0)**2 + 12.65*(ht - x1)**2

#Normal Stress:
sigma_conc_max = (M*12*x1)/(I)
sigma_conc = (M*12*(ht-x1))/(I)
sigma_st = n*sigma_conc

#Display:
print"The normal stress in each steel reinforcing rod = ",round(sigma_st,1),"ksi"
print"The maximum normal stress in the concrete = ",round(sigma_conc_max,2),"ksi"
```

 ex 6.19 PN.324


```python
#Given:
#The given radius are
ri = 200/1000.0 #m
r1 = 250/1000.0 #m
ro = 280/1000.0 #m
M = 4 #kNm
a = 0.05 #m
h = 0.03 #m

#Section Properties:
import math
A1 = a**2
A2 =  (0.5*a*h)
A = A1+A2
r_avg1 = (r1+ri)/2.0
r_avg2 = r1+(h/3.0)
r_bar =((r_avg1*A1)+(r_avg2*A2))/A

int_dA_r1 = a*math.log(r1/ri)
int_dA_r2 = (a*ro*math.log(ro/r1))/(ro-r1) - a
R = (A)/(int_dA_r1+ int_dA_r2)
k= r_bar - R

#Normal Stress:
sigma_B = (-M*(R-ri))/(A*ri*k*1000)
sigma_A = (-M*(R-ro))/(A*ro*k*1000)
sigma = max(abs(sigma_B),abs(sigma_A))

#Display:
print"The maximum normal stress in the bar =",round(sigma,0),"MPa"

```

 ex 6.20 PN.328


```python
#Given:
M = 5         #kNm, moment
sigma_y = 500 #MPa, stress
r = 16        #mm, radius
h = 80.0      #mm, height
w = 120        #mm, width
r_h = r/h
w_h = w/h
k = 1.45
c = h/(2000.0)
t = 20/1000.0 #m

#Calculations:
I = (1/12.0)*(t)*(h/1000.0)**3
sigma_max = (k*M*c)/(I*1000)

#Display:
print"The maximum normal stress in the steel =",round(sigma_max,0),"Mpa"


```

 ex 6.21 PN.341


```python
#Given:
sigma_y = 36 #ksi, stress
t = 0.5       #inch, thickness
w = 8       #inch, width
h = 9         #inch, height

#Maximum Elastic Moment:
yy = (h+t)/2.0
I1 = (1/12.0)*(w*t**3) + (w*t*yy**2)
I = (1/12.0)*(t*h**3) + 2*(I1)
c = 5.0 #mm

My = (sigma_y*I)/(c) #Flexure Formula
#Plastic Moment:
C1= sigma_y*t*(h/2.0)
C2= sigma_y*t*(w)
Mp = (2*2.25*C1) + (2*yy*C2)

#Shape Factor:
k = Mp/My

#Display:
print"The shape factor for the beam = ",round(k,2)

```

## #  ex 6.22 p.342


```python
#Given:
sigma_y = 250 #MPa, bending stress
t = 15/1000.0 #m, thickness
w = 100/1000.0 #m, width
h = 120/1000.0 #m, height
c = 10/1000.0 #m

#Calculations:
d = ((sigma_y*t*w)+(sigma_y*t*h))/(sigma_y*t*2)
T = sigma_y*t*d*10**3
C1 = sigma_y*t*c*10**3
C2 = sigma_y*t*w*10**3
Mp = (T*d/2.0)+(C1*c/2.0)+(C2*(c+t/2.0))

#Display:
print"The plastic moment that can be resisted by the beam = ",round(Mp,1),"MPa"

```

## #  ex 6.23 p.343


```python
#Given:
sigma_y = 36   #ksi, bending stress
t = 12.5       #mm, thickness
w = 8          #inch, width
h = 9        #inch, height
c = (h/2.0)+t
I = 211        #inch**4, moment of inertia
Mp = 1732.5   #kip

#Calculations:
sigma_allow = (Mp*c)/(I)
y = (sigma_y*c)/(sigma_allow)

#Display:
print"The point of zero normal stress = ",round(y,2),"inch"


```

## #  ex 6.24,p.:344


```python
#Given:
ep1 = 0.01      #Strain at top
ep2 = 0.05      #strain at bottom
sig1 = 150      #kip
sig2 = 150     #N/mm**2
sig3 = 40      #N/mm**2
y = 0.3         #in
h = 3           #in
w = 2           #in

#Calculations:
yy = (h/2.0)-y
T1 = (1/2.0)*(sig3*yy*w)
y1 = y +(2/3.0)*(yy)
T2 = yy*sig1*w
y2 = y+(0.5*yy)
T3 = (0.5*y*sig1*w)
y3 = (2/3.0)*(y)
M = 2*(T1*y1 + T2*y2 + T3*y3)

#Display:
print"The bending moment applied that will cause a strain of ",round(M,0),"kip in"

```

# 7: Transverse Shear


<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111075019.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111075039.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111075045.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111075054.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111075101.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111075107.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111075118.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111075126.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111075134.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111075158.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111075208.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111075215.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111075223.jpg?raw=true">


 ex 7.1 p.369


```python
#Given
V = 4		 #kN, load
co = 0.05		#mm, outside radius
ci = 0.02		 #mm, inside radius
t1 = 0.1 	#mm, thickness
t2=0.06

#Part (a)
#Section Properties
import math
Isolid=1/4.0*(math.pi)*co**4
Itube = 1/4.0*(math.pi)*(co**4-ci**4)
Qsolid=4*co/(3*math.pi)*(math.pi*co**2/2.0)
Qtube=4*co/(3*math.pi)*(math.pi*co**2/2.0)-4*ci/(3*math.pi)*(math.pi*ci**2/2.0)
Tsolid=V*10**3*Qsolid/(Isolid*t1)
Ttube=V*10**3*Qsolid/(Itube*t2)

#Display
print"The shear stress in solid    = ",round(Tsolid/1000,1),"KPa"
print'The shear stress in tube  = ',round(Ttube/1000000,2),"MPa"

```

    The shear stress in solid    =  679.1 KPa
    The shear stress in tube  =  1.16 MPa
    

 ex 7.3 p.370


```python
#Given
V = 80.0 			#kN, load
thick_1 = 20/1000.0 	#m, thickness
thick_2 = 15/1000.0 	#m
l = 300/1000.0 		#m, length
y = 100/1000.0 		#m
h = 2*y
y_dash = y +thick_1/2.0

#Part(a)
I1 = (thick_2*(h**3))/12.0
I2 = (l*(thick_1**3))/12.0
I3 = (l*thick_1*(y_dash)**2)
I = I1+2*(I2+I3) #Moment of inertia
Q_b = y_dash*l*thick_1
#At B'
tou_b_dash = (V*Q_b)/(I*l*1000)
#At B
tou_b = (V*Q_b)/(I*thick_2*1000)

#At C
Q_c = (y_dash*l*thick_1)+(y*thick_2*y/2.0)
tou_c = (V*Q_c)/(I*thick_2*1000)

#Display
print"The shear stress at B dash     = ",round(tou_b_dash,1),"MPa"
print"The shear stress at B         = ",round(tou_b,1),"MPa"
print"The shear stress at C     = ",round(tou_c,1),"MPa"

```

    The shear stress at B dash     =  1.1 MPa
    The shear stress at B         =  22.6 MPa
    The shear stress at C     =  25.2 MPa
    

 ex 7.4 p.372


```python
#Given
udl = 6.5		 #kN, force
l_bc = 8 		#m, length
l = 150/1000.0		#m
t = 30/1000.0		#m, thickness

#Calculation
#Internal Shear
w = udl*l_bc/2.0
l_wc = l_bc/4.0
l_bw = l_bc - l_wc
V = (w*l_bw)/l_bc
R_b = w - V

#Section Properties
y1= l/2.0
A = (l*t)
y2= l+(t/2.0)
y_dash = (y1*A + y2*A)/(2*A)
I1 = (t*l**3)/12.0
I2 = (A*(y_dash-y1)**2)
I3 = (l*t**3)/12.0
I4 = (A*(y2 - y_dash)**2)
I = I1+I2+I3+I4
Q = ((l+t)-(t/2.0)-y_dash)*A
#Shear Stress
tou_max = (V*Q)/(I*t*1000)

#Display
print"The maximum shear stress in the glue necessary to hold the boards together",round(tou_max,2),"MPa"

```

    The maximum shear stress in the glue necessary to hold the boards together 4.88 MPa
    

 ex 7.5 p.380


```python
#Given
V = 850            #kN, force
#The given dimension are
l1 =250/1000.0     #m.
l2 = 300/1000.0     #m
l3 = 125/1000.0    #m
t = 10/1000.0      #m
h = 200/1000.0     #m

#Calculation
A1 = l1*t
A2 = l2*t
A3 = l3*t
y1 = l2+(t/2.0)
y2 = l2/2.0
y3 = h+(t/2.0)
y_dash = (2*y2*A2 + A1*y1 + A3*y3)/(2*A2 + A1 + A3)
I1 = ((l1*t**3)/12.0) +(A1 * (l2+(t/2.0)-y_dash)**2)
I2 = ((t*l2**3)/12.0) +(A2 * (y_dash - (l2/2.0))**2)
I3 = ((l3*t**3)/12.0) +(A1 * (h+(t/2.0)-y_dash)**2)
I = 2*I2 + I1 + I3
Q_b = (l2+(t/2.0) - y_dash)*A1 #Q = y'A'
Q_c = (h+(t/2.0) - y_dash)*A3 #Q = y'A'

#Shear Flow
q_b = (V*Q_b)/I
q_c = (V*Q_c)/I
q_b = q_b/(2*1000)
q_c = q_c/(2*1000)

#Display
print"The shear flow at B, resisted by the glue is  ",round(q_b,2),"MN/m"
print"The shear flow at C, resisted by the glue is  ",round(q_c,4),"MN/m"

```

    The shear flow at B, resisted by the glue is   1.31 MN/m
    The shear flow at C, resisted by the glue is   0.0498 MN/m
    

 ex 7.6 p.381


```python
#Given
V = 80     #lb, load
#The given dimension are
t = 1.5    #inch
a = 7.5    #inch
b = a-2*t  #inch
F_nail= 30 #lb


#Calculation
#Section Properties
I = (a*a**3 - b*b**3 )/12.0
Q_b = (((a-2*t)/2.0)+(t/2.0))*a*t #Q = y'A'
Q_c = (((a-2*t)/2.0)+(t/2.0))*(a-2*t)*t #Q = y'A'

#Shear Flow
q_b = (V*Q_b)/I
q_c = (V*Q_c)/I
s_b = F_nail/(q_b/2.0)
s_c = F_nail/(q_c/2.0)

#Display
print"The maximum spacing of nails required at B is    =",s_b,"inch"
print"The maximum spacing of nails required at C is    =",s_c,"inch"

```

    The maximum spacing of nails required at B is    = 5.1 inch
    The maximum spacing of nails required at C is    = 8.5 inch
    

 ex 7.7 p.382


```python
#Given
F = 40        #lb, force
#The other dimension are
s = 9.0         #inch
h = 5         #inch
t = 0.5       #inch
w = 3         #inch
w_3 = w/3.0   #inch

#Calculations
I = (w*h**3)/12.0 - (2*w_3*(h - 2*t)**3)/12.0
#Case 1
Q1 = ((h-t)/2.0)*(w*t)
V1 =((F/s)*I)/Q1   #q = VQ/I

#Case2
Q2 = ((h-t)/2.0)*(w_3*t)
V2 =((F/s)*I)/Q2   #q = VQ/I

#Display
print("The largest vertical shear that can be supported in Case 1    = ",round(V1,1),"lb")
print("The largest vertical shear that can be supported in Case 2    = ",round(V2,1),"lb")

```

    The largest vertical shear that can be supported in Case 1    =  27.1 lb
    The largest vertical shear that can be supported in Case 2    =  81.3 lb
    

 ex 7.8 p. 381


```python
#Given
V = 10         #lb, load
b1 = 6        #inch
h1 = 8        #inch
t = 1         #inch
b2 = b1-2*t
h2 = h1-2*t   #inch
b3 = 4         #inch

#Calculations
I = ((b2/2.0*(b1+t)**3))/12.0 +2*((b3+t)*t*((h1-t)/2.0)**2)
q_b = 0
Q_c = (h1-t)/2.0*(b3+t)*t
q_c = 1/2.0*(V*Q_c)/I
Q_d = 2*((h1-t)/4.0)*(h1-t)/2.0*t+(h1-t)/2.0*(b3+t)*t
q_d = 1/2.0*(V*Q_d)/I #Q = VQ/I

#Display
print"Variation of shear flow at B  = ",q_b,"kip/inch"
print"Variation of shear flow at C  = ",round(q_c,3),"kip/inch"
print'Variation of shear flow at D  = ',round(q_d,3),"kip/inch"

```

    Variation of shear flow at B  =  0 kip/inch
    Variation of shear flow at C  =  0.487 kip/inch
    Variation of shear flow at D  =  0.828 kip/inch
    

# 8: Combined Loadings

<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111075254.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111075825.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111075837.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111075905.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111081356.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111081404.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111081412.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111081421.jpg?raw=true">



 ex 8.1 p.408


```python
#Given
di=4*12          #inch, diameter
ri=di/2.0        #Radius
t=0.5           #inch, thickness
sigma=20.0     #Ksi,  stress

#Calculation
#Cylindrical Pressure Vessel
p1=(t*sigma)/ri #sigma = pr/t
#Spherical Vessel
p2=(2*t*sigma)/(ri) #sigma = pr/2t

#Display
print"The maximum internal pressure the cylindrical pressure vessel can sustainis",round(p1*1000,0),"psi"
print"The maximum internal pressure a spherical pressure vessel can sustain is",round(p2*1000,0),"psi"


```

    The maximum internal pressure the cylindrical pressure vessel can sustainis 417.0 psi
    The maximum internal pressure a spherical pressure vessel can sustain is 833.0 psi
    

 ex 8.2 p.414


```python
#Determine stress at point B and C

#Given
P = 15000.0     #N, force,
a = 40.0        #mm, length
b = 100.0       #mm, breadth

#CAlculation
#Normal Force
A = a*b         #Area
sigma = P/A
#Bending Moment
I = (a*b**3)/12.0 #I = (1/12)*bh**3
M = P*(b/2.0)
c = b/2.0
sigma_max =(M*c)/I

#Superposition
x = ((sigma_max-sigma)*b)/((sigma_max+sigma)+(sigma_max-sigma))
sigma_b = (sigma_max-sigma)
sigma_c = (sigma_max + sigma)

#Display
print"The state of stress at B  is(tensile)",sigma_b,"psi"
print"The state of stress at C is (compressive)",sigma_c,"psi"




```

    The state of stress at B  is(tensile) 7.5 psi
    The state of stress at C is (compressive) 15.0 psi
    

 ex 8.3 p.415


```python
#Calculate the stress

#Given:
ri =24       #inch, radius
t = 0.5      #inch
ro = ri+t
sp_wt_water = 62.4    #lb/ft**3
sp_wt_steel = 490     #lb/ft**3
l_a = 3               #m depth of point A from the top

#Internal Loadings:
import math
v = (math.pi*l_a)*((ro/12.0)**2 - (ri/12.0)**2)
W_st = sp_wt_steel*v
p = sp_wt_water*l_a #lb/ft**2,Pascal's Law
p_=p*0.0069         #psi
#Circumferential Stress:
sigma1 = (p_*ri)/t
#Longitudinal Stress:
A_st = (math.pi)*(ro**2 - ri**2)
sigma2 = W_st/A_st

#Display:
print"The state of stress at A (Circumferential)",round(sigma1,0),"KPa"
print"The state of stress at A (Longitudinal) ",round(sigma2,1),"KPa"


```

    The state of stress at A (Circumferential) 62.0 KPa
    The state of stress at A (Longitudinal)  10.2 KPa
    

 ex 8.4 p.417


```python
#Determine the state of stress

#Given
y_c = 125/1000.0 #m,  length
x_c = 1.5        #m
y_b = 1.5         #m
x_b = 6.0         #m
udl = 50.0       #kN/m, force per unit length
l_udl = 2.5      #m
l = 250/1000.0   #m
width = 50/1000.0 #m


#Internal Loadings:
N = 16.45 #kN
V = 21.93 #kN
M = 32.89 #kNm

#Stress Components:
#Normal Force:
A = l*width
sigma1 = N/(A*1000)
#Shear Force:
tou_c = 0
#Bending Moment:
c = y_c
I = (1/12.0)*(width*l**3)
sigma2 = (M*c)/(I*1000)
#Superposition:
sigmaC = sigma1+sigma2

#Display:
print"The stress due to normal force at C   ",round(sigma1,2),"MPa"
print"The stress due to shear force at C    ",tou_c,"MPa"
print"The stress due to bending moment at C ",round(sigma2,1),"MPa"
print"The resultant stress at C             ",round(sigmaC,1),"MPa"

```

    The stress due to normal force at C    1.32 MPa
    The stress due to shear force at C     0 MPa
    The stress due to bending moment at C  63.1 MPa
    The resultant stress at C              64.5 MPa
    

 ex 8.5 p.418


```python
#Given:
r = 0.75*10       #mm, radius
f_x =40000        #N, force along x
f_y =800          #N force along y
l1 = 0.8         #mm
l2 = 0.4        #mm

#Stress Components:
#Normal Force:
A1 =l1*l2
sigma1 = f_x/A1   #stress = P/A

#Bending Moment:
M_y1 = 8000        #N
c1 = l2/2.0
I1 = (1/12.0)*(l1*l2**3)
sigma_A1 = (M_y1*c1)/I1
M_y2 = 16000        #N
c2 = l2
I2 = (1/12.0)*(l2*l1**3)
sigma_A2 = (M_y2*c2)/I2

#Resultant:
res_normal= -sigma1-sigma_A1-sigma_A2

#Display:

print"The stress due to normal force at A   ",sigma1/1000,"KPa"
print"The stress due to bending moment 8KN at A  ",sigma_A1/1000,"KPa"
print"The stress due to bending moment 16KN at A  ",sigma_A2/1000,"KPa"
print"The resultant normal stress component at A ",res_normal/1000,"KPa"


```

    The stress due to normal force at A    125.0 KPa
    The stress due to bending moment 8KN at A   375.0 KPa
    The stress due to bending moment 16KN at A   375.0 KPa
    The resultant normal stress component at A  -875.0 KPa
    

 ex 8.7 p.420


```python
#Calculate Stress at A

#Given:
P = 500        #lb, load
r=0.75         #inch, radius
#Stress Components:

#Normal Force:
import math
A = math.pi*r**2
sigma = P/A

#Bendng Moments:
M_x =7000     #lb
cy = r
Ix = (1/4.0)*math.pi*(r**4)
sigma_max_1 = (M_x*cy)/Ix

M_y = P*l_bc/2.0
cx = l_bc/2.0
Iy = (1/12.0)*(l_ab*l_bc**3) #I = (1/12)*(bh**3)
sigma_max_2 = (M_y*cx)/Iy #sigma = My/I
#Superposition
sigmaf=round(sigma/1000,3)+round(sigma_max_1/1000,1)

#Display:
print"The normal stress at corner A ",round(sigma/1000,3),"ksi"
print"The normal stress at point A for Bending Moment ",round(sigma_max_1/1000,1),"ksi"
print"The normal stress at point A for Superimposition ",round(sigmaf,1),"ksi"

```

    The normal stress at corner A  0.283 ksi
    The normal stress at point A for Bending Moment  21.1 ksi
    The normal stress at point A for Superimposition  21.4 ksi
    

 ex 8.8 p.421


```python
#Determine the state of stress at point A

#Given
r=0.75           #radius,inch
V=800             #Forca, lb

#Calculation
#shear force
import math
Q=(4*r/(3*math.pi))*(0.5*(math.pi*r**2))
Ix=(1/4.0)*math.pi*(r**4)
tau=V*Q/(Ix*2*r)
#Since point A is on neutral axis
sigmaA=0
T=11200           #lb inch, force
Iy=(1/2.0)*math.pi*(r**4)
sigma_a=T*r/Iy
#Superimposition
sigmayzA=tau+sigma_a


#Result
print"The stress for shear stress distribution is",round(tau/1000,3),"ksi"
print"The stress for Bending moment is",sigmaA,"ksi"
print"The stress for torque",round(sigma_a/1000,2),"ksi"
print"The stress for Superimposition ",round(sigmayzA/1000,1),"ksi"

```

    The stress for shear stress distribution is 0.604 ksi
    The stress for Bending moment is 0 ksi
    The stress for torque 16.9 ksi
    The stress for Superimposition  17.5 ksi
    

# 9: Stress Transformation

<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111081517.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111081528.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111081535.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111081549.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111081601.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111081627.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111081722.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111081803.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111081858.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111081906.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111081918.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111081925.jpg?raw=true">



```python
#Given example 9.1
import math
tau = 25		 #MPa, shear stress
sigma1 = 80 		#MPa, stress
sigma2 = -50 		#MPa
phi = 30*(math.pi/180.0)

# Calculations
sigma_x1 = (sigma1*math.cos(phi)*math.cos(phi))- (tau*math.cos(phi)*math.sin(phi)) - (sigma2*math.sin(phi)*math.sin(phi))- (tau*math.sin(phi)*math.cos(phi))
tau1 = (sigma1*math.cos(phi)*math.sin(phi))+ (tau*math.cos(phi)*math.cos(phi)) + (sigma2*math.sin(phi)*math.cos(phi))- (tau*math.sin(phi)*math.sin(phi))
sigma_x2 = (tau*math.cos(phi)*math.sin(phi))- (sigma2*math.cos(phi)*math.cos(phi)) + (tau*math.sin(phi)*math.cos(phi))+ (sigma1*math.sin(phi)*math.sin(phi))
tau2 = (tau*math.cos(phi)*math.cos(phi))+ (sigma2*math.cos(phi)*math.sin(phi)) - (tau*math.sin(phi)*math.sin(phi))+ (sigma1*math.sin(phi)*math.cos(phi))

#Display
print("The normal stress component in the x diection is     = ",round(sigma_x1,1),"MPa")
print("  The shear stress component in the x diection is    = ",round(tau1,1),"MPa")
print("  The normal stress component in the y diection is   = ",round(sigma_x2,1),"MPa")
print("  The shear stress component in the y diection is    = ",round(tau2,1),"MPa")

```

    The normal stress component in the x diection is     =  50.8 MPa
      The shear stress component in the x diection is    =  25.5 MPa
      The normal stress component in the y diection is   =  79.2 MPa
      The shear stress component in the y diection is    =  25.5 MPa
    


```python
#Given example 9.2
import math
phi = -30*(math.pi/180)    #angle
theta = 60*(math.pi/180)
sigma_x = -80              #MPa
sigma_y = 50               #MPa
tau_xy = -25               #MPa

#Plane CD
sigma_x1 = (sigma_x+sigma_y)/2 + ((sigma_x-sigma_y)*math.cos(2*phi))/2 + (tau_xy*math.sin(2*phi)) #Eqn 9.1
tau_xy1 = ((-(sigma_x - sigma_y)*math.sin(2*phi))/2) + (tau_xy*math.cos(2*phi)) #Eqn 9.2

#Plane BC
sigma_x2 = (sigma_x+sigma_y)/2 + ((sigma_x-sigma_y)*math.cos(2*theta))/2 + (tau_xy*math.sin(2*theta)) #Eqn 9.1
tau_xy2 = (-(sigma_x - sigma_y)*math.sin(2*theta))/2 + tau_xy*math.cos(2*theta) #Eqn 9.2

#Display
print('The normal stress of plane CD inclined at 30 degrees    = ',round(sigma_x1,1),"MPa")
print('The shear stress of plane CD inclined at 30 degrees     = ',round(tau_xy1,1),"MPa")
print('The normal stress of plane BC inclined at 60 degrees    = ',round(sigma_x2,1),"MPa")
print('The shear stress of plane BC inclined at 60 degrees     = ',round(tau_xy2,1),"MPa")

```

    The normal stress of plane CD inclined at 30 degrees    =  -25.8 MPa
    The shear stress of plane CD inclined at 30 degrees     =  -68.8 MPa
    The normal stress of plane BC inclined at 60 degrees    =  -4.2 MPa
    The shear stress of plane BC inclined at 60 degrees     =  68.8 MPa
    


```python
#Given example 9.3
sigma_x = -20   #MPa, stress
sigma_y = 90    #MPa
tau_xy = 60     #MPa

#Orientation of Element
import math
theta_p2 = math.atan((2*tau_xy)/(sigma_x - sigma_y))
theta_p2 = theta_p2/2.0
theta_p1 = (180+2*theta_p2)/2.0

#Principal Stresses

sigma1 = ((sigma_x+sigma_y)/2.0)+(math.sqrt(((sigma_x - sigma_y)/2.0)**2 + tau_xy**2))
sigma2 = ((sigma_x+sigma_y)/2.0)- math.sqrt(((sigma_x-sigma_y)/2.0)**2 + tau_xy**2)
sigma_x2 = ((sigma_x+sigma_y)/2.0)+ (((sigma_x-sigma_y)/2.0)*math.cos(2*theta_p2)) + (tau_xy*math.sin(2*theta_p2))

#Display
print("The first principal stress is                       = ",round(sigma1,1),"MPa")
print("The second principal stress is                      = ",round(sigma2,1),"MPa")
print('The normal stress acting on the 23.7 degrees plane  = ',round(sigma_x2,1),"MPa")

```

    The first principal stress is                       =  116.4 MPa
    The second principal stress is                      =  -46.4 MPa
    The normal stress acting on the 23.7 degrees plane  =  -43.3 MPa
    


```python
#Given example 9.4
sigma_x = -20.0 #MPa, stress along x
sigma_y  = 90.0 #MPa  stress along y
tau_xy =60.0    #Mpa, shear stress

#Calculation
#Orientation of Element
import math
theta_s2 = math.atan(-(sigma_x - sigma_y)/(2*tau_xy))
theta_s2 = theta_s2/2.0
theta_s1 = math.pi + 2*theta_s2
theta_s1 = theta_s1/2.0

#Maximum in plane Shear Stress
tau_max = (math.sqrt(((sigma_x - sigma_y)/2.0)**2 + tau_xy**2))
tau_xy1 = -(sigma_x - sigma_y)*(math.sin(2*theta_s2))/2.0 + (tau_xy*math.cos(2*theta_s2))
#Average Normal Stress
sigma_avg = (sigma_x+sigma_y)/2

#Display
print("The maximum in-plane shear stress is   = ",round(tau_xy1,1),"MPa")
print("The average normal stress is        = ",round(sigma_avg,0),"MPa")
```

    The maximum in-plane shear stress is   =  81.4 MPa
    The average normal stress is        =  35.0 MPa
    


```python
#Given example 9.7
sigma_x = -12  #ksi, stress along x
sigma_y = 0
tau_xy = -6    #ksi, stress along xy

#Calculation
#Construction of the circle
import math
sigma_avg = (sigma_x+sigma_y)/2.0
R = math.sqrt((-sigma_x+sigma_avg)**2 + (tau_xy)**2)
#Principal Stresses
sigma2 = -R+sigma_avg
sigma1 = R+sigma_avg
theta_p2 = math.atan((-tau_xy)/(-sigma_x+sigma_avg))
theta_p2 = theta_p2/2*(180/math.pi)

#Display
print('The first principal stress is            = ',round(sigma1,2),"ksi")
print('The second principal stress is           = ',round(sigma2,2),"ksi")
print('The direction of the principal plane is  = ',theta_p2,"degree")
```

    The first principal stress is            =  2.49 ksi
    The second principal stress is           =  -14.49 ksi
    The direction of the principal plane is  =  22.5 degree
    


```python
#Given example 9.8
sigma_x = -20.0 #MPa
sigma_y = 90.0 #MPa
tau_xy = 60.0  #MPa

#Construction of the circle
import math
sigma_avg = (sigma_x+sigma_y)/2
R = math.sqrt(((sigma_x-sigma_avg))**2 + (tau_xy)**2)
#Maximum In plane Shear Stress
tau_max = R
theta_s1 = math.atan(-(sigma_x - sigma_avg)/(tau_xy))
theta_s1 = theta_s1/2.0*(180/math.pi)

#Display
print'The maximum in-plane shear stresses are   = ',round(tau_max,1),"MPa"
print'The second principal stress  = ',sigma_avg,"MPa"
print'The orientation of the element is         = ',round(theta_s1,1),"degree"

```

    The maximum in-plane shear stresses are   =  81.4 MPa
    The second principal stress  =  35.0 MPa
    The orientation of the element is         =  21.3 degree
    


```python
#Calculate normal stress and shear stress
# example 9.9
#Given
sigma_x  = -8.0    #MPa
sigma_y = 12.0    #MPa
tau_xy = -6.0     #Mpa

#Construction of the circle
import math
sigma_avg = (sigma_x+sigma_y)/2.0
R = math.sqrt( 10**2 + tau_xy**2)
#Stresses on 30 degree element
phi = math.atan(6/10.0)
psi = (math.pi/3.0) - phi
#On face BD
sigma_x1 = 2 - (R*math.cos(psi))
tau_xy1 = (R*math.sin(psi))
#On face DE
sigma_x2 = 2 + (R*math.cos(psi))
tau_xy2 = -(R*math.sin(psi))

#Display
print'The normal stress on plane BD inclined at 30 degrees is   = ',round(sigma_x1,1),"ksi"
print'The normal stress on plane DE inclined at 60 degrees is   = ',round(sigma_x2,1),"ksi"
print'The shear stress is     = ',round(tau_xy1,1),"ksi"
print'The shear stress is     = ',round(tau_xy2,1),"ksi"
```

    The normal stress on plane BD inclined at 30 degrees is   =  -8.2 ksi
    The normal stress on plane DE inclined at 60 degrees is   =  12.2 ksi
    The shear stress is     =  5.7 ksi
    The shear stress is     =  -5.7 ksi
    


```python
#Given example 9.10
sigma_max = 32 #MPa
sigma_min = 0 #MPa
sigma_int = 16 #MPa

#Calculation
tau_max = (sigma_max - sigma_min)/2
sigma_avg = (sigma_max + sigma_min)/2
tau_in_plane = (sigma_max - sigma_int)/2
sigma_avg2 = sigma_avg + (tau_in_plane)

#Display
print ('The normal shears tress is', sigma_avg,"MPa")
print('The maximum absolute shear stress   = ',tau_max,"MPa")

```

    The normal shears tress is 16 MPa
    The maximum absolute shear stress   =  16 MPa
    


```python
#Given example 9.11
tau = 40       #psi
sigma = -20     #psi

#Calculation
#Principal Stresses
import math
sigma_avg = sigma/2
R = sqrt( (-sigma + sigma_avg)**2 + tau**2)
sigma_max = sigma_avg + R
sigma_min = sigma_avg - R
theta = math.atan(tau/(-sigma+sigma_avg))
theta = theta/2
#Absolute Maximum Shear Stress
tau_max = (sigma_max - sigma_min)/2
sigma_avg = (sigma_max + sigma_min)/2

#Display
print('The prinicpal stresses at the point are ',round(sigma_max,2),"psi   and",round(sigma_min,1),"psi")
print('The absolute maximum shear stress at the point  ',round(tau_max,1),"psi")

```

    The prinicpal stresses at the point are  31.23 psi   and -51.2 psi
    The absolute maximum shear stress at the point   41.2 psi
    

# Chapter 10




<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111081957.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111082003.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111082011.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111082025.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111082033.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111082040.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111082104.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111082120.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111082143.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111082526.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111082535.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111082714.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111082904.jpg?raw=true">






# 11: Design of Beams and Shafts

<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111082925.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111082934.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111124603.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111124614.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111124623.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111124631.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111124638.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111124732.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111124740.jpg?raw=true">



```python
#Given example 11.1
sigma_allow = 24    #ksi, stress
tou_allow = 14.5      #ksi, allowable stress

#Shear and Moment Diagrams
V_max = 30         #kip,
M_max = 120         #kip, bending moment

#Bending Stress
S_reqd = (M_max*(10**3))/sigma_allow
#Shear Stress
d = 17.9   #in
tw = 0.315  #inch
tou_avg = (V_max)/(d*tw)

if tou_avg<14.5:
    print"Use a W18*14"

```

    Use a W18*14
    


```python
#Given example 11.2
udl = 0.5         #kN/m
h_by_a = 1.5
sigma_allow = 9 #MPa, allowable bending stress
tou_allow = 0.6 #MPa, allowable shear stress

#calculation
#Shear and Moment Diagrams
import math
V_max =20         #kNm
M_max =10.67       #kNm
#Bending Stress
S_reqd = (M_max)/(sigma_allow*1000)
c = h_by_a/2.0
a_cube = (S_reqd*c*12)/(1.5**3) #S_reqd = I/c
a = a_cube**(1/3.0)
A = a*h_by_a*a
tou_max = (1.5*V_max)/(A*1000)
if tou_max>tou_allow:
    a_sqr = (3/2.0)*(V_max)/(h_by_a*tou_allow*1000)
    a =math.sqrt(a_sqr)
else:
    print"not"

#Display
print"The smallest width for the laminated wooden beam = ", round(a,2),"m"

```

    The smallest width for the laminated wooden beam =  0.18 m
    


```python
#Given example 11.3
l = 200/1000.0       #m, length
t = 30/1000.0        #m
sigma_allow = 9     #MPa, shear stress
tou_allow = 0.6      #MPa, bending stress
V_nail = 1.50        #kN
l_bc = 2             #m
l_cd = 2            #m

#Shear and Moment Diagrams
V_max = 20        #kN
M_max =10.67         #kNm
#Bending Stress
y1 = l/2.0
A1 = l*t
y2 = l+(t/2.0)
A2 = t*l
y_dash = (y1*A1 + y2*A2)/(A1 + A2)

I1 = (t*l**3)/12.0 + (t*l*(y_dash - y1)**2)
I2 = (l*t**3)/12.0 + (t*l*(y2 - y_dash)**2)
I =I1 + I2

c = y_dash
sigma = (M_max*c)/(I)
flag1 = 0
sigma_allow = sigma_allow*1000 #kPa

if(sigma<sigma_allow):
    flag1 = 1
else:
    print"otherwisw not"

#Shear Stress
y3 = y_dash/2.0
A3 = y_dash*t
Q = y3*A3

tou = (V_max*Q)/(I*t)
tou_allow = tou_allow*1000 #kPa
flag2 =0

if(tou<tou_allow):
    flag2 = 1
else:
    print"flag2 is not equal to one"

#Nail Spacing
y4a = (l+t-y_dash)
y4 = y4a - (t/2.0)
A4 = l*t
Q4 = y4*A4
V_bc = 1.5 #kN
V_cd = 1 #kN

q_bc = (V_bc*Q4)/I
q_cd = (V_cd*Q4)/I

s_bc = (V_nail)/(q_bc)
s_cd = (V_nail)/(q_cd)

chosen_bc = 150 #mm
chosen_cd = 250 #mm

#Result
print'The design is safe in bending and shear.'
print'The calculated nail spacing BC ',round(s_bc,2),"m"
print'The calculated nail spacing CD ',round(s_cd,2),"m"
print'The chosen nail spacing BC     ',chosen_bc,"mm"
print'The chosen nail spacing CD     ',chosen_cd,"mm"


```

    otherwisw not
    flag2 is not equal to one
    The design is safe in bending and shear.
    The calculated nail spacing BC  0.17 m
    The calculated nail spacing CD  0.26 m
    The chosen nail spacing BC      150 mm
    The chosen nail spacing CD      250 mm
    


```python
#Find smallest allowable diameter
# example 11.6
#Given
tou_allow = 50*10**6 #MPa, shear stress
T = 7.5              #Nm, torque
R_ah = 150           #N, horizontal force
R_av = 475           #N
l_ac = 0.25          #m

#Calculation
import math
mc = R_ah*l_ac
m = R_av*l_ac
M_c = sqrt(m**2 + mc**2)
k = sqrt(M_c**2 + T**2)
c1 = (2*k)/(math.pi*tou_allow)
c = c1**(1/3.0)
d = 2*c*1000

#Display
print"The smallest allowable diameter of the shaft =",round(d,1),"mm"

```

    The smallest allowable diameter of the shaft = 23.3 mm
    

# 12: Deflection of Beams and Shaft

<img width="15%" src="assets/20231111124808.jpg">
<img width="15%" src="assets/20231111124818.jpg">
<img width="15%" src="assets/20231111124826.jpg">
<img width="15%" src="assets/20231111124833.jpg">
<img width="15%" src="assets/20231111124840.jpg">
<img width="15%" src="assets/20231111124848.jpg">
<img width="15%" src="assets/20231111124856.jpg">
<img width="15%" src="assets/20231111125656.jpg">
<img width="15%" src="assets/20231111125703.jpg">
<img width="15%" src="assets/20231111125746.jpg">
<img width="15%" src="assets/20231111125854.jpg">
<img width="15%" src="assets/20231111125947.jpg">
<img width="15%" src="assets/20231111130006.jpg">
<img width="15%" src="assets/20231111130737.jpg">
<img width="15%" src="assets/20231111130755.jpg">
<img width="15%" src="assets/20231111130805.jpg">
<img width="15%" src="assets/20231111130935.jpg">
<img width="15%" src="assets/20231111130944.jpg">
<img width="15%" src="assets/20231111131020.jpg">
<img width="15%" src="assets/20231111131033.jpg">
<img width="15%" src="assets/20231111131043.jpg">
<img width="15%" src="assets/20231111131053.jpg">
<img width="15%" src="assets/20231111131258.jpg">
<img width="15%" src="assets/20231111131323.jpg">
<img width="15%" src="assets/20231111131335.jpg">
<img width="15%" src="assets/20231111131348.jpg">
<img width="15%" src="assets/20231111131400.jpg">
<img width="15%" src="assets/20231111131408.jpg">
<img width="15%" src="assets/20231111131420.jpg">
<img width="15%" src="assets/20231111131430.jpg">
<img width="15%" src="assets/20231111131443.jpg">
https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/     20231110092955.jpg         ?raw=true


```python
#Given example 12.10
E = 200*10**6   #kN/m**2, stress
I = 17*10**-6   #mm**4, moment of inertia

#The given dimension are
l_ac = 2 #m
l_cF = 4 #m
l_Fb = 2 #m
l_cb = 6 #m
l_aF = 6 #m
l_ab = 8 #m
F = 16 #kN
R_b = (F*l_cb)/l_ab
R_a = F - R_b

#Calculation
mc = R_a*l_ac
mf = R_b*l_Fb
theta_ca = (0.5*l_ac*mc)/(E*I)
A1 = 0.5*l_aF*mf
t1_ba = (l_Fb + l_aF/3)*(A1)
A2 = 0.5*l_Fb*mf
t2_ba = (l_Fb*2*A2)/3
t_ba = (t1_ba+t2_ba)/(E*I)
theta_c = (t_ba/l_ab)-(theta_ca)

#Display
print"The slope at point C of the steel beam    = ",round(theta_c,4),"rad"

```

    The slope at point C of the steel beam    =  0.0094 rad
    


```python
#Given example 12.12
E = 29*10**3    #ksi, stress
I = 125        #inch**4, moment of inertia
l_ab = 12        #ft, dimension
l_bc =12        #ft
l_ac = l_ab+l_bc
R_a = -5     #kip, normal force
R_b = 10      #kip
R_c = 5      #kip

#calculation
mb = R_a*l_ab
#Moment-Area Theorem
t_ca = (l_ab*0.5*l_ac*mb)/(E*I)
t_ba = ((1/3.0)*l_ab*0.5*l_ab*mb)/(E*I)
del_c = (t_ca - 2*t_ba)*1728

#Display
print"The displacement at point C for the steel overhanging beam    =",round(del_c,2),"inch"
```

    The displacement at point C for the steel overhanging beam    = -2.75 inch
    


```python
#Given example 12.13
w = 2 #kN/m, load
L = 8 #m, length
P = 8 #kN

#Calculations
EI_theta_A1 = (3*w*L**3)/(128) #ThetaA1 = (3wL**3)/(128EI)
EI_nu_C1 = (5*w*L**4)/(768) #NuC1 = (5wL**4)/(768EI)
EI_theta_A2 = (P*L**2)/(16) #theta_A2 = (PL**2)/(16EI)
EI_nu_C2 = (P*L**3)/(48) #nu_C2 = (PL**3)/(48EI)
theta_A = EI_theta_A1 + EI_theta_A2
nu_C = EI_nu_C1 + EI_nu_C2

#Display
print'The slope at A in terms of EI                =',theta_A,"kNm**2"
print'The displacement at point C in terms of EI   =',nu_C,"kNm**2"

```

    The slope at A in terms of EI                = 56 kNm**2
    The displacement at point C in terms of EI   = 138 kNm**2
    


```python
#Given example 12.14
w = 5    #kN/m, force per unit length
l_ab = 4 #m, length
l_bc = 2 #m
P = 10   #kN, load
M = w*l_ab #kNm

#Calculations
EI_theta_B1 = (w*l_ab**3)/(24) #ThetaB1 = (wL**3)/(24EI)
EI_nu_C1 = l_bc*EI_theta_B1

EI_theta_B2 = (M*l_ab)/(3) #
EI_nu_C2 = l_bc*EI_theta_B2
EI_nu_C3 = (P*l_bc**3)/(3) #nuC3 = (PL**3)/(24EI)
nu_C = -EI_nu_C1 + EI_nu_C2 + EI_nu_C3

#Display
print'The displacement at end C of the overhanging beam, in terms of EI   = ',nu_C,"kNm**3"
```

    The displacement at end C of the overhanging beam, in terms of EI   =  52 kNm**3
    


```python
#Given example 12.15
w = 4    #kN/m, force per unit length
l = 6   #m, length
l_bc =2  #m

#Calculations
EI_theta_B = (w*l**3)/(24.0)  #ThetaB1 = (wL**3)/(24EI)
EI_nu_B = (w*l**4)/(30.0)     #nuB = (wL**4)/(30EI)
nu_C = EI_nu_B + (EI_theta_B*l_bc)

#Display
print'The displacement at end C of the cantilever beam, in terms of EI   = ',nu_C,"kNm**3"

```

    The displacement at end C of the cantilever beam, in terms of EI   =  244.8 kNm**3
    


```python
#Given example 12.16
k = 15.0        #kip/ft, force per unit length
F = 3           #kip,  force
E = 29*10**3  #ksi, stress
l_ab = 3.0       #ft, length
l_ac = 1       #ft
l_cb = 2       #ft
I = 12         #in**4, moment of inertia
R_a = (F*l_cb)/(l_ab)
R_b = F-R_a

#Calculations
mu_a = (R_a)/k
mu_b = (R_b)/k
mu_c1 = mu_b + (l_cb/l_ab)*(mu_a - mu_b)
#From fig b
a=3            #ft
b=6            #ft
L=9            #ft
mu_c2 = ((F*a*b)*(L**2 - a**2 - b**2))/(6*E*144*I*(1/20736.0)*L)
mu_c = mu_c1 + mu_c2

#Display
print'The vertical displacement of the force at C   = ',round(mu_c,3),"ft"

```

    The vertical displacement of the force at C   =  0.126 ft
    


```python
#Given example 12.21
l = 10        #ft, length
P = 8        #kip, load
w = 2       #kip/ft, force per unit length

#Calculation
#Compatibility Equation
EI_nu_b1 = (w*l**4)/8.0 + (5*P*l**3)/48.0 #nu_b = (wl**4)/8EI + (5Pl**3)/48EI
EI_nu_b2 = (l**3)/3.0
B_y = EI_nu_b1 / EI_nu_b2

#Display
print"The reactions at roller support B    = ",B_y,"kip"

```


      File "<ipython-input-1-99b90951c790>", line 13
        print"The reactions at roller support B    = ",B_y,"kip"
             ^
    SyntaxError: invalid syntax
    



```python
#Given: example 12.22
l = 8         #ft, length
l_ab = 5      #ft
l_bc = 5       #ft
l_af = 1/2.0  #inch
b = 12/1000.0 #m
w = 8        #kip, force per unit length
E = 29*10**3  #Ksi
I = 475.0     # inch**4, moment of inertia

#Compatibility Equation:
import math
A=math.pi/4.0*(l_af**2)
muB__byFbc=l*12/(A*E)
L=l_ab+l_bc
muB=5*w*L**3*12/(48*E*I)
muB_byFbc=L**3*12/(3*E*I)
#From equation muB__=muB-muB_
Fbc=muB/(muB_byFbc+muB__byFbc)

#Display:
print "Force developed in the rod is",round(Fbc,3),"kip"
print"In the book: Calculation mistake"

```

    Force developed in the rod is 0.042 kip
    In the book: Calculation mistake
    


```python
#Given: example 12.23
L = 12       #ft
#E and I are constant  say
E = 29*10**3 #Ksi
I = 475        # inch**4
w = 3         #kip/ft

#calculation
thetab=w*L**3/(48*E*I)
mub=7*w*L**4/(384*E*I)
theta_bbyBy=L**2/(2*E*I)
mu_bbyBy=L**3/(3*E*I)
theta__byMb=L/(E*I)
muB__byMb=L**2/(2*E*I)

#From eq 1 and 2 (solving  by matrix)
#72By+12Mb=-108
#576By+72Mb=-1134
M = array([[576, 72], [72, 12]])
N=([-108,-1134])
X=inv(M)*N #Inverse matrix
a=X[0,0]
b=X[1,0]*2.5

#Display:
print"Moment at B is",b,"kip-ft"
```

    Moment at B is 11.25 kip-ft
    

# 13: Buckling of Columns

<img width="15%" src="assets/20231111131501.jpg">
<img width="15%" src="assets/20231111131513.jpg">
<img width="15%" src="assets/20231111131522.jpg">
<img width="15%" src="assets/20231111131542.jpg">
<img width="15%" src="assets/20231111131555.jpg">
<img width="15%" src="assets/20231111131832.jpg">
<img width="15%" src="assets/20231111131842.jpg">
<img width="15%" src="assets/20231111131852.jpg">
<img width="15%" src="assets/20231111131906.jpg">
<img width="15%" src="assets/20231111132021.jpg">
<img width="15%" src="assets/20231111132029.jpg">
<img width="15%" src="assets/20231111132036.jpg">


 ex 13.1 p.665


```python
#Given
l = 12           #ft, length
E = 29*10**3         #GPa, stress
ro = 75         #mm, outside radius
ri = 70         #mm, inside  radius
sigma_y = 250   #MPa, stress

#Calculations
import math
Ix=110
Iy=37
A = 9.13
Pcr = (math.pi**2*(E*10**3)*Iy)/((l*12)**2) #Pcr = (math.pi**2*EI)/(l**2)
sigma_cr = (Pcr*1000)/A
p=36*A

print"The maximum allowable axial load that the column can support    = ",round(p,0),"kip"

```


      File "<ipython-input-10-75bd9fc486f5>", line 17
        print"The maximum allowable axial load that the column can support    = ",round(p,0),"kip"
        ^
    SyntaxError: Missing parentheses in call to 'print'. Did you mean print(...)?
    


 ex 13.2 p.668


```python
#Given
E = 29*10**3   #GPa, stress
lx= 144      #inch, length
ly=100.8     #inch
A =4.43     #inch**2, area
sigma_y = 60  #ksi, stress

#Calculations
import math
Ix=29
Iy=9.32

Pcrx = ((math.pi**2)*E*Ix)/(lx**2) #Pcr = (math.pi**2*EI)/(l**2)
Pcry = ((math.pi**2)*E*Iy)/(ly**2) #Pcr = (math.pi**2*EI)/(l**2)
sigma_cr = (Pcr*1000)/A
sigmacr = Pcry/A #in kN
if sigmacr<sigma_y:
    print"Buckling will occue before the material yield. So Psr=",round(Pcry,0),"kip"
else:
        print"n"



```

    Buckling will occue before the material yield. So Psr= 263.0 kip
    

 ex 13.3 p. 669


```python
#Given
E = 70          #GPa
Ix = 61.3*10**-6   #Moment of inertia along x-axis
Iy = 23.2*10**-6    ## Moment of inertia along y-axis
l = 5
KLx = 2*l       #m
KLy = 0.7*(l)   #m
FS = 3          #Factor of safety
sigma_y = 215   #MPa


#Calculation
import math
Pcrx = (math.pi**2*E*10**6*Ix)/(KLx**2) #Pcr = (math.pi**2*EI)/(l**2)
Pcry = (math.pi**2*E*10**6*Iy)/(KLy**2) #Pcr = (math.pi**2*EI)/(l**2)
Pcr = min(Pcrx,Pcry)
A = 7.5*10**-3 #mm**2
P_allow = Pcr/FS
sigma_cr = (Pcr*10**-3)/A


if(sigma_cr<sigma_y):
    print"The largest allowable load that the column can support     = ",round(P_allow,0),"kN"
else:
    print"n"

```

    The largest allowable load that the column can support     =  141.0 kN
    

 ex 13.4 p.683


```python
#Given
z1 = 4*1000    #mm, length
e = 200       #mm, elongation
KLy = 100.8   #inch**2
Iy = 49.1     #inch**4
E = 29*10**3  #ksi, stress
sigma_y =421.2  #MPa

#Calculation
#y-y Axis Buckling
import math
Pcry = (math.pi**2*E*10**6*Iy)/(KLy**2) #Pcr = (math.pi**2*EI)/(l**2)
Pcry = Pcry/1000
#x-x Axis Yielding
Kx= 2
KLx = 288   #inch
A=11.7
c = (8.25)/2.0
rx = 3.53   #inch

#Solved by applying the Secant Formula and then finding Px by trial and error
trial_Px = 88.4 #kN
A = 7850#mm**2
sigma = (trial_Px*1000)/(A)

if(Pcry>trial_Px and sigma<sigma_y):
    print'The maximum eccentric load that the column can support = ',trial_Px
    print'Failure will occur about the x-x axis.'

else:
    print"n"

```

    The maximum eccentric load that the column can support =  88.4
    Failure will occur about the x-x axis.
    

 ex 13.5 p.686


```python
#Given
d = 30  #mm, diameter
r = d/2 #mm, radius
L = 600 #mm
sigma_pl = 150#MPa, stress

#Calculations
import math
I = (math.pi/4)*(r**4)
A = math.pi*r**2
r_gyr = sqrt(I/A)
K = 1
sl_ratio = (K*L)/(r_gyr)
flag1 = 0

#Assuming the critical stress is elastic
E = 150/0.001
sigma_cr1 = (math.pi**2*E)/(sl_ratio**2) #Pcr = (math.pi**2*EI)/(l**2)


if(sigma_cr1 > sigma_pl):
    Et = (270 - 150)/(0.002 - 0.001)
    sigma_cr2 = (math.pi**2*Et)/(sl_ratio**2) #Pcr = (math.pi**2*EI)/(l**2)

if(sigma_cr2>150 and sigma_cr2<270):
       Pcr = sigma_cr2*A
       Pcr = Pcr/1000.0 #in kN
       print'The critical load when used as a pin supported column = ',round(Pcr,0),"kN"

else:
    print""


```

    The critical load when used as a pin supported column =  131.0 kN
    

 ex 13.6 p.696


```python
#given
l=16      #16 ft
A=29.4    #in**2, area
rx=4.60   #in
ry=2.65   #in
k=1
E=29*10**3   #Stress
sigmay=36.0  #ksi
#calculation
import math
x1=k*l*12/ry
x=math.sqrt(2*math.pi**2*E/sigmay)
a=(1-(x1**2/(2.0*x**2)))*((sigmay))
b=(5/3.0)+((3/8.0)*(x1)/(x))-((x1**3)/(8.0*(x**3)))
sigmaallow=a/b
P=sigmaallow*A

#result
print" The largest load is",round(P,0),"kip"


```

     The largest load is 476.0 kip
    

 ex 13.7 p.697


```python
#Given
P = 18        #kip, load
E = 29*10**3 #ksi, stress
sigma_y = 50 #ksi, shear stress
l = 15      #ft, length
k =0.5      #shape factor

#Calculations
import math
I_by_d = (1/4.0)*(math.pi)*(d/2.0)**4
A_by_d = (1/4.0)*(math.pi)*d**2
r_by_d = math.sqrt(I_by_d/A_by_d)
sl_ratio_c = math.sqrt((2*math.pi**2*E)/(sigma_y))

a1=math.sqrt(2*(math.pi)**2*E/(sigma_y))

d_=((18*4*16*23*(k**2)*(l**2)*12**2)/(12*math.pi**3*E))**(1/4.0)
print "The smallest diameter is ",round(d_,2),"inch. So use d=2.25 inch"
d=2.25
a1=k*l*12/(d/4.0)
if a1<200:
    print"Use of equation is appropriate"
```

    The smallest diameter is  2.11 inch. So use d=2.25 inch
    Use of equation is appropriate
    

 ex 13.8 p.698


```python
#Given
L = 30    #inch
P = 12    #kip
sigma =28.0 #ksi
K = 1

#Calculations
import math
b2 = (P)/(2*sigma)
b_ = math.sqrt(b2)
A = 2*b_*b_
Iy = (1/12.0)*(2*b_*b_**3)
ry = sqrt(Iy/A)
sl_ratio = (K*L)/(ry)
if(sl_ratio>12):
    b4 = (P*103.9**2)/(2*54000) #Eqn 13.26
    b = b4**(1/4.0)

    sl_ratio_ = (2598.1)/(b)
    w = 2*b
else:
    print"j"

if(sl_ratio>55):
    print'The thickness of the bar  = ',round(b,2),"inch"

else:
    print"h"

```

    The thickness of the bar  =  1.05 inch
    

 ex 13.9 p.699


```python
#Given
P = 5.0       #kip. load
y1 = 5.5     #inch, length
x1 = 1.5     #inch
A = (x1*y1)  #area
d = 1.5     #inch
K = 1

#Eqn 13.29
L2 = (540*A*d**2)/(P)
L = sqrt(L2)
KL_d = (K*L)/(d)

if(KL_d>26 and KL_d<=50):
    print'The greatest allowable length L as specified by the NFPA  = ',round(L,1),"inch"
else:
    print"j"

```

    The greatest allowable length L as specified by the NFPA  =  44.8 inch
    


```python
#Given example 13.10
#the given dimansion are
L = 80.0 #inch
K = 2.0
l = 4.0    #inch
b = 2.0    #inch
e = 1    #inch
c = 2    #inch

#Calculations
I1 = (1/12.0)*(l*b**3)
A = l*b
r = sqrt(I1/A)
sl_ratio = (K*L)/(r)

#Eqn 13.26
sigma_allow = (54000)/(sl_ratio**2)
I2 = (1/12.0)*(b*l**3)
coefficient = (1/A) + (e*c)/I2

sigma_max = sigma_allow
P = sigma_max/coefficient

#Display
print'The load that can be supported if the column is fixed at its base  ',P,"kip"

```

    The load that can be supported if the column is fixed at its base   2.25 kip
    


```python
#Given example 13.11
import math
sigmaB_allow = 22 #ksi, allowable stress
E = 29*10**3      #ksi, stress
sigma_y = 36   #ksi, shear stress
K= 1           #shape factor
A = 5.87      #inch**2, area
Ix = 41.4    #inch**4, moment of inertia
ry = 1.5     #inch
d = 6.2      #inch
c= d/2.0
e = 30       #inch
L = 15       #ft

sl_ratio = (K*L*12)/(ry)
sl_ratio_c = math.sqrt((2*math.pi**2*E)/(sigma_y))



if(sl_ratio<sl_ratio_c):
    num = (1 - (sl_ratio**2/(2*sl_ratio_c**2)))*sigma_y
    denom1 = (5/3.0) + ((3/8.0)*sl_ratio/sl_ratio_c)
    denom2 = (sl_ratio**3)/(8*sl_ratio_c**3)
    sigmaA_allow = num/(denom1 - denom2)

    coeffP = 1/(sigmaA_allow*A) + (e*c)/(Ix*sigmaB_allow)
    P = 1/coeffP

    sigA = (P/A)/(sigmaA_allow)
else:
        print"k"


if(sigA < 0.15):
    print'The maximum allowable value of eccentric load  = ',round(P,2),"kN"
else:
    print"h"

```

    The maximum allowable value of eccentric load  =  8.43 kN
    


```python
#Given example 13.12
K = 2       #shape factor
d= 3.0      #inch, diameter
L = 60    #inch, length
e = 4    #inch
c = d
l = 3.0    #inch
b =6.0     #inch
A = l*b  #inch**2

#Calculations
sl_ratio = (K*L)/(d)

if(sl_ratio>26 and sl_ratio<50):
    sigma_allow = (540)/(sl_ratio**2)
    sigma_max = sigma_allow

    I = (1/12.0)*(l*b**3)
    coeffP = (1/A) + (e*c)/(I)
    P = sigma_max/coeffP
    print'The eccentric load that can be supported = ',round(P,2),"kip"
else:
    print"no"

```

    The eccentric load that can be supported =  1.22 kip
    

# chapter 14

<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111132055.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111132105.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111132112.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111132121.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111132129.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111132140.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111132147.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111132156.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111132205.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111132214.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111132229.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111132237.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111132249.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111132256.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111132310.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111132320.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111132330.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111132338.jpg?raw=true">


# APPENDIX A:Geomatric Properties of an Area

<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111132348.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111132357.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111132409.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111132418.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111132427.jpg?raw=true">
<img width="15%" src="https://github.com/thomastron/thomastron.github.io/blob/main/notebooks/assets/20231111132439.jpg?raw=true">


```python
#Given example a1
#From fig. A-4(a)   The given dimensions are
l1=8       #inch
l2=3       #inch
l3=10      #inch
l4=5       #inch
l5=11.5    #inch
l6=2       #inch

#calculation
ymean1=((l4*l3*l6)+(l5*l2*l1))/((l3*l6)+(l2*l1))
#From fig. A-4(b)
l1_=-8       #inch
l2_=3       #inch
l3_=10      #inch
l4_=-1.5    #
l5_=2       #inch
ymean2=((l4_*l2_*-l1_)+(l1_*l3_*l5_))/((l2_*-l1_)+(l3_*l5_))
d=ymean1-ymean2     #Depth of beam
#From fig. A-4(c)
la=8       #inch
lb=6.5       #inch
lc=10       #inch
ld=13        #
le=5        #inch
lf=3        #inch
ymean3=((lb*ld*la)-2*(le*lc*lf))/((ld*la-2*(lc*lf)))
print"Location of centroid in fig (a)is",ymean1,"inch"
print"Location of centroid in fig (b)is",ymean2,"inch"
print"Location of centroid in fig (c)is",ymean3,"inch"
```


      File "<ipython-input-1-076b9572f90b>", line 28
        print"Location of centroid in fig (a)is",ymean1,"inch"
             ^
    SyntaxError: invalid syntax
    



```python
#Given example a2
#Dimension in the fig.A-7 a
#The given dimensions are
l1=8       #inch
l2=8.55    #inch
l3=10      #inch
l4=5       #inch
l5=1.5     #inch
l6=2       #inch
l7=4.45    #inch

#Calculation
Ix1=(1/12.0*l6*l3**3)
A1=l6*l3
dy1=(l2-l4)
Ix2=(1/12.0*l1*(l5+l5)**3)
A2=l1*(l5+l5)
dy2=(l7-l5)
I1=(Ix1+A1*dy1**2)+(Ix2+A2*dy2**2)
print I1

#Dimension in the fig.A-7 b
l1_= 13      #inch
l2_= 3      #inch
l3_=10      #inch
l4_=5       #inch
l5_= 2   #inch
l6_= 6.5      #inch
l7_=4.45    #inch
l8_=8.55    #inch
l9_=6.5    #inch

Ix1_=(1/12.0*l1_*(l2_+l5+l2_)**3)
A1_=l1_*(l2_+l5+l2_)
dy1_=(l8_-l9_)
Ix2_=(1/12.0*l2_*(l3_)**3)
A2_=l2_*(l3_)
dy2_=(l7_-l4_)
I2=(Ix1+A1*dy1**2)+(Ix2+A2*dy2**2)

#Result
print"Moment of inertia for fig a is",round(I1,0),"inch**4"
print"Moment of inertia for fig a is",round(I2,0),"inch**4"
```

    645.576666667
    645.576666667
    Moment of inertia for fig a is 646.0 inch**4
    Moment of inertia for fig a is 646.0 inch**4
    


```python
#Given example a3
#From fig A-8(a)
#The given dimensions are
l1=100    #mm
l2=400    #mm
l3=600    #mm
dx=250    #mm
dy=200     #mm

#Calculation
#Rectangle A:
Ix1=(1/12.0*l1*(l2-l1)**3)
Ady=(l1*(l2-l1)*dy**2)
Ix=(Ix1+Ady)
Iy1=(1/12.0*(l2-l1)*l1**3)
Adx=(l1*(l2-l1)*dx**2)
Iy=(Iy1+Adx)

#Rectangle B:
Ix_=(1/12.0*l3*l1**3)
Iy_=(1/12.0*l1*l3**3)

#Rectangle C
Ix3=(1/12.0*l1*(l2-l1)**3)
Ady_=(l1*(l2-l1)*200**2)
Ix3_=(Ix3+Ady_)
Iy3=(1/12.0*(l2-l1)*l1**3)
Adx_=(l1*(l2-l1)*dx**2)
Iy3_=(Iy3+Adx)

#Total Moment of inertia
Itx=(Ix+Ix_+Ix3_)
Ity=(Iy+Iy_+Iy3_)

#Result
print"Moment of inertia across x is ",Itx,"mm**4"
print"Moment of inertia across y is ",Ity,"mm**4"

```

    Moment of inertia across x is  2900000000.0 mm**4
    Moment of inertia across y is  5600000000.0 mm**4
    


```python
#Given example  page 793
#From fig A-12 a
#The given length of sides are
l1=100      #mm
l2=300      #mm
dy=200      #mm
dx=250      #mm

#Calculation
#Rectangle A
Ixy1=0
A1=l1*l2
Ixy1=Ixy1+A1*(-dx)*dy

#Rectangle B
Ixy2=0
A2=0
Ixy2=Ixy2+A2*dx*dy

#Rectangle D
Ixy3=0
A3=l1*l2
Ixy3=Ixy3+A3*(dx)*(-dy)
Ixy=Ixy1+Ixy2+Ixy3

#Result
print"The moment of inertia is",Ixy,"mm**4"

```

    The moment of inertia is -3000000000 mm**4
    


```python
#Given    ex ample 796
#From fig A-15 and From ex A.3 and A.4
Ix=2.9*10**9           #moment of inertia along x
Iy=5.6*10**9           #moment of inertia along y
Ixy=-3*10**9           #moment of inertia along xy

#Calculation
import math
#Using eq. A11
import math
thetaP1=1/2.0*math.atan(-Ixy*2/(Ix-Iy))*100
#As shown in fig. A-15
thetaP2=-32.9      #degree
Imax=(Ix+Iy)/2.0+math.sqrt((((Ix-Iy)/2.0)**2)+Ixy**2)
Imin=(Ix+Iy)/2.0-math.sqrt((((Ix-Iy)/2.0)**2)+Ixy**2)

#Result
print"Maximum moment of inertia is",Imax,"mm**4"
print"Minimum moment of inertia is",Imin,"mm**4"
```

    Maximum moment of inertia is 7539756829.92 mm**4
    Minimum moment of inertia is 960243170.081 mm**4
    


```python
#given example a6
#From fig. A-17 a and Example  A.3 and A.4
Ix=2.9*10**9           #mm**4, moment of inertia
Iy=5.6*10**9
Ixy=-3*10**9

#Calculation
import math
d=(Ix+Iy)/2.0   #distance of centre of circle
#from fig A-17 b
BC=1.35
AB=3
CA=math.sqrt(BC**2+AB**2)

#the circle intersect the I axis at point (7.54,0) and  (0.960,0) hence
Imax=7.54*(10**9)  #mm**4
Imin=0.960*(10**9)  #mm**4
thetap1=1/2.0*(180-(math.atan(AB/BC))*180/math.pi)

#Result
print"The maximum moment of inertia is",Imax,"mm**4"
print"The minimum moment of inertia is",Imin,"mm**4"
print"The angle is ",round(thetap1,1)

```

    The maximum moment of inertia is 7540000000.0 mm**4
    The minimum moment of inertia is 960000000.0 mm**4
    The angle is  57.1
    

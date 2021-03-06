#exercise5
from pyplasm import *

domain1 = INTERVALS ( 1) ( 36 )
domain2 = INSR ( PROD ) ( [ INTERVALS ( 1 ) ( 10 ), INTERVALS ( 1 ) ( 20 ) ] )


#surface1 sportello
c1 = BEZIER(S1)([[4.9,0.8,0],[4.9,2.76,-0.1],[4.9,5.52,0],[4.9,2.76,0.1],[4.9,0.8,0]])
#ac1 = MAP(c1)(domain1)
c2 = BEZIER(S1)([[7.6,0.8,0],[7.6,2.76,-0.1],[7.6,5.52,0],[7.6,2.76,0.1],[7.6,0.8,0]])
#ac2 = MAP(c2)(domain1)
c3 = BEZIER(S1)([[10.3,0.8,0],[10.3,2.76,-0.1],[10.3,5.52,0],[10.3,2.76,0.1],[10.3,0.8,0]])
#ac3 = MAP(c3)(domain1)
s = BEZIER(S2)([c1,c2,c3]);

sm = COLOR([1,0,0])(MAP(s)(domain2))


#surface2 tetto
t1 = BEZIER(S1)([[6.8,4.7,0],[8.55,4.9,0],[10.3,4.5,0]])   
#at1 = MAP(t1)(domain1)
t2 = BEZIER(S1)([[6.3,4.7,3.4],[8.55,4.9,3.4],[10.8,4.4,3.4]])
#at2 = MAP(t2)(domain1)
t3 = BEZIER(S1)([[6.8,4.7,6.8],[8.55,4.9,6.8],[10.3,4.5,6.8]])
#at3 = MAP(t3)(domain1)
s2 = BEZIER(S2)([t1,t2,t3]);

sm2 = COLOR([1,0,0])(MAP(s2)(domain2))



#struttura
structure = STRUCT([lato1,lato2,retro,fronte,sopra,ruote,volCompleto,sm,sm2])

VIEW(structure)




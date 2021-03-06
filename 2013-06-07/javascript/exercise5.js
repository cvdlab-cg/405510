/**
 * @author goggio
 */
//exercise5
//******DA ESEGUIRE DOPO AVER ESEGUITO I PRECEDENTI********

//funzioni ausiliarie
var domain = PROD1x1([INTERVALS(1)(25),INTERVALS(1)(25)]);
var normalize = function(rgb){
    return [rgb[0]/255,rgb[1]/255,rgb[2]/255];
    }
    
function zeta(x,y){
	var filterResult = punti.filter(function(item, index, array){

 		return ((item[0]===x)&&(item[1]===y));
		});
	return filterResult[0][2];
	}; 
	
	function mediaz(x,y){
	var z1 = zeta(x,y);
	var z2 = zeta(x-1,y-1);
	var z3 = zeta(x+1,y+1);
	var z4 = zeta(x+1,y-1);
	var z5 = zeta(x-1,y+1);
	var z6 = zeta(x,y+1);
	var z7 = zeta(x,y-1);
	var z8 = zeta(x-1,y);
	var z9 = zeta(x+1,y);
	var z10 = zeta(x+2,y);
	var z11 = zeta(x-2,y);
	var z12 = zeta(x,y+2);
	var z13 = zeta(x,y-2);
	var media = (z1+z2+z3+z4+z5+z6+z7+z8+z9+z10+z11+z12+z13)/13;
	return media+0.5;
}	 	


	
	
//strade
var hroads = T([1,2])([-0.5,-5])(SIMPLEX_GRID([[0.3,-0.2,0.3,-0.2,0.3],[0.3,-0.4,0.3],[5]]));
var vroads = T([1,2])([-0.5,-5])(SIMPLEX_GRID([[1.3],[-0.3,0.4,-0.3],[5]]));
var roads = STRUCT([hroads,vroads]);

//villaggi con le strade non traslati
var vilroad1NT = STRUCT([villaggio1NT,roads]);
var vilroad2NT = STRUCT([villaggio2NT,roads]);

//villaggi con le strade traslati
var vilroad1 = T([0,1,2])([5,5,mediaz(5,5)])(vilroad1NT);
var vilroad2 = T([0,1,2])([5,17,mediaz(5,17)])(vilroad2NT);

var vilroad12 = STRUCT([vilroad1,vilroad2]);

//struttura
var model = STRUCT([terreno,lago,foresta,vilroad12]);

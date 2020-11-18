const x=9;
const r=9;
let resultado;

resultado=fact((x+r-1))/(fact(r)*fact((x-1)));

console.log("formula de combinacion con repeticion (x+r-1)!/r!(x-1)!: "+resultado);

function fact (x) { 
	
	if (x == 0 || x==1){ 
		
		return 1; 
	
	}
	
	return x * fact (x-1); 

}
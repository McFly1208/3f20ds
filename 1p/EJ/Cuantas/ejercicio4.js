const x=8;
const r=8;
let result;

result=fact((x+r-1))/(fact(r)*fact((x-1)));

console.log("Formula de combinaciones que tiene repeticion (x+r-1)!/r!(x-1)!: "  +  result);

function fact (x) { 
	
	if (x == 0 || x==1){ 
		
		return 1; 
	}
	
	return x * fact (x-1); 
}
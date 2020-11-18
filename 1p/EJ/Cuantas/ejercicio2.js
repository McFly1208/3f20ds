let result;
const c=3;
const r=3;

result=Fact((c+r-1))/(Fact(r)*Fact((c-1)));

console.log("Formula de combinaciones con repeticion (c+r-1)!/r!(c-1)!: "+result);

function Fact (c) { 
	
	if (c == 0 || c==1){ 
		return 1; 
	}
	
	return c * Fact (c-1); 
}
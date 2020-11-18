let n = 5;

console.log(calcularFact(n));

function calcularFact(factorial){
    if(factorial === 0){
        return 1;
    }
    factorial = factorial*calcularFact(factorial-1);
    return factorial;
}
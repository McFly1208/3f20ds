// Generar e imprimir arrays de n=10 números según corresponda
// usar iteraciones de k={1,n}
// no leer datos, ie usar constantes x=3
// Array de números de la sucesión Fibonacci

let n0 = 0, n1 = 1
var Result = []
Result[0] = n0
Result[1] = n1

for(let k = 2; k <= 9; k++){
    Result[k] = n0 + n1;
    n0 = n1;
    n1 = Result[k];
}
    console.log(Result)
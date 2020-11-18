// Generar e imprimir arrays de n=10 números según corresponda
// usar iteraciones de k={1,n}
// no leer datos, ie usar constantes x=3
// Array de números impares

const b = 10;
var c = 1;
var array = [];
for(var i=0; i<b; i++){
array[i] = c;
c = c + 2;
}
console.log(array);

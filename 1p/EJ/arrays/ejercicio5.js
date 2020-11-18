// Generar e imprimir arrays de n=10 números según corresponda
// usar iteraciones de k={1,n}
// no leer datos, ie usar constantes x=3
// Array de números triangulares

let n = 10, antes;
let nuev = [];

for(let j = 1; j <= n; j++){
    triangular(j);
}
console.log(nuev);

function triangular(cont){
    for(let i = cont; i <= n; i++){
        if(i === 1){
            antes = '1';
            nuev[i-1] = '1';
            return '1';
        }  
            nuev[i-1] = antes.concat(i);
            antes = nuev[i-1];
            return;
    }
}

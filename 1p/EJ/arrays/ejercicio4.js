// Generar e imprimir arrays de n=10 números según corresponda
// usar iteraciones de k={1,n}
// no leer datos, ie usar constantes x=3
// Array de números primos

var i = 1;
var primo = 2;
var SiPrimo = 1;
const n = 10;
var final = [];
while (i <= n){
    let mitad = Math.round(primo / 2);
    while (mitad >= 2 && SiPrimo == 1 ){
        if (primo % mitad == 0){
            SiPrimo = 0;    
        }
        
        mitad--;    
    }
    if(SiPrimo == 1){
        final[i] = primo;
        i++;
    } 
    primo += 1;
    SiPrimo = 1;
}

    console.log("El array tiene ["+array.length+"] elementos, los cuales son: "+array); 
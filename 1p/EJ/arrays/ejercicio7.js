// Generar e nmprimir arrays de n=10 números según corresponda
// usar iteraciones de k={1,n}
// no leer datos, ie usar constantes x=3
// Array de números aleatorios

function print(){

    let random = [];
  
    for (let n = 0; n < 10; n++) {
        
        random[n] = Math.random()*10;
        random[n] = random[n].toFixed(2);
        console.log(random[n]);    
    }
  }
  
  print();
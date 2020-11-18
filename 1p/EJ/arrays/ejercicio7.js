
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
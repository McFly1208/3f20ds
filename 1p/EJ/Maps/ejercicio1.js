function print(){
    
    let names = ['Gael','Artorias','Jaime','Gwyn','Arthuro','Galahad','Carlos','Perceval','Tank','Cayde'];
    let randomNames = new Map();
    let n = 1;
        for(let i = 9; i > -1  ; i--){
            let j = Math.floor(Math.random() * i)
            let t = names[i]
            names[i] = names[j]
            names[j] = t
            randomNames.set(n,names[i]);
            n++;
          }       
            console.log(randomNames);
  }
  print();
function print(){
    
    let nombre = ['Gael','Artorias','Jaime','Gwyn','Arthuro','Galahad','Carlos','Perceval','Tank','Cayde'];
    let randomNombre = new Set();

        for(let i = 9; i > -1  ; i--){
            let j = Math.floor(Math.random() * i)
            let t = nombre[i]
            nombre[i] = nombre[j]
            nombre[j] = t
            randomNombre.add(nombre[i]);
          }       
            console.log(randomNombre);
  }
  print();
function print(){

    let x = 0;
    let y = 1;
    let z = 0;
    let w = 0;
  
    do {
      
      console.log(z);
      z = x+y;
      x = y;
      y = z;
      w = w+1;
   
  
    } while (w<10); 
    
  }
  
  print();
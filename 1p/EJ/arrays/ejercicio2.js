
// Array de números impares con diferente signo

let v1=1;
let array = []; 
let cont = 0;                                
for(let s=0;;s++){                     
    if(s%2==1){                       
        if(v1%2==1){                  
            array[cont] = (s*-1);
            cont++;
        }
        else if (v1%2==0){           
            array[cont] = (s);
            cont++;
        }
    v1++;                         
    }
    if(v1>10){
        break;                
    }
}
console.log(array);
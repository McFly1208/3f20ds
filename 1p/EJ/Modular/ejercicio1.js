function print(){

    let s = ['lunes','martes','miercoles','jueves','viernes','sabado','domingo']; 
    let g = 0;
    let n = 13; 
    let week = 7;
    let start = s[0]; 


    g = n/week;

    if (g == 1){

        console.log(start)

    }else if (g > 1 ) {

        let x = n%week;
        x = Math.round(x);
       console.log("En " +n+ " dias será: " + s[x]);
     
    }
}



print();
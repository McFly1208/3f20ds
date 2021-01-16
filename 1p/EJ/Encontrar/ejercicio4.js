let s = [3, 1, 4, 2, 3], bandera = false;

console.log('Existen repetidos: ', ExistRepe);

function ExistRepe(){
    for(i = 0; i < s.length; i++){
        for(j = i; j < s.length; j++){
          if(s[i] === s[j+1]){
              bandera = true;
          }
        }
    }
    return bandera;
}
//complejidad = n^2
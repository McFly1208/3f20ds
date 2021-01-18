let string = 'Hellothere';

console.log(palindromo(string));

function palindromo(palabra){
    debugger;
    let pString = [], rString;
    for(let i = 0; i < palabra.length; i++){
        pString.push(palabra[palabra.length-i-1]);
    }
    rString = pString.join('');
    if(rString === palabra){
        return true;
    } else{
        return false
    }
}

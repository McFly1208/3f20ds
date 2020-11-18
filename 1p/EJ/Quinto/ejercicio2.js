let result = 0;
console.log(lucas(5));

function lucas(n){
    let result, n1 = 2, n2 = 1;
    if(n === 1){
        return n1;
    }
    if(n === 2){
        return n2;
    }
    else{
        for(let k = 1; k <= n-2; k++){
            result = n1 + n2;
            n1 = n2;
            n2 = result;
        }
        return result;
    }
}
let factorial = 1, i = prompt()

calcularFactorial()

function calcularFactorial(){
    for(k = 1; k <= i; k++){
        factorial = k * factorial
        console.log(factorial)
    }
}
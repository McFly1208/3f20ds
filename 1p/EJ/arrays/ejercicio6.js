
// Array de elementos de la sucesión de Lucas

let result = [], n0 = 2, n1 = 1
result[0] = n0
result[1] = n1

for(k = 2; k <= 9; k++){
    result[k] = n0 + n1;
    n0 = n1;
    n1 = result[k];
}
console.log(result)
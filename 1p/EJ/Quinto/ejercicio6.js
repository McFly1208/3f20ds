let L0 = 2;
let L1 = 1;
let Ln = 1;
let array = [];
for(var i = 0; i<10; i++){
    array[i] = L0;
    Ln = L0 + L1;
    L0 = L1;
    L1 = Ln 
}
console.log('El array tiene '+array.length+' elementos, el quinto elemento es: ' +array[4]);
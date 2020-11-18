let hora = 10;


console.log('En ',2500, 'horas serán las', modular(),'horas');

function modular(){
    let sumHoras = 2500 + hora;
    let modulo = sumHoras % 24;
    return modulo;
}
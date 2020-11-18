let hora = 10;
console.log('Hace ', 2500, 'horas, fueron las ', modular(hora),'horas');

function modular(hours){
    let menHoras = 2500 % 24;
    if(menHoras > hours){
        let sumahoras = 24 + hours - menHoras;
        return sumahoras;       
    }
    let sumahoras = hours - menHoras;
    return sumahoras;
}
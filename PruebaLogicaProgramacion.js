var I;//numero de millas que desea viajar
var tarifa=[];//Lista de precios
const coche = ["UberX", "UberXL", "Uber Plus", "Uber Black", "Uber SUV"];//lista de carros
var cont = 0;//contador para el while

console.log("Por ser un nuevo usuario de Uber, tienes 20 dólares de descuento en tu primer viaje.")
I = prompt('Ingrese el numero de millas que desea viajar:');
console.log('Numero de millas que desea viajar:' + I);
console.log('Ingrese los 5 precios de las milla desde el mas barato al mas caro');
while (cont<5) {
    let cont2 = cont+1;//contador para los mensajes
    let pA= cont-1; //contador para la posicion anterior
    let n = 0;//variable que almacena el ingreso antes de validar
    if (tarifa.length==0) {
        tarifa[cont] = prompt('Ingrese el precio numero '+ cont2);
        console.log('El '+cont2+' º precio ingresado es '+ tarifa[cont]);
        cont = cont+1;
    } else {
        n = prompt('Ingrese el precio numero '+ cont2);
        tarifa[cont]=n;
        console.log('El '+cont2+' º precio ingresado es '+ tarifa[cont]);
        cont = cont+1;
    }
}

//console.log('sali del while');

/*for (let i = 0; i < tarifa.length; i++) {
    console.log('A- '+tarifa[i])
    
}*/


function fancyRide(l, tarifas) {

}

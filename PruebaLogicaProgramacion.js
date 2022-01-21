var I;//numero de millas que desea viajar
var tarifa = [];//Lista de precios
const coche = ["UberX", "UberXL", "Uber Plus", "Uber Black", "Uber SUV"];//lista de carros
var cont = 0;//contador para el while de tarifas
var Icont = 0;//contador para el while de millas
var n = 0;//variable que almacena el ingreso antes de validar

document.write("Por ser un nuevo usuario de Uber, tienes 20 dólares de descuento en tu primer viaje." + "<br>")

while (Icont < 1) {//Validando las millas
    n = prompt('Ingrese el numero de millas que desea viajar:');
    if (!isNaN(n) && 4 <= n && 30 >= n && n % 1 == 0) {
        I = n;
        ++Icont;
    } else {
        document.write('----------------------------------------------' + "<br>")
        document.write('Debe ingresar valores NUMERICOS Enteros, mayores o iguales a 4 y menores o iguales a 30' + "<br>")
        document.write('----------------------------------------------' + "<br>")
    }
}

document.write('Numero de millas que desea viajar:' + I + "<br>");

document.write('Ingrese los 5 precios de las milla desde el mas barato al mas caro' + "<br>");
while (cont < 5) {
    let cont2 = cont + 1;//contador para los mensajes
    let pA = cont - 1; //contador para la posicion anterior
    n = prompt('Ingrese el precio numero ' + cont2 + ' Para el servicio ' + coche[cont]);
    if (!isNaN(n) && 0.3 <= n && n <= 5) {//isNaN retorna false para los numeros por eso se lleva el !
        if (tarifa.length == 0) {
            //console.log('El '+cont2+' º precio ingresado es '+ n);
            if (n > 0) {
                let servicio = {
                    coche: coche[cont],
                    precio: n
                };
                tarifa[cont] = servicio;
                document.write('------>   Guardado Exitosamente ' + tarifa[cont].coche + ' : $' + tarifa[cont].precio + ' por milla ' + "<br>")
                cont = cont + 1;
                n = 0;
            }
            else {
                document.write('----------------------------------------------' + "<br>")
                document.write('Debe ingresar valores numericos mayores a cero' + "<br>")
                document.write('----------------------------------------------' + "<br>")
            }
        } else {
            if (n > tarifa[pA].precio) {
                let servicio = {
                    coche: coche[cont],
                    precio: n
                };
                tarifa[cont] = servicio;
                document.write('------>   Guardado Exitosamente ' + tarifa[cont].coche + ' : $' + tarifa[cont].precio + ' por milla ' + "<br>")
                cont = cont + 1;
                n = 0;
            } else {
                n = 0;//reiniciando la variable 'n' para evitar errores en la validacion
                document.write('----------------------------------------------' + "<br>")
                document.write('El precio ingresado es menor al anterior, intentelo de nuevo o pulse 0 (cero) para ingresar los precios desde el inicio o cualquier otra tecla para continuar' + "<br>")
                document.write('----------------------------------------------' + "<br>")
                let opcion = prompt('Pulse 0 (cero) para ingresar todo desde el inicio o cualquier otra letra para continuar')
                if (opcion == 0) {
                    tarifa = [];
                    cont = 0;
                }
            }
        }
    } else {
        n = 0;//reiniciando la variable 'n' para evitar errores en la validacion
        document.write('----------------------------------------------' + "<br>")
        document.write('El dato ingresado no es valido debe estar en el intervalo de 0.3 y 5, intente de nuevo' + "<br>");
        document.write('pulse 0 (cero) para ingresar los precios desde el inicio o cualquier otra tecla para continuar' + "<br>")
        document.write('----------------------------------------------' + "<br>")
        let opcion = prompt('Pulse 0 (cero) para ingresar todo desde el inicio o cualquier otra letra para continuar')
        if (opcion == 0) {
            tarifa = [];
            cont = 0;
        }
    }
}

document.write('Calculando el mejor Carro en el que puede viajar....' + "<br>")

fancyRide(I, tarifa);

function fancyRide(l, tarifas) {
    let Viaje = [];
    for (let ii = 0; ii < tarifas.length; ii++) {
        let num = l * tarifas[ii].precio;
        if (num <= 20) {
            Viaje[ii] = tarifas[ii];
        }
        document.write('---------------------------------------------------------------' + "<br>")
    }
    let ultimo = Viaje.length - 1;//al estar ordenados de menor a mayor desde antes solo es necesario seleccionar el ultimo elemento de la lista 
    let total = l * Viaje[ultimo].precio;
    if (Viaje.length == 0) {
        document.write('--------------------------------------------------------------------------------------------' + "<br>")
        document.write("No Hay opciones validas, todos los viajes superan los $20.00")
        document.write('--------------------------------------------------------------------------------------------' + "<br>")
    } else {
        document.write('--------------------------------------------------------------------------------------------' + "<br>")
        document.write('-------->   Opciones de viaje con tus $20.00' + "<br>")
        for (let i = 0; i < Viaje.length; i++) {
            let sub = l * Viaje[i].precio;
            let VV = i + 1;
            document.write(VV + '. ' + Viaje[i].coche + " con un precio por milla de $" + Viaje[i].precio + " con un total de $" + sub + "<br>")
        }
        document.write('--------------------------------------------------------------------------------------------' + "<br>")
        document.write('Tu Mejor Opcion es ' + Viaje[ultimo].coche + " con un precio por milla de $" + Viaje[ultimo].precio + " con un total de $" + total + "<br>")
        document.write('--------------------------------------------------------------------------------------------' + "<br>")
    }
}

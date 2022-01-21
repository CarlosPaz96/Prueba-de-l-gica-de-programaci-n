var I;//numero de millas que desea viajar
var tarifa = [];//Lista de precios
const coche = ["UberX", "UberXL", "Uber Plus", "Uber Black", "Uber SUV"];//lista de carros
var cont = 0;//contador para el while de tarifas
var Icont = 0;//contador para el while de millas
var n = 0;//variable que almacena el ingreso antes de validar


document.write("Por ser un nuevo usuario de Uber, tienes 20 dólares de descuento en tu primer viaje." + "<br>")

while (Icont < 1) {
    n = prompt('Ingrese el numero de millas que desea viajar:');
    if (!isNaN(n)) {
        if (n > 0) {
            I = n;
            ++Icont;
        } else {
            document.write('----------------------------------------------' + "<br>")
            document.write('El numero de millas debe ser mayor a Cero' + "<br>")
            document.write('----------------------------------------------' + "<br>")
        }
    } else {
        document.write('----------------------------------------------' + "<br>")
        document.write('Debe ingresar valores numericos mayores a cero' + "<br>")
        document.write('----------------------------------------------' + "<br>")
    }
}

document.write('Numero de millas que desea viajar:' + I + "<br>");

document.write('Ingrese los 5 precios de las milla desde el mas barato al mas caro' + "<br>");
while (cont < 5) {
    let cont2 = cont + 1;//contador para los mensajes
    let pA = cont - 1; //contador para la posicion anterior
    n = prompt('Ingrese el precio numero ' + cont2 + ' Para el servicio ' + coche[cont]);
    if (!isNaN(n)) {//isNaN retorna false para los numeros por eso se lleva el !
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
                document.write('------>   Guardado Exitosamente ' + tarifa[cont].coche + ' : $' + tarifa[cont].precio + ' por milla '+"<br>")
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
        document.write('----------------------------------------------' + "<br>")
        document.write('El dato ingresado no es valido, intente de nuevo' + "<br>");
        document.write('----------------------------------------------' + "<br>")
    }
}

document.write('Calculando el mejor Carro en el que puede viajar....' + "<br>")




fancyRide(I, tarifa);


function fancyRide(l, tarifas) {
    let Viaje = [];
    for (let ii = 0; ii < tarifas.length; ii++) {
        let num = l * tarifas[ii];
        if (num < 20) {
            Viaje[ii] = num;
        }

    }
}

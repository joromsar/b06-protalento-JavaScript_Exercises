/* Ejercicio 1 */
/* Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en
caso de contestar sí, responder “Ciertamente”, en caso de contestar no,
responder: “No te creo” */

let respuesta = prompt("¿eres Bellisimo/a? Responde si o no");

if (respuesta == "si") {
    console.log("Ciertamente")

} else {
    console.log("No te creo")
}

/* Ejercicio 2 */
/* Solicitar al usuario un número, y determinar si es divisible entre dos o no. 
Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm */

let numero = parseInt(prompt("Ingresa por favor un número"));

if ((numero % 2) == 0) {
    console.log(`El número ${numero} ingresado es divisible entre 2`);

} else {
    console.log(`El número ${numero} ingresado no es divisible entre 2`);
}

/* Ejercicio 3 */
/* Crear un programa que determine si un número introducido en un Prompt
es par o no, la respuesta será mostrada en un Alert. */

let number = parseInt(prompt("Por favor ingresa un número"));

if ((number % 2) == 0) {
    alert(`El número ${number} ingresado es un número par`);
} else {
    alert(`El número ${number} ingresado es un número impar`);
}

/* Ejercicio 4 */
/* Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir
"Ganaste un premio", en caso contrario mostrar el número y el mensaje
“Lo sentimos, sigue participando”.*/


let numeroCliente = parseInt(prompt("Por favor ingrese un número de cliente"));

if (numeroCliente == 1000) {
    console.log("¡Felicidades, Ganaste un premio!");

} else {
    console.log(`Lo sentimos, el número de cliente ingresado: ${numeroCliente}  no es el ganador, sigue participando`);
}

/* Ejercicio 5 */
/* Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es
menor. No considerar el caso en que ambos números son iguales.*/

let numeroUno = parseInt(prompt("Ingrese por favor el valor del número uno"));
let numeroDos = parseInt(prompt("Ingrese por favor el valor del número dos"));

if (numeroUno > numeroDos) {
    console.log(`El número dos ${numeroDos} es menor al número uno ingresado: ${numeroUno}`);

} else if (numeroDos < numeroUno) {
    console.log(`El número uno ${numeroUno} es menor al número dos ingresado: ${numeroDos}`);

} else if (numeroDos > numeroUno) {
    console.log(`El número uno ${numeroUno} es menor al número dos ingresado: ${numeroDos}`);
}

/* Ejercicio 6 */
/* Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es
el número mayor. Considerar el caso en que 2 números sean iguales. */

let numberOne = parseInt(prompt("Ingresa el primer número"));
let numberTwo = parseInt(prompt("Ingresa el segundo número"));
let numberThree = parseInt(prompt("Ingresa el tercer número"));

if (numberOne > numberTwo && numberOne > numberThree) {
    console.log("número uno es mayor al número dos y número tres");
} else if (numberTwo > numberOne && numberTwo > numberThree) {
    console.log("numero dos es mayor al número uno y número tres");
} else if (numberThree > numberOne && numberThree > numberTwo) {
    console.log("numero tres es mayor al número uno y número dos");
} if (numberOne == numberTwo) {
    console.log("Numero uno es igual al numero dos");
} else if (numberTwo == numberThree) {
    console.log("Numero dos es igual al numero tres");

} else if (numberOne == numberThree) {
    console.log("Numero uno es igual al numero tres");
}

/* Ejercicio 7 */
/* Requerir al usuario que ingrese un día de la semana e imprimir un
mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje
diferente si es sábado o domingo. Si el día ingresado no es ninguno de
esos, imprimir otro mensaje*/

let diaSemana = prompt("Ingrese el dia de la semana de su preferencia sólo minúsculas sin tildes)");
if (diaSemana == "lunes") {
    console.log("Bienvenido al día Lunes");
} else if (diaSemana == "viernes") {
    console.log("Hoy es viernes!");
} else if (diaSemana == "sabado") {
    console.log("Hoy es sabado!");

} else if (diaSemana == "domingo") {
    console.log("Hoy es domingo fin de la semana!");

} else {
    console.log("El dia seleccionado es martes, miercoles o jueves")
}

/** Ejercicio 8*/
/*Solicitar al usuario una calificación (entre 1 y 10). Luego se debe
comprobar que el número efectivamente esté en ese rango, si no lo está
imprima un mensaje de error. Si lo está, imprima “reprobado” si la
calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por
último, “excelente” si es 10.*/

let calificacion = parseInt(prompt("Ingrese su calificación"));

if (calificacion < 6) {
    console.log("Reprobado");
} else if (calificacion <= 8) {
    console.log("Regular");
} else if (calificacion == 9) {
    console.log("Bien");
} else if (calificacion == 10) {
    console.log("excelente");
} else {
    console.error("El rango ingresado es incorrecto");
}

/* Ejercicio 9*/
/* Escribe un programa que responda a un usuario que quiere comprar un
helado en una conocida marca de comida rápida cuánto le costará en
función del topping que elija.
● El helado sin topping cuesta 50 MXN.
● El topping de oreo cuesta 10 MXN.
● El topping de KitKat cuesta 15 MXN.
● El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, el programa
le indicará “no tenemos este topping, lo sentimos.” y a continuación le
informará el precio del helado sin ningún topping. */


alert("Hola, bienvenido a nuestra heladería!, Selecciona una de nuestras especialidades de topping!: oreo | kitkat | brownie");

let toppingSeleccionado = prompt("Ingresa el nombre del topping que deseas (oreo | kitkat | brownie)");

if (toppingSeleccionado == "oreo") {
    alert("El topping de oreo que seleccionaste tiene un costo de 10 pesos MXN");
} else if (toppingSeleccionado == "kitkat") {
    alert("El topping de kitkat que seleccionaste tiene un costo de 15 pesos MXN");
} else if (toppingSeleccionado == "brownie") {
    alert("El topping de brownie tiene un costo de 20 pesos MXN");
} else {
    alert("No tenemos este topping, lo sentimos, El valor del helado sin topping es de 50 pesos MXN");
}

/* Ejercicio 10 */
/* Un conocido portal de educación en tecnología está ofreciendo
programas para aprender a desarrollar aplicaciones. Escribe un programa
que le indique a la persona interesada cuánto deberá pagar
mensualmente de acuerdo a la opción elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su
costo mensual:
● Course: $4999 MXN
● Carrera $3999 MXN
● Master: $2999 MXN
Adicionalmente preguntar si cuenta con alguna beca y aplicar el
descuento correspondiente al precio final.
● Beca Facebook: 20% de descuento.
● Beca Google: 15% de descuento.
● Beca Jesua: 50% de descuento.
Finalmente, además del precio mensual con descuento, indicar al usuario
cuánto gastaría en total por el curso elegido, tomando en cuenta las
siguientes duraciones:
● Course: 2 meses
● Carrera 6 meses
● Master: 12 meses */

alert("Bienvenido a DevApp, somos pioneros en educacion en tecnología para el desarrollo de aplicaciones");
alert("Contamos con 3 niveles para que lleves tu carrera al siguiente nivel: Course, Carrera, Master");

let nivelEducativo = prompt("Por favor ingresa el nivel al cual estas interesado en inscribirte: course, carrera, master, sin mayúsculas ni tildes");
let beca = prompt("Por favor ingresa si la beca en la que eres beneficiario (facebook, google, jesua)");
let duracionCourse = 2;
let costoCourse = 4999;
let duracionCarrera = 6;
let costoCarrera = 3999;
let duracionMaster = 12;
let costoMaster = 2999;
let descuentoFacebook = 0.20;
let descuentoGoogle = 0.15;
let descuentoJesua = 0.5;

if (nivelEducativo == "course" && beca == "facebook") {

    valorPagoMensual = (costoCourse) - (costoCourse * descuentoFacebook);
    valorTotal = (costoCourse * duracionCourse) - (costoCourse * duracionCourse * descuentoFacebook);
    console.log(`El valor mensual a pagar por el programa seleccionado ${nivelEducativo} es ${valorPagoMensual} se ha aplicado un descuento del 20% segun el beneficio de la beca ingresada: ${beca}`)
    console.log(`El valor total a pagar por el programa ${nivelEducativo} es ${valorTotal} se ha aplicado un descuento del 20% segun el beneficio de la beca ingresada: ${beca}`)

} else if (nivelEducativo == "course" && beca == "google") {
    valorPagoMensual = (costoCourse) - (costoCourse * descuentoGoogle);
    valorTotal = (costoCourse * duracionCourse) - (costoCourse * duracionCourse * descuentoGoogle);
    console.log(`El valor mensual a pagar por el programa seleccionado ${nivelEducativo} es ${valorPagoMensual} se ha aplicado un descuento del 15% segun el beneficio de la beca ingresada: ${beca}`)
    console.log(`El valor total a pagar por el programa ${nivelEducativo} es ${valorTotal} se ha aplicado un descuento del 15% segun el beneficio de la beca ingresada: ${beca}`)

} else if (nivelEducativo == "course" && beca == "jesua") {
    valorPagoMensual = (costoCourse) - (costoCourse * descuentoJesua);
    valorTotal = (costoCourse * duracionCourse) - (costoCourse * duracionCourse * descuentoJesua);
    console.log(`El valor mensual a pagar por el programa seleccionado ${nivelEducativo} es ${valorPagoMensual} se ha aplicado un descuento del 50% segun el beneficio de la beca ingresada: ${beca}`)
    console.log(`El valor total a pagar por el programa ${nivelEducativo} es ${valorTotal} se ha aplicado un descuento del 50% segun el beneficio de la beca ingresada: ${beca}`)


} else if (nivelEducativo == "carrera" && beca == "facebook") {
    valorPagoMensual = (costoCarrera) - (costoCarrera * descuentoFacebook);
    valorTotal = (costoCarrera * duracionCarrera) - (costoCarrera * duracionCarrera * descuentoFacebook);
    console.log(`El valor mensual a pagar por el programa seleccionado ${nivelEducativo} es ${valorPagoMensual} se ha aplicado un descuento del 50% segun el beneficio de la beca ingresada: ${beca}`)
    console.log(`El valor total a pagar por el programa ${nivelEducativo} es ${valorTotal} se ha aplicado un descuento del 50% segun el beneficio de la beca ingresada: ${beca}`)

} else if (nivelEducativo == "carrera" && beca == "google") {
    valorPagoMensual = (costoCarrera) - (costoCarrera * descuentoGoogle);
    valorTotal = (costoCarrera * duracionCarrera) - (costoCarrera * duracionCarrera * descuentoGoogle);
    console.log(`El valor mensual a pagar por el programa seleccionado ${nivelEducativo} es ${valorPagoMensual} se ha aplicado un descuento del 50% segun el beneficio de la beca ingresada: ${beca}`)
    console.log(`El valor total a pagar por el programa ${nivelEducativo} es ${valorTotal} se ha aplicado un descuento del 50% segun el beneficio de la beca ingresada: ${beca}`)

} else if (nivelEducativo == "carrera" && beca == "jesua") {
    valorPagoMensual = (costoCarrera) - (costoCarrera * descuentoJesua);
    valorTotal = (costoCarrera * duracionCarrera) - (costoCarrera * duracionCarrera * descuentoJesua);
    console.log(`El valor mensual a pagar por el programa seleccionado ${nivelEducativo} es ${valorPagoMensual} se ha aplicado un descuento del 50% segun el beneficio de la beca ingresada: ${beca}`)
    console.log(`El valor total a pagar por el programa ${nivelEducativo} es ${valorTotal} se ha aplicado un descuento del 50% segun el beneficio de la beca ingresada: ${beca}`)

} else if (nivelEducativo == "master" && beca == "facebook") {
    valorPagoMensual = (costoMaster) - (costoMaster * descuentoFacebook);
    valorTotal = (costoMaster * duracionMaster) - (costoMaster * duracionMaster * descuentoFacebook);
    console.log(`El valor mensual a pagar por el programa seleccionado ${nivelEducativo} es ${valorPagoMensual} se ha aplicado un descuento del 50% segun el beneficio de la beca ingresada: ${beca}`)
    console.log(`El valor total a pagar por el programa ${nivelEducativo} es ${valorTotal} se ha aplicado un descuento del 50% segun el beneficio de la beca ingresada: ${beca}`)

} else if (nivelEducativo == "master" && beca == "google") {
    valorPagoMensual = (costoMaster) - (costoMaster * descuentoGoogle);
    valorTotal = (costoMaster * duracionMaster) - (costoMaster * duracionMaster * descuentoGoogle);
    console.log(`El valor mensual a pagar por el programa seleccionado ${nivelEducativo} es ${valorPagoMensual} se ha aplicado un descuento del 50% segun el beneficio de la beca ingresada: ${beca}`)
    console.log(`El valor total a pagar por el programa ${nivelEducativo} es ${valorTotal} se ha aplicado un descuento del 50% segun el beneficio de la beca ingresada: ${beca}`)

} else if (nivelEducativo == "master" && beca == "jesua") {
    valorPagoMensual = (costoMaster) - (costoMaster * descuentoJesua);
    valorTotal = (costoMaster * duracionMaster) - (costoMaster * duracionMaster * descuentoJesua);
    console.log(`El valor mensual a pagar por el programa seleccionado ${nivelEducativo} es ${valorPagoMensual} se ha aplicado un descuento del 50% segun el beneficio de la beca ingresada: ${beca}`)
    console.log(`El valor total a pagar por el programa ${nivelEducativo} es ${valorTotal} se ha aplicado un descuento del 50% segun el beneficio de la beca ingresada: ${beca}`)

}

/* Ejercicio 11 */

/* Realizar un programa que ayude a calcular el total a pagar de acuerdo a la
distancia recorrida por un vehículo con cargo extra por los litros
consumidos, tomando en consideración lo siguiente:
Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto”
ha de ser 0.10 y si es “autobús” 0.5.
Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo
total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al
total. Considere qué:
total a pagar = (precio kilometro x kms recorridos) + extra por litros
consumidos.*/

let precioKilometroCoche = 0.20;
let precioKilometroMoto = 0.10;
let precioKilometroAutobus = 0.5;
let tipoVehiculo = prompt("Ingrese el tipo de vehículo (coche, moto, autobus)");
let kilometrosRecorridos = parseInt(prompt("Ingrese los kilometros recorridos"));
let litrosConsumidos = parseInt(prompt("Ingrese los litros consumidos"));

if (tipoVehiculo == "coche" && litrosConsumidos >= 0 && litrosConsumidos <= 100) {
    let totalPago = (precioKilometroCoche * kilometrosRecorridos) + 5;
    console.log(`El total a pagar por la distancia recorrida: ${kilometrosRecorridos} es: ${totalPago}`)

} else if (tipoVehiculo == "coche" && litrosConsumidos > 100) {
    let totalPago = (precioKilometroCoche * kilometrosRecorridos) + 10;
    console.log(`El total a pagar por la distancia recorrida: ${kilometrosRecorridos} es: ${totalPago}`)

} else if (tipoVehiculo == "autobus" && litrosConsumidos >= 0 && litrosConsumidos <= 100) {
    let totalPago = (precioKilometroAutobus * kilometrosRecorridos) + 5;
    console.log(`El total a pagar por la distancia recorrida: ${kilometrosRecorridos} es: ${totalPago}`)

} else if (tipoVehiculo == "autobus" && litrosConsumidos > 100) {
    let totalPago = (precioKilometroAutobus * kilometrosRecorridos) + 10;
    console.log(`El total a pagar por la distancia recorrida: ${kilometrosRecorridos} es: ${totalPago}`)

} else if (tipoVehiculo == "moto" && litrosConsumidos >= 0 && litrosConsumidos <= 100) {
    let totalPago = (precioKilometroMoto * kilometrosRecorridos) + 5;
    console.log(`El total a pagar por la distancia recorrida: ${kilometrosRecorridos} es: ${totalPago}`)
}

else if (tipoVehiculo == "moto" && litrosConsumidos > 100) {
    let totalPago = (precioKilometroMoto * kilometrosRecorridos) + 10;
    console.log(`El total a pagar por la distancia recorrida: ${kilometrosRecorridos} es: ${totalPago}`)
    console.log(`El total a pagar por la distancia recorrida: ${kilometrosRecorridos} es: ${totalPago}`)
}
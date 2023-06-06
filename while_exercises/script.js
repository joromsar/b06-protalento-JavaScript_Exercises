/* 1. Crea un programa que pregunte al usuario un número. Mostrar los números que son 
múltiplos de 5 desde 1 hasta el número introducido por el usuario.*/

let contador= 0;

let numeroUsuario = parseInt(prompt("Ingrese el número de su preferencia"));

while (contador <= numeroUsuario) {

    if(numeroUsuario % 5 == 0){
    (numeroUsuario=-5 + numeroUsuario);
    contador++;
    console.log(contador + ": " + numeroUsuario);
}
  }


/*2. Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola 
los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar 
los números indicados por el usuario.*/

let counter = 1;
let numberOne = parseInt(prompt("Ingresa tu primer número entre 1 y 50"));
let numberTwo = parseInt(prompt("Ingresa tu segundo número entre 1 y 50"));

while (counter <= 50) {

  if (numberOne == counter || numberTwo == counter) {
    console.log(counter + ": " + "¡Lotería!");
  } 
  console.log(counter);
  counter++;

}

/*3. Crea un programa que solicite al usuario números, si lo que este introduce 
es un número guardarlo en un arreglo. Para terminar el capturar el usuario debe ingresar el número 0. 
Finalmente mostrar la lista de números capturados en pantalla o en la consola. */

const arrayNumbers = [];
alert("Bienvenidos! Aqui podrás ingresar los número de tu preferencia, para terminar ingresa el número 0");
let userInputNumber = parseInt(prompt("Ingrese por favor un número de su preferencia"));


while (userInputNumber != 0) {
  userInputNumber = parseInt(prompt("Ingrese por favor un número de su preferencia"));
  arrayNumbers.push(userInputNumber);

  if (userInputNumber == 0) {
    console.log(arrayNumbers);
    break;
  }
}

/*4. Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. 
Para terminar de capturar el usuario no debe escribir valor alguno. 
Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas.*/

const arrayLetters = [];
let userInput = prompt("Por favor ingresa letras o palabras");

while (userInput != "") {
  userInput = prompt("Por favor ingresa letras o palabras");
  arrayLetters.push(userInput);
  
  if (userInput === "") {
    console.log(arrayLetters);
    break;
    
  }

}


/*5. Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). 
El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. 
Y seguirá pidiendo al usuario introducir otro día. En caso de que el día 
introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información.*/

let userWeekInput = prompt("Por favor ingresa el día de la semana de tu preferencia");

while (userWeekInput != "domingo") {
 
  if (userWeekInput === "lunes") {
    alert(`Hoy es : ${userWeekInput} solo faltan 6 dias para descansar`);
  } 

  else if(userWeekInput === "martes") {
    alert(`Hoy es : ${userWeekInput} solo faltan 5 dias para descansar`);
  }

  else if(userWeekInput === "miercoles"){
    alert(`Hoy es : ${userWeekInput} solo faltan 4 dias para descansar`);

  }

  else if(userWeekInput === "jueves"){
    alert(`Hoy es : ${userWeekInput} solo faltan 3 dias para descansar`);
  }

  else if(userWeekInput === "viernes"){
    alert(`Hoy es : ${userWeekInput} solo faltan 2 dias para descansar`);
  }

  else if(userWeekInput === "sabado"){
    alert(`Hoy es : ${userWeekInput} solo faltan 1 dia para descansar`);
  }

  userWeekInput = prompt("Por favor ingresa el día de la semana de tu preferencia");

  if (userWeekInput === "domingo"){
    alert(`Hoy es : ${userWeekInput} ve a descansar`);
    break;
  }
    
  
}
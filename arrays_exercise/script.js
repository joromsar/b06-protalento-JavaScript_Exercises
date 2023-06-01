/* 1. Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. 
Mostrar en consola el resultado del array.*/

const arregloVacio = [];

for (contador=0; contador <10; contador++){
  
   let numeroAleatorio = Math.floor(Math.random() * 100);
   arregloVacio.push(numeroAleatorio);
}

console.log(arregloVacio);

/* Ejercicio 2. 
El usuario deberá ingresar un string con varias palabras separadas por coma en un popup 
y se deben convertir en un array, (el usuario ingresa: '1,2,3,4,5' y se convierte en [1,2,3,4,5]). 
Mostrar en consola dicho resultado.*/

let userInput = prompt("Ingrese por favor varias palabras o números separados por coma");

var palabrasSeparadas = userInput.split(',');
console.log(palabrasSeparadas);

/*3. De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: 
El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor. 
Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo.*/

const arregloOrdenado = [10,40,30,20,15,5];

arregloOrdenado.sort(function(a,b){return a - b});

console.log("El array fue ordenado de menor a mayor: " + arregloOrdenado);

arregloOrdenado.sort(function(a,b){return b - a});

console.log("El array fue ordenado de mayor a menor: " + arregloOrdenado);

const valorMinimo = Math.min(...arregloOrdenado);

console.log(`El valor mínimo del array es: ${valorMinimo}`);

const valorMaximo = Math.max(...arregloOrdenado);

console.log(`El valor máximo del array es: ${valorMaximo}`);




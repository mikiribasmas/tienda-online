// Escribe un programa que pida al usuario dos números y los sume, mostrando el resultado en la consola.

let nombre = prompt("¿Cual es tu nombre?");
console.log("Bienvenido: " + nombre);

let numero = prompt("Ingresar numero: ");
numero =Number (numero) + Number(prompt("Ingresar numero: "));

console.log(numero);

// Escribe un programa que pida al usuario la base y la altura de un triángulo y calcule su área, mostrando el resultado en la consola.
let base = Number(prompt("Ingresar la base: "));
let altura = Number(prompt("Ingresar la altura: "));
area= base * altura;
console.log("El área del triángulo es: " + area);


// Escribe un programa que pida al usuario dos números y muestre en la consola si el primer número es mayor, menor o igual al segundo número.

let num1 = Number(prompt("Ingresar primer número: "));
let num2 = Number(prompt("Ingresar segundo número: "));

if (num1 > num2) { console.log("El primer número es mayor"); }
if (num1 < num2) { console.log("El primer número es menor"); }
if (num1 == num2) { console.log("Los números son iguales"); }

// Escribe un programa que pida al usuario un número y calcule su tabla de multiplicar del 1 al 10, mostrando los resultados en la consola.

let num = Number(prompt("Ingresar número: "));
for (let i = 1; i <= 10; i++) {
    console.log(numero * i);
}



let cadena = prompt("Ingrese una cadena de texto: ");
let longitud = cadena.length;
let primerCaracter = cadena.charAt(0);
let ultimoCaracter = cadena.charAt(longitud - 1);

console.log("La cadena tiene " + longitud + " caracteres.");
console.log("El primer caracter es '" + primerCaracter + "'.");
console.log("El último caracter es '" + ultimoCaracter + "'.");



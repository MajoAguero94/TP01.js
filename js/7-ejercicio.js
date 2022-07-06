//Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres//

let numero1 = parseInt(prompt("Ingrese un primer numero"));
let numero2 = parseInt(prompt("Ingrese un segundo numero"));
let numero3 = parseInt(prompt("Ingrese un tercer numero"));

if (numero1 > numero2 & numero1 > numero3) {
  document.write("El numero1 es el mayor: " + numero1);
} else if (numero2 > numero1 & numero2 > numero3) {
  document.write("el numero mayor es el numero2: " + numero2);
} else if (numero3 > numero1 & numero3> numero2) {
  document.write("el numero mayor es el numero3: " + numero3);
}

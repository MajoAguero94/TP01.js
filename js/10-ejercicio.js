//Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)//

let numero1 = parseInt(prompt('Ingrese un numero'));
let number = (2,3,5,7)

if((numero1 % 2) == 0){
    document.write ('Es divisible en : 2')
}else if((numero1 % 3) == 0){
    document.write ('Es divisible en : 3')
}else if((numero1 %5 ) == 0){
    document.write ('Es divisible en : 5')
}else if((numero1 % 7) == 0){
    document.write ('Es divisible en : 7')
}

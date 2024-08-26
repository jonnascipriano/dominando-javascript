// Escrever um programa que calcule a média geométrica entre três números informados pelo usuário.

let num1 = parseFloat(prompt('Digite o primeiro número'))
let num2 = parseFloat(prompt('Digite o segundo número'))
let num3 = parseFloat(prompt('Digite o terceiro número'))

// A função Math.pow() retorna a base elevada ao expoente power, ou seja, baseexpoente.
// Ex: 
// Math.pow(7, 2) = 49 pois é 7 elevado ao quadrado
// Math.pow(7, 3) = 343 pois é 7 elevado ao cúbico
// Math.pow(4, 0.5) = 2 pois é raiz quadrada de 4 

// Logo, a mediaGeometrica é basicamente multiplicar os 3 números e dividir por 3
let mediaGeometrica = Math.pow(num1 * num2 * num3, 1/3);

document.querySelector('p').innerHTML = `A média geométrica dos números: ${mediaGeometrica}`
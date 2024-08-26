// Escrever um programa que calcule a média aritmética de dois números

let num1 = parseFloat(prompt('Digite o primeiro número'))
let num2 = parseFloat(prompt('Digite o segundo número'))

let media = (num1 + num2) / 2

document.querySelector('p').innerHTML = `A média é ${media}`
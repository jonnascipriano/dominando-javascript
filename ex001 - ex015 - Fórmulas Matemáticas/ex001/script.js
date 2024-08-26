// Escrever um programa que solicite ao usuário dois números e exiba a soma, subtração, multiplicação e divisão entre eles.
let num1 = parseFloat(prompt("Digite o primeiro número"))
let num2 = parseFloat(prompt("Digite o segundo número"))

let soma = num1 + num2
let subtracao = num1 - num2
let multiplicacao = num1 * num2
let divisao = num1 / num2

document.querySelector('p').innerHTML += `Soma: ${soma}<br>`
document.querySelector('p').innerHTML += `Subtração: ${subtracao}<br>`
document.querySelector('p').innerHTML += `Multiplicação: ${multiplicacao}<br>`
document.querySelector('p').innerHTML += `Divisão: ${divisao}<br>`
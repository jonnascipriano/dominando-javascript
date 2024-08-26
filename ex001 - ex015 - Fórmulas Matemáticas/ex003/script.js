// Criar um programa que calcule e exiba a média aritmética de três notas informadas pelo usuário

let nota1 = parseFloat(prompt('Digite o primeiro número'))
let nota2 = parseFloat(prompt('Digite o segundo número'))
let nota3 = parseFloat(prompt('Digite o terceiro número'))

let media = (nota1+nota2+nota3) / 3

document.querySelector('p').innerHTML = `A média das notas é: ${media.toFixed(2)}`
// Escreva um programa que calcule e exiba o valor da potência de um número informado pelo usuário elevado a um expoente também informado pelo usuário, utilizando laços de repetição.

let base = parseInt(prompt('Digite o número base'))
let expoente =  parseInt(prompt('Digite o expoente'))
let resultado = 1

for (let i = 0; i < expoente; i++){
    resultado *= base
}

document.querySelector('p').innerHTML = `${base} elevado a ${expoente} é: ${resultado}`
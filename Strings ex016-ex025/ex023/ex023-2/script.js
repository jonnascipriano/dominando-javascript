// Escreva um programa que receba um nome completo e exiba somente o primeiro nome.

let frase = prompt('Digite uma frase:')

// Divide a frase em palavras
let palavras = frase.split(" ")

// Calcula a quantidade de espaços em branco
let quantidadeEspaco = palavras.length - 1

document.querySelector('p').innerHTML = `A frase possui ${quantidadeEspaco} espaços em branco.`
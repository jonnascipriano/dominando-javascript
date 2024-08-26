// Crie um programa que leia uma palavra e exiba a quantidade de vogais presentes na mesma.

let palavra = prompt('Digite uma palavra:')

// Cria uma array com as vogais
let vogais = ["a","e","i","o","u"]

// Utiliza a função filter para filtrar apenas as vogais presentes na palavra
let vogaisEncontradas = palavra.split('').filter(letra => vogais.includes(letra.toLowerCase()))

// Obtém a quantidade de vogais encontradas
let quantidadeVogais = vogaisEncontradas.length

document.querySelector('p').innerHTML = `A palavra possui ${quantidadeVogais} vogais.`
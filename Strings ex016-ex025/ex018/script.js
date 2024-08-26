// Crie um programa que receba uma frase e substitua todas as letras "a" por "e".

let frase = prompt('Digite uma frase:')

// A expressão /a/g é uma expressão regular que encontra todas as ocorrências da letra "a" na frase. Utilizamos o modificador "g" para fazer a substituição global, ou seja, substituir todas as ocorrências.
let novaFrase = frase.replace(/a/g, "e")

document.querySelector('p').innerHTML = `Nova frase: ${novaFrase}`
// Crie um programa que leia duas palavras e as concatece, exibindo a palavra resultante.

let palavra1 = prompt('Digite a primeira palavra')
let palavra2 = prompt('Digite a segunda palavra')

let palavraResultante = palavra1 + palavra2

document.querySelector('p').innerHTML = `Palavra resultante: ${palavraResultante}`
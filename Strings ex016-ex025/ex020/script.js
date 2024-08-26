// Faça um programa que leia uma palavra e verifique se a mesma é palíndromo (se pode ser lida da mesma forma de trás para frente).

let palavra = prompt('Digite uma palavra:')


// Converte a palavra em minúscula
palavra = palavra.toLowerCase()

// Inverte a palavra
let palavraInvertida = palavra.split("").reverse().join("")

// Verifica se o a palavra é um palíndromo
if(palavra === palavraInvertida){
    document.querySelector('p').innerHTML = `A palavra ${palavra} é um palíndromo`
} else {
    document.querySelector('p').innerHTML = `A palavra ${palavra} não é um palíndromo`
}
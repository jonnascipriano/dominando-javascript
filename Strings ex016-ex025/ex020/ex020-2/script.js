// Faça um programa que leia uma palavra e verifique se a mesma é palíndromo (se pode ser lida da mesma forma de trás para frente).

let palavra = prompt('Digite uma palavra:')


// Converte a palavra em minúscula
palavra = palavra.toLowerCase()

// Inicializa uma variável para armazenar a palavra invertida
let palavraInvertida = ""

// Percorre a palavra de trás para frente
for (let i = palavra.length - 1; i >=0 ; i--){
    palavraInvertida += palavra[i] // add cada letra em palavraInvertida
}

// Verifica se a palavra invertida é igual à palavra original
if(palavra === palavraInvertida){
    document.querySelector('p').innerHTML = `A palavra ${palavra} é um palíndromo`
} else {
    document.querySelector('p').innerHTML = `A palavra ${palavra} não é um palíndromo`
}
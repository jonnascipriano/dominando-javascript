// Escreva um programa que solicite ao usuário uma frase e exiba a quantidade de vogais na frase.

// Solicita uma frase ao usuário
let frase = prompt('Digite uma frase')
// Define as vogais dentro de uma array
let vogais = ['a','e','i','o','u']
// Define a quantidade inicial em 0
let quantidadeVogais = 0

// Enquanto i for menor que o tamanho da frase
for(let i = 0; i < frase.length; i++){
    // Variável caractere (posição da letra(frase[i]))
    let caractere = frase[i].toLowerCase()

    // Se na variável caractere tiver alguma vogal
    if(vogais.includes(caractere)){
        // adicione +1
        quantidadeVogais++
    }
}

document.querySelector('p').innerHTML = `A quantidade de vogais na frase é: ${quantidadeVogais}`
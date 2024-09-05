// Escreva um programa que leia um vetor de números inteiros e exiba a média dos elementos.

let quantidade = Number(prompt('Digite a quantidade de elementos do vetor:'))

// Cria um vetor vazio
let vetor = []

// Solicita o usuário para adicionar um número dentro do vetor
for(let i = 0; i < quantidade; i++){
    const numero = Number(prompt(`Digite o elemento ${i+1}`))
    vetor.push(numero)
}

// Calcula a soma dos elementos do vetor
let soma = 0
for(let i = 0; i < vetor.length; i++){
    soma += vetor[i]
}

// Calcula a média do vetor
const media = soma / vetor.length

document.querySelector('p').innerHTML = `A média dos elementos do vetor é: ${media}`
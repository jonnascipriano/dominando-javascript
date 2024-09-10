// Escreva um programa que leia um vetor de números inteiros e exiba a média dos elementos.

let quantidade = prompt('Digite a quantidade de elementos do vetor:')

// Cria um vetor vazio
const vetor = []

for(let i = 0; i < quantidade; i++){
    let num = Number(prompt(`Digite o elemento ${i+1}`))
    vetor.push(num)
}

let soma = 0
for(let i = 0; i < vetor.length; i++){
    soma += vetor[i]
}

const media = soma / vetor.length

document.querySelector('p').innerHTML = `A média dos elementos do vetor é: ${media}`
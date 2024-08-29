// Crie um programa que leia um vetor de números inteiros e exiba a soma de todos os elementos.

let quantidade = prompt('Digite a quantidade de elementos do vetor:')

// Cria um vetor vazio
const vetor = []

// Preenche o vetor com os números informados pelo usuário
for(let i = 0; i < quantidade; i++){
    const num = Number(prompt(`Digite o elemento ${i+1}:`))
    vetor.push(num)
}

// Calcula a soma dos elementos do vetor
let soma = 0
for (let i = 0; i < vetor.length; i++){
    soma += vetor[i]
}

// Exibe a soma dos elementos
document.querySelector('p').innerHTML = `A soma dos elementos é: ${soma}`
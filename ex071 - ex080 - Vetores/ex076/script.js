// Escreva um programa que leia um vetor de números inteiros e exiba os elementos na ordem inversa.

const quantidade = Number(prompt('Digite a quantidade de elementos do vetor'))

const vetor = []

for(let i = 0; i < quantidade; i++){
    const numero = Number(prompt(`Digite o elemento ${i+1} do vetor`))
    vetor.push(numero)
}

const vetorInverso = []

for(let i = quantidade - 1;i >= 0; i--){
    vetorInverso.push(vetor[i])
}

document.querySelector('p').innerHTML = `Vetor original: ${vetor}<br>`
document.querySelector('p').innerHTML += `Vetor inverso: ${vetorInverso}`
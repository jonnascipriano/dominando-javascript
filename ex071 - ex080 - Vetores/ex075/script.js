// Faça um programa que leia um vetor de números inteiros e verifique se ele está em ordem crescente.

const quantidade = Number(prompt('Digite a quantidade de elementos do vetor'))

const vetor = []

for(let i = 0; i < quantidade; i++){
    const numero = Number(prompt(`Digite o elemento ${i+1} do vetor`))
    vetor.push(numero)
}

emOrdemCrescente = true

for(let i = 0; i < quantidade - 1; i++){
    if(vetor[i] > vetor[i+1]){
        emOrdemCrescente = false
        break
    }
}

if(emOrdemCrescente){
    document.querySelector('p').innerHTML = `${vetor}<br>`
    document.querySelector('p').innerHTML += `O vetor está em ordem crescente.`
} else {
    document.querySelector('p').innerHTML = `${vetor}<br>`
    document.querySelector('p').innerHTML += `O vetor não está em ordem crescente.`
}
// Crie um programa que leia um vetor de números inteiros e exiba a soma de todos os elementos.

let quantidade = prompt('Digite a quantidade de elementos do vetor:')

// Cria um vetor vazio
const vetor = []

// Preenche o vetor com os números informados pelo usuário
for(let i = 0; i < quantidade; i++){
    let num = Number(prompt(`Digite o elemento ${i+1}`))
        vetor.push(num);
    
}

// Inicializa a variável com o primeiro elemento do vetor.
let maior = vetor[0]


// Percorre pelo vetor e compara com o maior valor
for(let i = 0; i < vetor.length; i++){
    if(vetor[i] > maior){
        maior = vetor[i]
    }
}

document.querySelector('p').innerHTML = `O maior elemento do vetor é ${maior}`
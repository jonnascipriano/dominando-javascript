// Crie um programa que leia dois vetores de números inteiros com o mesmo tamanho e exiba um novo vetor com a soma dos elementos correspondentes dos dois vetores.

const quantidade = Number(prompt('Digite a quantidade de elementos dos vetores:'))

// Cria dois vetores vazios
const vetor1 = []
const vetor2 = []

// Preenche os vetores com os números informados pelo usuário
for(let i = 0; i < quantidade; i++){
    const numero1 = Number(prompt(`Digite o elemento ${i+1} do vetor 1:`))
    vetor1.push(numero1)

    const numero2 = Number(prompt(`Digite o elemento ${i+1} do vetor 2`))
    vetor2.push(numero2)
}

// Cria um vetor para armazenar a soma dos elementos correspondentes dos dois vetores
const vetorSoma = []

// Calcula a soma dos elementos correspondentes dos dois vetores

for(let i = 0; i < quantidade; i++){
    const soma = vetor1[i] + vetor2[i]
    vetorSoma.push(soma)
}

document.querySelector('p').innerHTML = `Vetor com a soma dos elementos correspondentes ${vetorSoma}`
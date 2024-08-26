// Escreva um programa que receba um nome completo e exiba somente o primeiro nome.

let frase = prompt('Digite uma frase:')

// Inicializa uma variável para armazenar a quantidade de espaços
let quantidadeEspacos = 0

for(let i = 0; i < frase.length; i++){
    if(frase[i] === " "){
        quantidadeEspacos++
    }
}

document.querySelector('p').innerHTML = `A frase possui ${quantidadeEspacos} espaços em branco`
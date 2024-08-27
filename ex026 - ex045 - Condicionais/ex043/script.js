// Escreva um programa que solicite um número inteiro e verifique se é divisível por 3 e por 5 ao mesmo tempo.


let numero = parseInt(prompt('Digite um número inteiro.'))

if (numero % 3 === 0 && numero % 5 === 0){
    document.querySelector('p').innerHTML = `O número ${numero} é divisível por 3 e por 5.`
} else {
    document.querySelector('p').innerHTML = `O número ${numero} não é divisível por 3 e por 5.`
}
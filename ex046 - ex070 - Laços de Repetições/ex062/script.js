// Escreva um programa que leia números do usuário até que seja digitado zero, e exiba a média dos números digitados.

let soma = 0
let count = 0
let number

do{
    number = Number(prompt('Digite um número (ou zero para sair)'))
    if(number !== 0){
        soma += number
        count++
    }
} while (number !== 0)

    if( count !== 0){
        let average = soma / count
        document.querySelector('p').innerHTML += `A média dos números digitados é: ${average}`
    } else {
        document.querySelector('p').innerHTML += `Nenhum número foi digitado.`
    }
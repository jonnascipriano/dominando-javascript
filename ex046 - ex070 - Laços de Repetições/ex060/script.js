// Escreva um programa que leia números do usuário até que seja digitado um número negativo, e exiba a soma dos números positivos.

let number
let sum = 0

do {
    number = Number(prompt('Digite um número (negativo para sair'))

    if(number >= 0){
        sum += number
    }
} while
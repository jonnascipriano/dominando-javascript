// Escreva um programa que solicite ao usuário uma lista de números, até o usuário digitar o número zero, e exiba o maior e o menor número da lista.

let min = Infinity
let max = -Infinity
let number

// Faça
do{

    number = Number(prompt('Digite um número(ou zero para encerrar)'))
    // Se a variavel number for diferente de 0
    if(number !==0){
        // Se number for menor que min
        if(number < min){
            // Defina min = number
            min = number
        }
        // Se number for maior que max
        if(number > max){
            // Defina max = number
            max = number
        }
    }
    // Enquanto number for diferente de 0
} while (number !==0)

    if(min !== Infinity && max !== -Infinity){
        document.querySelector('p').innerHTML = `O menor número é ${min}<br>`
        document.querySelector('p').innerHTML += `O maior número é ${max}`
    } else {
        document.querySelector('p').innerHTML = `Nenhum número foi digitado.`
    }
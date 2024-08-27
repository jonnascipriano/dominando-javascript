// Faça um programa que leia três números, e informe se a soma deles é divisível por 5 ou não.

let num1 = Number(prompt('Digite o primeiro número'))
let num2 = Number(prompt('Digite o segundo número'))
let num3 = Number(prompt('Digite o terceiro número'))

let soma = num1 + num2 + num3

// Verifica se a soma é divisível por 5
if (soma % 5 === 0){
    document.querySelector('p').innerHTML = `A soma dos números (${num1} + ${num2} + ${num3} = ${soma}) é divisível por 5.`
} else {
    document.querySelector('p').innerHTML = `A soma dos números (${num1} + ${num2} + ${num3} = ${soma}) não é divisível por 5.`
}
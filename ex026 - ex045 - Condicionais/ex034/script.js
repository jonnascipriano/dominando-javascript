// Crie um programa que leia três números e verifique se a soma deles é positiva, negativa ou igual a zero

let num1 = Number(prompt('Digite o primeiro número'))
let num2 = Number(prompt('Digite o segundo número'))
let num3 = Number(prompt('Digite o terceiro número'))

let soma = num1 + num2 + num3

// Verifica se a soma é positiva, negativa ou zero.
if (soma > 0){
    document.querySelector('p').innerHTML = `A soma dos números (${num1} + ${num2} + ${num3} = ${soma}) é positiva.`
} else if (soma < 0){
    document.querySelector('p').innerHTML = `A soma dos números (${num1} + ${num2} + ${num3} = ${soma}) é negativa.`
} else {
    document.querySelector('p').innerHTML = `A soma dos números (${num1} + ${num2} + ${num3} = ${soma}) é igual a 0.`
}
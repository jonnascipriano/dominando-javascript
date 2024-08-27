// Faça um programa que leia três números e informe qual é o maior e qual é o menor.

let num1 = Number(prompt('Digite o primeiro número'))
let num2 = Number(prompt('Digite o segundo número'))
let num3 = Number(prompt('Digite o terceiro número'))

let maiorNumero = num1
let menorNumero = num1

// Verifica qual o maior número
if(num2 > maiorNumero){
    maiorNumero = num2
}
if(num3 > maiorNumero){
    maiorNumero = num3
}

// Verifica qual o menor número
if(num2 < menorNumero){
    menorNumero = num2
}
if(num3 < menorNumero){
    menorNumero = num3
}

document.querySelector('p').innerHTML = `O maior número é ${maiorNumero}<br>`
document.querySelector('p').innerHTML += `O menor número é ${menorNumero}`
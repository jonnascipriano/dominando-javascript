// Faça um programa que leia dois números e informe qual é o maior.

let num1 = Number(prompt('Digite o primeiro número'))
let num2 = Number(prompt('Digite o segundo número'))
let num3 = Number(prompt('Digite o terceiro número'))

let maiorNumero = num1

if(num2 > maiorNumero){
    maiorNumero = num2
}

if(num3 > maiorNumero){
    maiorNumero = num3
}

document.querySelector('p').innerHTML = `O maior número é ${maiorNumero}`
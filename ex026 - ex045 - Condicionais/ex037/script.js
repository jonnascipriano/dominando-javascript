// Faça um programa que leia três números e informe se eles podem ser os lados de um triângulo (a soma de dois lados deve ser sempre maior que o terceiro lado).

let lado1 = Number(prompt('Digite o primeiro lado do triângulo.'))
let lado2 = Number(prompt('Digite o segundo lado do triângulo.'))
let lado3 = Number(prompt('Digite o terceiro lado do triângulo.'))


if(lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1){
    document.querySelector('p').innerHTML = `Os números podem ser os lados de um triângulo.`
} else {
    document.querySelector('p').innerHTML = `Os números não podem formar um triângulo.`
}
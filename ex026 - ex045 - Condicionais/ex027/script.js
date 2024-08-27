// Faça um programa que leia dois números e informe qual é o maior.

let num1 = Number(prompt('Digite o primeiro número'))
let num2 = Number(prompt('Digite o segundo número'))

if(num1 > num2){
    document.querySelector('p').innerHTML = `O primeiro número é maior: ${num1}`
} else if (num2 > num1){
    document.querySelector('p').innerHTML = `O segundo número é maior: ${num2}`
} else {
    document.querySelector('p').innerHTML = `Os números são iguais.`
}
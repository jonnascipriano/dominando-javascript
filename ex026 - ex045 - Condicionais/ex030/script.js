// Faça um programa que leia dois números e informe qual é o maior.

let num = Number(prompt('Digite um número'))

if(num > 0){
    document.querySelector('p').innerHTML = `O número é positivo.`
} else if (num < 0) {
    document.querySelector('p').innerHTML = `O número é negativo.`
} else if (num === 0) {
    document.querySelector('p').innerHTML = `O número é zero.`
} else {
    document.querySelector('p').innerHTML = `Digite um número válido.`
}
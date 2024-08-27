// Faça um programa que leia dois números e informe qual é o maior.

let num = Number(prompt('Digite um número'))

if(num % 2 === 0){
    document.querySelector('p').innerHTML = `O número ${num} é par`
} else {
    document.querySelector('p').innerHTML = `O número ${num} é impar`
}
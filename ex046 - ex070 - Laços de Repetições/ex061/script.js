// Faça um programa que solicite ao usuário um número e exiba a sequência de Fibonacci até o número informado utilizando um laço de repetição.

let number = Number(prompt('Digite um número'))
let prevNumber = 0
let currentNumber = 1

document.querySelector('p').innerHTML = `Sequência de Fibonacci até ${number}:<br>`

while(currentNumber <= number){
    document.querySelector('p').innerHTML += `${currentNumber}<br>`
    let nextNumber = prevNumber + currentNumber
    prevNumber = currentNumber
    currentNumber = nextNumber
}
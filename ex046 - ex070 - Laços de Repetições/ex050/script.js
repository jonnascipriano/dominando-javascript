// Crie um programa que solicite ao usuário um número e exiba a tabuada desse número utilizando um laço de repetição.

let num = Number(prompt('Digite um número'))

for(let i = 1; i <= 10; i++){
    let resultado = num * i
    document.querySelector('p').innerHTML += `${i} x ${num} = ${resultado}<br>`
}
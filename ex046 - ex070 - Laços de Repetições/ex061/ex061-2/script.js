// Faça um programa que solicite ao usuário um número e exiba a sequência de Fibonacci até o número informado utilizando um laço de repetição.

let number = Number(prompt('Digite um número'))
let sequence = [0,1]

while (sequence[sequence.length-1]<=number){
    let nextNumber = sequence[sequence.length - 1] + sequence[sequence.length-2]
    sequence.push(nextNumber)
}

document.querySelector('p').innerHTML = `Sequência de Fibonacci até ${number}<br>`

for (let i = 0; i<sequence.length; i++){
document.querySelector('p').innerHTML += `${sequence[i]}<br>`
}
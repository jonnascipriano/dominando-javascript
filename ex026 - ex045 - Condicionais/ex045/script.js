// Crie um programa que solicite a idade de uma pessoa e exiba se ela é criança (0-12 anos), adolescente (13-17 anos), adulto (18-59 anos) ou idoso (60 anos ou mais).


let num1 = Number(prompt('Digite o primeiro número.'))
let num2 = Number(prompt('Digite o segundo número.'))

if (num1 % num2 === 0){
    document.querySelector('p').innerHTML = `${num1} é divisível por ${num2}`
} else {
    document.querySelector('p').innerHTML = `${num1} não é divisível por ${num2}`
}
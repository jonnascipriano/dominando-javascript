// Faça um programa que solicite a idade de uma pessoa e exiba se ela é maior de idade ou não.

let idade = Number(prompt('Digite a idade'))

if(idade >= 18){
    document.querySelector('p').innerHTML = `Maior de idade`
} else {
    document.querySelector('p').innerHTML = `Menor de idade.`
}
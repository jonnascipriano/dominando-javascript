// Faça um programa que leia o ano de nascimento de uma pessoa e informe se ela está apta a votar (idade maior ou igual a 16 anos).

let anoAtual = new Date().getFullYear()
let anoNascimento = Number(prompt('Digite o ano de nascimento.'))

let idade = anoAtual - anoNascimento

if(idade >= 16){
    document.querySelector('p').innerHTML = `Você está apto(a) a votar. (${idade} anos.)`
} else {
    document.querySelector('p').innerHTML = `Você ainda não está apto(a) a votar. (${idade} anos.)`
}
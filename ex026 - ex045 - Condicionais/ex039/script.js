// Faça um programa que leia a idade de uma pessoa e informe se ela não está apta a votar (idade inferior a 16 anos), se está apta a votar, porém não é obrigada (16, 17 anos, ou idade igual ou superior a 70 anos), ou se é obrigada (18 a 69 anos).

let anoAtual = new Date().getFullYear()
let anoNascimento = Number(prompt('Digite o ano de nascimento.'))

let idade = anoAtual - anoNascimento

if(idade < 16){
    document.querySelector('p').innerHTML = `Você ainda não está apto(a) a votar. (${idade} anos.)`
} else if (idade >= 16 && idade < 18 || idade >= 70){
    document.querySelector('p').innerHTML = `Você está apto(a) a votar, porém não é obrigatório. (${idade} anos.)`
} else {
    document.querySelector('p').innerHTML = `Você está apto(a) a votar (obrigatório). (${idade} anos.)`
}
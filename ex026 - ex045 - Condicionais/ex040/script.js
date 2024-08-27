// Faça um programa que leia três notas de um aluno e informe se ele foi aprovado (nota final maior ou igual a 7), reprovado (nota final menor que 4) ou ficou de recuperação (nota final entre 4 e 7).

let nota1 = Number(prompt('Digite a primeira nota.'))
let nota2 = Number(prompt('Digite a segunda nota.'))
let nota3 = Number(prompt('Digite a terceira nota.'))

let media = (nota1 + nota2 + nota3) / 3

if(media >= 7){
    document.querySelector('p').innerHTML = `Aluno aprovado. Média ${media.toFixed(2)}`
} else if (media < 4){
    document.querySelector('p').innerHTML = `Aluno reprovado. Média ${media.toFixed(2)}`
} else {
    document.querySelector('p').innerHTML = `Aluno em recuperação. Média ${media.toFixed(2)}`
}
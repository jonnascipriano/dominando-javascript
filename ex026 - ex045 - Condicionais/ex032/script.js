// Faça um programa que leia as notas de duas provas, calcule a média aritmética simples, e informe se o aluno foi aprovado (média maior ou igual a 6) ou reprovado (média menor que 6).

let nota1 = Number(prompt('Digite a nota da primeira prova.'))
let nota2 = Number(prompt('Digite a nota da segunda prova.'))
let media = (nota1 + nota2) / 2

// Verifica se o aluno passou na média.
if(media >= 6){
    document.querySelector('p').innerHTML += `O aluno foi <mark>aprovado</mark> com média ${media.toFixed(2)}.`
} else if (media < 6) {
    document.querySelector('p').innerHTML += `O aluno foi <mark>reprovado</mark> com média ${media.toFixed(2)}.`
} else {
    document.querySelector('p').innerHTML += `Digite um valor válido.`
}
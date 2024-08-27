// Faça um programa que leia as notas de duas provas e informe se o aluno foi aprovado (nota maior ou igual a 6) ou reprovado (nota menor que 6) em cada uma das provas.

let nota1 = Number(prompt('Digite a nota da primeira prova.'))
let nota2 = Number(prompt('Digite a nota da segunda prova.'))

// Verifica se o aluno passou na primeira prova.
if(nota1 >= 6){
    document.querySelector('p').innerHTML += `O aluno foi <mark>aprovado</mark> na primeira prova.<br>`
} else if (nota1 < 6) {
    document.querySelector('p').innerHTML += `O aluno foi <mark>reprovado</mark> na primeira prova.<br>`
} else {
    document.querySelector('p').innerHTML += `Digite um valor válido.`
}

// Verifica se o aluno passou na segunda prova.
if(nota2 >= 6){
    document.querySelector('p').innerHTML += `O aluno foi <mark>aprovado</mark> na segunda prova.<br>`
} else if (nota2 < 6) {
    document.querySelector('p').innerHTML += `O aluno foi <mark>reprovado</mark> na segunda prova.<br>`
} else {
    document.querySelector('p').innerHTML += `Digite um valor válido.`
}
// Faça um programa que solicite o nome de um dia da semana e exiba se é um dia útil (segunda a sexta-feira) ou um dia de fim de semana (sábado e domingo).

let dia = prompt('Digite o nome de um dia da semana:').toLowerCase()

if(dia === "sábado" || dia === "domingo"){
    document.querySelector('p').innerHTML = `É um dia de fim de semana!`
} else if (dia === "segunda" || dia === "terça" || dia === "quarta" || dia === "quinta" || dia === "sexta"){
    document.querySelector('p').innerHTML = `É um dia útil!`
} else {
    document.querySelector('p').innerHTML = `Dia inválido!`
}
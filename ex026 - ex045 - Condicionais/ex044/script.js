// Crie um programa que solicite a idade de uma pessoa e exiba se ela é criança (0-12 anos), adolescente (13-17 anos), adulto (18-59 anos) ou idoso (60 anos ou mais).


let idade = Number(prompt('Digite a sua idade.'))

if (idade >= 0 && idade <= 12){
    document.querySelector('p').innerHTML = `Você é uma criança.`
} else if (idade >= 13 && idade <= 17){
    document.querySelector('p').innerHTML = `Você é um(a) adolescente.`
} else if (idade >= 18 && idade <= 59){
    document.querySelector('p').innerHTML = `Você é um adulto.`
} else {
    document.querySelector('p').innerHTML = `Você é um idoso.`
}
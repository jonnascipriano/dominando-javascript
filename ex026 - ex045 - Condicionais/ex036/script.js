// Faça um programa que leia a idade de três pessoas e informe se alguma delas é maior de idade (idade maior ou igual a 18), se todas são maiores de idade, ou se todas são menores de idade (idade inferior a 18 anos).

let idade1 = Number(prompt('Digite a idade da primeira pessoa.'))
let idade2 = Number(prompt('Digite a idade da segunda pessoa.'))
let idade3 = Number(prompt('Digite a idade da terceira pessoa.'))


if(idade1 >= 18 && idade2 >= 18 && idade3 >=18){
    document.querySelector('p').innerHTML = `Todos são maiores de idade.`
} else if(idade1 < 18 && idade2 < 18 && idade3 < 18){
    document.querySelector('p').innerHTML = `Todos são menores de idade.`
} else {
    document.querySelector('p').innerHTML = `Algumas pessoas são maiores de idade.`
}
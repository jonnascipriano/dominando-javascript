// Escreva um programa que solicite a altura e o peso de uma pessoa e calcule o seu índice de massa corporal (IMC), exibindo a categoria correspondente (abaixo do peso, peso normal, sobrepeso, obesidade, obesidade grave).

let altura = Number(prompt('Digite a altura em metros:'))
let peso = Number(prompt('Digite o peso em kg'))

// Calcula o IMC
let imc = peso / Math.pow(altura, 2)

if(imc < 18.5){
    document.querySelector('p').innerHTML = `Seu IMC é: ${imc.toFixed(2)}<br>`
    document.querySelector('p').innerHTML += `Categoria: Abaixo do peso.`
} else if (imc < 25){
    document.querySelector('p').innerHTML = `Seu IMC é: ${imc.toFixed(2)}<br>`
    document.querySelector('p').innerHTML += `Categoria: Peso normal.`
} else if (imc < 30){
    document.querySelector('p').innerHTML = `Seu IMC é: ${imc.toFixed(2)}<br>`
    document.querySelector('p').innerHTML += `Categoria: Sobrepeso.`
} else if (imc < 35){
    document.querySelector('p').innerHTML = `Seu IMC é: ${imc.toFixed(2)}<br>`
    document.querySelector('p').innerHTML += `Categoria: Obesidade.`
} else {
    document.querySelector('p').innerHTML = `Seu IMC é: ${imc.toFixed(2)}<br>`
    document.querySelector('p').innerHTML += `Categoria: Obesidade grave.`
}
// Escrever um programa que calcule o IMC de um indivíduo, utilizando a fórmula IMC = peso / altura²

let peso = parseFloat(prompt('Digite o peso em kg.'))
let altura = parseFloat(prompt('Digite a altura em metros. (Obs.: Troque a vírgula pelo ponto.)'))

let imc = peso / (altura * altura)

document.querySelector('p').innerHTML = `Seu IMC é: ${imc.toFixed(2)}`
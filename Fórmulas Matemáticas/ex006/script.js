// Escrever um programa que calcule e exiba o perímetro de um círculo, solicitando o raio ao usuário

let raio = parseFloat(prompt('Digite o raio do círculo'))

// Calculo do perímetro do círculo = 2π.R
let perimetro = 2*Math.PI*raio

document.querySelector('p').innerHTML = `O perímetro do círculo é: ${perimetro.toFixed(2)}`
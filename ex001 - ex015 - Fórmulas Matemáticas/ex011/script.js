// Escrever um programa que calcule a velocidade média de um objeto, utilizando a fórmula v = Δs/Δt, onde v é a velocidade média, Δs é a variação de espaço e Δt é a variação de tempo

let variacaoEspaco = parseFloat(prompt('Digite a variação de espaço (Δs)'))
let variacaoTempo = parseFloat(prompt('Digite a variação de tempo (Δt)'))

let velocidadeMedia = variacaoEspaco / variacaoTempo

document.querySelector('p').innerHTML = `A velocidade média do objeto é: ${velocidadeMedia}`
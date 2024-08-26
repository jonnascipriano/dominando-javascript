// Escrever um programa que calcule a energia cinética de um objeto em movimento, utilizando a fórmula E = (mv²) / 2, onde E é a energia cinética, m é a massa do objeto e v é a velocidade

let massa = parseFloat(prompt('Digite a massa do objeto (m)'))
let velocidade = parseFloat(prompt('Digite a velocidade do objeto (v)'))

let energiaCinetica = (massa * Math.pow(velocidade, 2)) / 2

document.querySelector('p').innerHTML = `A energia cinética do objeto é: ${energiaCinetica}`
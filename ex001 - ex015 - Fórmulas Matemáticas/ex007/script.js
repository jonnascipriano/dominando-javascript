// Escrever um programa que calcule a área de um círculo a partir do raio, utilizando a fórmula A = πr²

let raio = parseFloat(prompt('Digite o raio do círculo'))

let area = Math.PI * Math.pow(raio, 2)

document.querySelector('p').innerHTML = `A área do círculo é: ${area.toFixed(2)}`
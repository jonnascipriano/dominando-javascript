// Escrever um programa que calcule o perímetro e a área de um retângulo, utilizando as fórmulas P = 2(l+c) e A = lc, onde l é a largura e c é o comprimento

let largura = parseFloat(prompt('Digite a largura do retângulo'))
let comprimento = parseFloat(prompt('Digite o comprimento do retângulo'))

// Perímetro
let perimetro = 2*(largura + comprimento)

// Área
let area = largura * comprimento

document.querySelector('p').innerHTML = `O perímetro do retângulo é: ${perimetro}<br>`
document.querySelector('p').innerHTML += `A área do retângulo é: ${area}`
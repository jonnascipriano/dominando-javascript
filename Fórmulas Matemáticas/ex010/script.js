// Escrever um programa que calcule o perímetro e a área de um triângulo, utilizando as fórmulas P = a + b + c e A = (b*h)/2, onde a, b e c são os lados do triângulo e h é a altura relativa ao lado b
let ladoA = parseFloat(prompt('Digite o valor do lado A'))
let ladoB = parseFloat(prompt('Digite o valor do lado B'))
let ladoC = parseFloat(prompt('Digite o valor do lado C'))
let altura = parseFloat(prompt('Digite o valor da altura do triângulo (lado B)'))

// Perímetro
let perimetro = ladoA + ladoB + ladoC

// Área
let area = (ladoB * altura) / 2

document.querySelector('p').innerHTML = `O perímetro do triângulo é: ${perimetro}<br>`
document.querySelector('p').innerHTML += `A área do triângulo é: ${area}`
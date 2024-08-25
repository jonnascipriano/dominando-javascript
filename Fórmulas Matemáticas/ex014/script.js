// Escrever um programa que leia a posição x e y de dois pontos no plano cartesiano, e calcule a distância entre ambos.

// Primeiro ponto
let x1 = parseFloat(prompt('Digite a coordenada x do primeiro ponto:'))
let y1 = parseFloat(prompt('Digite a coordenada y do primeiro ponto:'))

// Segundo Ponto
let x2 = parseFloat(prompt('Digite a coordenada x do segundo ponto:'))
let y2 = parseFloat(prompt('Digite a coordenada y do segundo ponto:'))

// Diferença entre as coordenadas x e y
let difX = x2 - x1
let difY = y2 - y1

// Distância Euclidiana
let distancia = Math.sqrt(Math.pow(difX, 2) + Math.pow(difY, 2))

document.querySelector('p').innerHTML = `A distância entre os pontos é: ${distancia}`
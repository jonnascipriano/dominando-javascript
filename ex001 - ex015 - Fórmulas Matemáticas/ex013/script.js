// Escrever um programa que calcule o trabalho realizado por uma força que atua sobre um objeto, utilizando a fórmula T = F * d, onde T é o trabalho, F é a força aplicada e d é a distância percorrida pelo objeto.

let forca = parseFloat(prompt('Digite a força aplicada (F)'))
let distancia = parseFloat(prompt('Digite a distância percorrida (d)'))

let trabalho = forca * distancia

document.querySelector('p').innerHTML = `O trabalho relizado pela força é: ${trabalho}`
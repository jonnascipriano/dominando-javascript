// Escrever um programa que solicite ao usuário o valor do raio de uma esfera e calcule e exiba o seu volume.

let raio = parseFloat(prompt('Digite o valor do raio da esfera'))


let volume = (4 * Math.PI * Math.pow(raio, 3)) / 3
// Forma alternativa
// let volume = (4/3) * Math.PI * Math.pow(raio,3)

document.querySelector('p').innerHTML = `O volume da esfera é: ${volume.toFixed(2)}`
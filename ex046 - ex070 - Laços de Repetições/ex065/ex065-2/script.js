// Escreva um programa que solicite ao usuário uma frase e exiba a frase de trás para frente

let frase = prompt('Digite uma frase')
let fraseInvertida = frase.split('').reverse().join()


document.querySelector('p').innerHTML = `${frase}<br>`
document.querySelector('p').innerHTML += fraseInvertida
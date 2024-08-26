// Escreva um programa que receba um nome completo e exiba somente o primeiro nome.

let nomeCompleto = prompt('Digite o seu nome completo:')

// Divide o nome completo em partes, utilizando o espaço como separador
let partesNome = nomeCompleto.split(" ")

// Obtém o primeiro nome que será a primeira parte do nome completo
let primeiroNome = partesNome[0]


document.querySelector('p').innerHTML = `O primeiro nome é: ${primeiroNome}`
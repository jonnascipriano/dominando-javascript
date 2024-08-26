// Escreva um programa que receba um nome completo e exiba o sobrenome (último nome) primeiro.

let nomeCompleto = prompt('Digite o seu nome completo:')

// Divide o nome completo em partes usando o espaço como separador
let partesNome = nomeCompleto.split(' ')

// Obtém o último elemento do array, que será o sobrenome
let sobrenome = partesNome.pop()

// Reorganiza a ordem dos elementos para colocar o sobrenome primeiro
partesNome.unshift(sobrenome)

// Junta as partes do nome em uma única string separada por espaços
let nomeInvertido = partesNome.join(' ')


document.querySelector('p').innerHTML = `Nome invertido: ${nomeInvertido}`
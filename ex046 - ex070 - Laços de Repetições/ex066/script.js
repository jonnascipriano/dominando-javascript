// Escreva um programa que leia uma sequência de caracteres e indique se a mesma é um palíndromo ou não.

const sequencia = prompt('Digite uma sequência de caracteres:')

// Removendo espaços em branco e convertendo para letras minúsculas
const texto = sequencia.replace(/\s/g, '').toLowerCase()

// Verificando se a sequência é um palíndromo
let ePalindromo = true
for (let i = 0; i < texto.length / 2; i++){
    if(texto[i] !== texto[texto.length-1-i]){
        ePalindromo = false
        break
    }
}

// Exibindo o resultado
if(ePalindromo){
    document.querySelector('p').innerHTML = `A sequência é um palíndromo`
} else {
    document.querySelector('p').innerHTML = `A sequência não é um palíndromo`
}
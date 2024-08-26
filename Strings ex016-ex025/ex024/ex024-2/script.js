// Crie um programa que leia uma palavra e exiba a quantidade de vogais presentes na mesma.

let palavra = prompt('Digite uma palavra:')

// Utiliza uma expressão regular para encontrar todas as vogais na palavra
//O modificador g indica que queremos encontrar todas as ocorrências e o modificador i torna a busca case-insensitive, considerando tanto letras maiúsculas quanto minúsculas.
let vogais = palavra.match(/[aeiou]/gi)

// Verifica se foram encontradas vogais e obtém a quantidade
let quantidadeVogais = vogais ? vogais.length : 0

document.querySelector('p').innerHTML = `A palavra possui ${quantidadeVogais} vogais.`
// Escreva um programa que solicite ao usuário uma frase e exiba a quantidade de vogais na frase.

// Solicita uma frase ao usuário
const frase = prompt('Digite uma frase')
// O método match() retorna uma correspondência entre uma string com uma expressão regular.
// Se o sinalizador g for usado, todos os resultados correspondentes à expressão regular serão retornados, mas a captura de grupos não.
const vogais = frase.match(/[aeiou]/gi) // Encontra todas as vogais na frase

if(vogais !== null){
    const quantidadeVogais = vogais.length
    document.querySelector('p').innerHTML = `A quantidade de vogais na frase é ${quantidadeVogais}`
} else {
    document.querySelector('p').innerHTML = `A frase não contém vogais.`
}
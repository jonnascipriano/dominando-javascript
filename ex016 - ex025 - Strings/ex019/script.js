// Escreva um programa que receba um nome e verifique se o mesmo começa com a letra "A".

let nome = prompt('Digite um nome:')

// Verifica se o nome começa com a letra A
if(nome.charAt(0).toUpperCase() === "A"){
    document.querySelector('p').innerHTML = `O nome começa com a letra A`
} else {
    document.querySelector('p').innerHTML = `O nome não começa com a letra A`
}
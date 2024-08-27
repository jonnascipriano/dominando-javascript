// Escreva um programa que exiba todos os números pares de 1 a 100.

let i = 2

// Utilizando um laço de repetição while
while (i <= 100){
    document.querySelector('p').innerHTML += `${i}<br>`
    // console.log(i)
    i += 2
}
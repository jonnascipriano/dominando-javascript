// Faça um programa que calcule e exiba a soma dos números pares de 1 a 100 utilizando um laço de repetição.

let soma = 0

    for(let i = 2; i <= 100; i+=2){
        soma += i
    }
    
    document.querySelector('p').innerHTML += `A soma dos números pares de 1 a 100 é ${soma}`
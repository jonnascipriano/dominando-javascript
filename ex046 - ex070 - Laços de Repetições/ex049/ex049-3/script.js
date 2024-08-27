// Escreva um programa que exiba os números pares de 1 a 50 e os números ímpares de 51 a 100 utilizando um laço de repetição.

let num = 1
while (num <= 100){
    if(num <= 50 && num % 2 === 0){
        document.querySelector('p').innerHTML += `${num} - par<br>`
    } else if (num > 50 && num % 2 !== 0){
        document.querySelector('p').innerHTML += `${num} - impar<br>`
    }
    num++
}
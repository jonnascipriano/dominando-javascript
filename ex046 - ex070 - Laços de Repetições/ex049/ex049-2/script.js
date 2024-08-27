// Escreva um programa que exiba os números pares de 1 a 50 e os números ímpares de 51 a 100 utilizando um laço de repetição.

document.querySelector('p').innerHTML = `Números pares (2 ~ 50)<br>`
for(let i = 2; i <= 50; i+=2){
    document.querySelector('p').innerHTML += `${i}<br>`
}

document.querySelector('p').innerHTML += `<br>Números impares (51 ~ 100)<br>`
for(let j = 51; j <= 100; j+=2){
    document.querySelector('p').innerHTML += `${j}<br>`
}
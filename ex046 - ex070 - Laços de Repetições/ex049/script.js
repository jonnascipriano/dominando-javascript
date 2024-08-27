// Escreva um programa que exiba os números pares de 1 a 50 e os números ímpares de 51 a 100 utilizando um laço de repetição.

let i = 2
document.querySelector('p').innerHTML = `Números pares (2 ~ 50)<br>`
while (i <= 50){
    document.querySelector('p').innerHTML += `${i}<br>`
    i += 2
}

let j = 51
document.querySelector('p').innerHTML += `<br>Números impares (51 ~ 100)<br>`
while(j <= 100){
    document.querySelector('p').innerHTML += `${j}<br>`
    j += 2
}

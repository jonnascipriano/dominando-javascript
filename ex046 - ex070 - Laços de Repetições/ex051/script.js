// Escreva um programa que imprima na tela a tabuada de todos os números de 1 a 10

for (let i = 1; i <= 10; i++){
    for(let j = 1; j <= 10; j++){
        document.querySelector('p').innerHTML += `${i} x ${j} = ${i*j}<br>`
    }
    document.querySelector('p').innerHTML += `<br>`
}
// Crie um programa que exiba os primeiros N números primos, onde N é informado pelo usuário, utilizando um laço de repetição.

let N = Number(prompt('Digite um número'))


document.querySelector('p').innerHTML = `Os primeiros ${N} números primos são:<br>`
let count = 0
let num = 2

while (count < N){
    let isPrimo = true

    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num%i === 0){
            isPrimo = false
            break
        }
    }
    if(isPrimo){
        document.querySelector('p').innerHTML += `${num}<br>`
        count++
    }
    num++
}

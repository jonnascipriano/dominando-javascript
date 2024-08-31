// Crie um programa que exiba os primeiros N números primos, onde N é informado pelo usuário, utilizando um laço de repetição.

let N = Number(prompt('Digite um número'))

// Função para verificar se um número é primo
function isPrimo(num){
    if(num < 2){
        return false
    }
    for(let i = 2; i<=Math.sqrt(num); i++){
        if(num % i === 0){
            return false
        }
    }
    return true
}

// Exibir os primeiros N números primos
document.querySelector('p').innerHTML = `Os primeiros ${N} números primos são:<br>`
let count = 0
let i = 2
while (count < N){
    if(isPrimo(i)){
        document.querySelector('p').innerHTML += `${i}<br>`
        count++
    }
    i++
}
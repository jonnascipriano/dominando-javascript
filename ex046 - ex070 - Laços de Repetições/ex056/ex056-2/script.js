// Escreva um programa que solicite ao usuário um número N e exiba todos os números primos menores que N.

let num = 13
// Number(prompt('Digite um número'))

function isPrimo(num){
    if(num <= 1){
        return false
    }

    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false
        }
    }

    return true
}

document.querySelector('p').innerHTML = `Números primos menores que ${num}:<br>`
for(let i = 2; i < num; i++){
    if(isPrimo(i)){
        document.querySelector('p').innerHTML += `- ${i}<br>`
    }
}

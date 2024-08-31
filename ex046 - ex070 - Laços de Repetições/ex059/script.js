// Escreva um programa que solicite ao usuário dois números A e B e exiba todos os números entre A e B.

let A = Number(prompt('Digite o número A'))
let B = Number(prompt('Digite o número B'))

if( A < B ){
    for(let i = A+1; i < B; i++){
        document.querySelector('p').innerHTML += `${i}<br>`
    }
} else if ( A > B) {
    for(let i = A-1; i > B; i--){
        document.querySelector('p').innerHTML += `${i}<br>`
    }
} else {
    document.querySelector('p').innerHTML = `Os números são iguais, não há números entre eles.`
}
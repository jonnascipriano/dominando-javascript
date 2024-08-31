// Escreva um programa que solicite ao usuário uma lista de números, até o usuário digitar o número zero, e exiba o maior e o menor número da lista.

let numbers = []
let number;

do {
    number = Number(prompt('Digite um número (ou zero para encerrar)'))
    if(number !== 0 && !isNaN(number)){
        numbers.push(number)
    }
} while (number !== 0)
if(numbers.length > 0){
    let min = numbers[0]
    let max = numbers[0]
    for(let i = 1; i < numbers.length; i++){
        let num = numbers[i]
        if( num < min){
            min = num
        }
        if(num > max){
            max = num
        }
    }
    document.querySelector('p').innerHTML = `O menor número é: ${min}<br>`
    document.querySelector('p').innerHTML += `O maior número é: ${max}`
} else {
    document.querySelector('p').innerHTML += `Nenhum número foi digitado.`
}
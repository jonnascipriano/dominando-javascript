// Escreva um programa que solicite ao usuário um número N e exiba todos os números primos menores que N.

let num = Number(prompt('Digite um número'))


document.querySelector('p').innerHTML = `Números primos menores que ${num}:<br>`
for(let i = 2; i < num; i++){
    let isPrimo = true
    for(let j = 2; j < i; j++){
        if(i%j === 0){
            isPrimo = false
            break
        }
    }
    if(isPrimo){
        document.querySelector('p').innerHTML += `- ${i}<br>`
    }
}

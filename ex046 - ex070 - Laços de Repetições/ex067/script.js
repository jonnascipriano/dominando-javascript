// Escreva um programa que solicite ao usuário um número e exiba os seus divisores.

// Solicita ao usuário um número
let numero = Number(prompt('Digite um número'))

document.querySelector('p').innerHTML += `Divisores de ${numero}:<br>`

// para( variavel i = 0; enquanto i for menor ou igual ao número solicitado; adicione +1 i)
for(let i = 0; i <= numero; i++){
    // se o resto de i sobre numero for igual a 0(ou seja, for divisível)
    if(numero % i === 0){
        // mostre em tela o resultado
        document.querySelector('p').innerHTML += `${i}<br>`
    }
}
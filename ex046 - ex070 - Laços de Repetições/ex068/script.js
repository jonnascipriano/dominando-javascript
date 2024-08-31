// Faça um programa que determine o menor múltiplo comum (MMC) entre dois números informados pelo usuário.

const numero1 = Number(prompt('Digite o primeiro número'))
const numero2 = Number(prompt('Digite o segundo número'))

// Encontrando o maior número entre os dois
let maiorNumero
if(numero1 > numero2){
    maiorNumero = numero1
} else {
    maiorNumero = numero2
}

// Inicializando o MMC como o maior número
let mmc = maiorNumero

// Loop para encontrar o MMC
while(true){
    if(mmc % numero1 === 0 && mmc % numero2 === 0){
        // Encontrou o MMC
        break
    }
    mmc += maiorNumero
}

document.querySelector('p').innerHTML = `O MMC de ${numero1} e ${numero2} é: ${mmc}`
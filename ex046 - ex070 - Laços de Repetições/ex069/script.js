// Faça um programa que determine o máximo divisor comum (MDC) entre dois números informados pelo usuário.

const numero1 = Number(prompt('Digite o primeiro número'))
const numero2 = Number(prompt('Digite o segundo número'))

// Encontrando o maior número entre os dois
let menorNumero;
if(numero1 < numero2){
    menorNumero = numero1
} else {
    menorNumero = numero2
}

// Inicializando o MDC com 1 (valor mínimo)
let mdc = 1

// Loop para encontrar o MDC
for(let i = 1; i<=menorNumero;i++){
    if(numero1 % i ===0 && numero2 % i===0){
        mdc = i
    }
}

document.querySelector('p').innerHTML += `O MDC de ${numero1} e ${numero2} é: ${mdc}`
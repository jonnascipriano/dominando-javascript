// Escreva um programa que solicite ao usuário um número N e exiba a soma de todos os números de 1 a N.

let n = Number(prompt('Digite um número'))

// se n não for um número ou n for menor que 1
if (isNaN(n) || n < 1){
    document.querySelector('p').innerHTML += `Número inválido! Digite um número inteiro positivo.`
    //senao
} else {
    let soma = 0
    // para i = 0, enquanto i for menor ou igual a n, incremente +1 no i
    for(let i = 0; i <= n; i++){
        // adiciona +1 no soma
        soma += i
    }
    document.querySelector('p').innerHTML += `A soma dos números de 1 a ${n} é ${soma}`
}
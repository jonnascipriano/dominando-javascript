let N = 9
// Number(prompt('Digite um número'))

// Calcular o fatorial de N
let fatorial = 1

for(let i = 2; i<=N; i++){
    fatorial *= i
}

document.querySelector('p').innerHTML = `O fatorial de ${N} é: ${fatorial}`
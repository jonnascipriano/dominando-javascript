// Escreva um programa que solicite ao usuário um número N e diga se o mesmo é primo ou não.

let num = Number(prompt('Digite um número'))

let primo = true

for(let i = 2; i <= num/2; i++){
    if(num % i === 0){
        primo = false
        break;
    }
}

if(primo){
    document.querySelector('p').innerHTML = `${num} é número primo`
} else {
    document.querySelector('p').innerHTML = `${num} não é número primo`
}
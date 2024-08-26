// Crie um programa que leia duas palavras e verifique se a segunda palavra é um anagrama da primeira.

let palavra1 = prompt('Digite a primeira palavra:')
let palavra2 = prompt('Digite a segunda palavra:')

// Transforma as palavras em minúsculo
palavra1 = palavra1.toLowerCase()
palavra2 = palavra2.toLowerCase()

// Transforma as palavras em arrays
let arrayPalavra1 = palavra1.split("")
let arrayPalavra2 = palavra2.split("")


// Ordena os arrays de caracteres em ordem alfabética
arrayPalavra1.sort()
arrayPalavra2.sort()


if(arrayPalavra1.join("") === arrayPalavra2.join("")){
    document.querySelector('p').innerHTML = `A segunda palavra é um anagrama da primeira`
} else {
    document.querySelector('p').innerHTML = `A segunda palavra não é um anagrama da primeira`
}
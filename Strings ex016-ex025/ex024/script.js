// Crie um programa que leia uma palavra e exiba a quantidade de vogais presentes na mesma.

let palavra = prompt('Digite uma palavra:')

let quantidadeVogais = 0

for(let i = 0; i < palavra.length; i++){
    if(palavra[i] === "a" || 
        palavra[i] === "e" ||
        palavra[i] === "i" ||
        palavra[i] === "o" ||
        palavra[i] === "u"
    ){
        quantidadeVogais++
    }
}

document.querySelector('p').innerHTML = `A palavra possui ${quantidadeVogais} vogais.`
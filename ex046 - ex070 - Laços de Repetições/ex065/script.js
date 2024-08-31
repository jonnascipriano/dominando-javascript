// Escreva um programa que solicite ao usuário uma frase e exiba a frase de trás para frente

let frase = prompt('Digite uma frase')
let fraseInvertida = ''

// para(i = tamanho da frase - 1; enquanto i for maior ou igual a 0; tire -1 i)
for(let i = frase.length-1; i >= 0; i--){
    // adicione o elemento i na frase na variavel fraseInvertida
    fraseInvertida += frase[i]
}

document.querySelector('p').innerHTML = `Frase invertida: ${fraseInvertida}`
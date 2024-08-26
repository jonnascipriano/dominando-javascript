// Faça um programa que receba uma palavra e exiba cada letra separadamente

let palavra =  prompt('Digite uma palavra')

// Para(variavel i = 0; enquanto i for melhor que o tamanho da palavra; acrescente +1 i)
for(let i = 0; i < palavra.length; i++){
    document.querySelector('p').innerHTML = `Abra o console (F12)`
    console.log(palavra[i])
}

// Utilizando laço de repetição

let frase = prompt('Digite uma frase:')

// A frase digitada é armazenada na variável frase. Em seguida, utilizamos o método split("") em frase para convertê-la em um array de caracteres. Isso nos permite percorrer cada caractere individualmente.
let caracteres = frase.split("")

// Percorre cada caractere da frase
for(let i = 0; i < caracteres.length; i++){
    // Verifica se o caractere é igual a "a"(maiúsculo ou minúsculo)
    if(caracteres[i].toLowerCase() === "a"){
        // Substitui o caractere por "e"
        caracteres[i] = "e"
    }
}

// Une os caracteres novamente em uma frase
let novaFrase = caracteres.join("")

console.log(frase)
console.log(caracteres)

document.querySelector('p').innerHTML = `Nova frase: ${novaFrase}`
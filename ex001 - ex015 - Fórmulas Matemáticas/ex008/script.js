// Escrever um programa que calcule a equação de segundo grau (ax² + bx + c = 0) utilizando as fórmulas de Bhaskara

let a = parseFloat(prompt('Digite o valor de a'))
let b = parseFloat(prompt('Digite o valor de b'))
let c = parseFloat(prompt('Digite o valor de c'))

// b² - 4ac
let discriminante = Math.pow(b, 2) - 4*a*c

// Verifica o valor do discriminante
if(discriminante > 0){
    // Calcula as raízes reais distintas
    let raiz1 = (-b + Math.sqrt(discriminante)) / (2*a)
    let raiz2 = (-b - Math.sqrt(discriminante)) / (2*a)

    document.querySelector('p').innerHTML = `As raízes reais são: ${raiz1} e ${raiz2}`
} else if (discriminante === 0){
    // Calcula a raiz real única
    let raiz = -b / (2*a)

    document.querySelector('p').innerHTML = `A raiz real é: ${raiz}`
} else {
    document.querySelector('p').innerHTML = `A equação não possui raízes reais.`
}

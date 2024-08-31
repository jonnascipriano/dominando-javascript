// Faça um programa que solicite o CPF do usuário e então faça a validação do mesmo.

let cpfNumeros = prompt('Digite seu CPF').replace(/\D/g, ''); // Remove caracteres não numéricos

if(cpfNumeros.length !== 11){
    document.querySelector('p').innerHTML = `CPF inválido! O CPF deve ter 11 dígitos.`
} else {
    // Verifica se todos os dígitos são iguais.
    if(/^(\d)\1+$/.test(cpfNumeros)){
        document.querySelector('p').innerHTML = `CPF inválido! Todos os dígitos são iguais.`
    } else {
        // Calcula o primeiro dígito verificador
        let soma = 0
        for(let i = 0; i<9;i++){
            soma += Number(cpfNumeros.charAt(i)) * (10-i)
        }
        let digitoVerificador1 = 11 - (soma%11)
        // Verifica o primeiro dígito verificador
        if(digitoVerificador1 > 9){
            digitoVerificador1 = 0
        }
        if(Number(cpfNumeros.charAt(9)) !== digitoVerificador1){
            document.querySelector('p').innerHTML = `CPF inválido! Primeiro dígito verificador incorreto.`
        } else {
            // Calcula o segundo dígito verificador
            soma = 0
            for(let i = 0; i < 10; i++){
                soma += Number(cpfNumeros.charAt(i)) * (11-i)
            }
            let digitoVerificador2 = 11 - (soma%11)
            // Verifica o segundo dígito verificador
            if(digitoVerificador2 > 9){
                digitoVerificador2 = 0
            }
            if(Number(cpfNumeros.charAt(10)) !== digitoVerificador2){
                document.querySelector('p').innerHTML = `CPF inválido! Segundo dígito verificador incorreto.`
            } else {
                document.querySelector('p').innerHTML = `CPF válido!`
            }
        }
    }
} 
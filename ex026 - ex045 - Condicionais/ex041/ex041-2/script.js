// Faça um programa que solicite o nome de um dia da semana e exiba se é um dia útil (segunda a sexta-feira) ou um dia de fim de semana (sábado e domingo).

let dia = prompt('Digite o nome de um dia da semana:').toLowerCase()


// Neste código, utilizamos o método includes() para verificar se a string dia contém as palavras "sábado", "domingo", "segunda", "terça", "quarta", "quinta" ou "sexta". Se a palavra estiver presente na string, a condição correspondente será satisfeita. Assim, a entrada "segunda-feira", por exemplo, seria considerada como um dia útil, ao invés de um dia inválido.
if(dia.includes("sábado") || dia.includes("domingo")){
    document.querySelector('p').innerHTML = `É um dia de fim de semana!`
} else if (dia.includes("segunda") || dia.includes("terça") || dia.includes("quarta") || dia.includes("quinta") || dia.includes("sexta")){
    document.querySelector('p').innerHTML = `É um dia útil!`
} else {
    document.querySelector('p').innerHTML = `Dia inválido!`
}
// Uma equipe registrou o tempo, em minutos, de seis atendimentos técnicos e deseja calcular a média.

const entrada = require("readline-sync");

let soma = 0;

for (let i = 1; i <= 6; i++) {
    const medicao = entrada.questionFloat(`Digite a medicao ${i}: `);
    soma += medicao;
}

const media = soma / 6;

console.log("\n=== RESULTADO DAS MEDIÇÕES ===");
console.log(`Soma das medicoes: ${soma}`);
console.log(`Média final: ${media}`);
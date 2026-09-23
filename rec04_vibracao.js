// Um sensor mede o nível de vibração de um equipamento em mm/s.

const entrada = require("readline-sync");

const temperatura = entrada.questionFloat("Digite a vibracao da maquina:  ");

let classificacao;

if (vibracao <= 3) {
    classificacao = "ESTAVEL";
} else if (vibracao <= 6) {
    classificacao = "ATENÇÃO";
} else {
    classificacao = "CRÍTICA";
}

console.log("\n=== SITUAÇÃO DA MÁQUINA ===");
console.log(`vibracao: ${vibracao} mm/s`);
console.log(`classificação: ${classificacao}`);
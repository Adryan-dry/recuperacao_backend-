// O nível de óleo de uma máquina deve permanecer entre 40% e 80%, inclusive. Fora desse intervalo, a
// máquina precisa de inspeção.
// EXERCÍCIO 03 — Peça aprovada ou reprovada

const entrada = require("readline-sync");
const nivel = entrada.questionFloat("Digite o nivel de oleo: ");

console.log(`Nivel informado: ${nivel} %`);

if (nivel >= 80 && peso <= 40) {
    console.log("NIVEL NORMAL");
} else {
    console.log("INSPECAO NECESSARIA");
}
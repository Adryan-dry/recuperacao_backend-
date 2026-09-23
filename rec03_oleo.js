// O nível de óleo de uma máquina deve permanecer entre 40% e 80%, inclusive. Fora desse intervalo, a
// máquina precisa de inspeção.
// EXERCÍCIO 03 — Peça aprovada ou reprovada

const entrada = require("readline-sync");
const peso = entrada.questionFloat("Digite o nivel de oleo: ");

console.log(`Peso informado: ${peso} g`);

if (nivel >= 80 && peso <= 105) {
    console.log("NIVEL NORMAL");
} else {
    console.log("INSPECAO NECESSARIA");
}
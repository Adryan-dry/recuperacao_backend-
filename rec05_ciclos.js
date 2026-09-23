//Uma esteira produz uma quantidade fixa de produtos por ciclo. O supervisor quer visualizar a produção
// acumulada dos ciclos 1 até 12.
const entrada = require("readline-sync");

const pecasPorCiclo = entrada.questionInt("Quantas pecas a maquina produz p/ ciclo: ");
console.log("/n===== PRODUÇÃO ACUMULADA =====");

for (let ciclo = 1; ciclo <= 10; ciclo++){
    const acumulado = pecasPorCiclo * ciclo;
    console.log(`Ciclo${ciclo}: ${acumulado} pecas`);

}
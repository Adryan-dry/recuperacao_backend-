// Uma indústria deseja calcular o percentual de aproveitamento de matéria-prima. O aproveitamento é calculado por (quantidade
// útil / quantidade total) × 100.
const entrada = require ('readline-sync');



function calcularAproveitamento (util, total) {
    return (util / total) *100;
}

function classificarAproveitamento (percentual) {
    if (percentual  >= 90) {
        return "EXCELENTE";
    } else if (percentual >= 75) {
        return "ADEQUADO";
    } else {
        return "REVISAR PROCESSO";
    }

}

const quantidadeTotal = entrada.questionFloat("Quantidade total: ");
const quantidadeUtil = entrada.question("Quantidade util: ");

const percentual = calcularAproveitamento(quantidadeUtil, quantidadeTotal);
const classificacao = classificarAproveitamento (percentual);

console.log("\n === RELATORIO DE APROVEITAMENTO === ");
console.log(`Quantidade Total: ${quantidadeTotal}`);
console.log(`Quantidade Util: ${quantidadeUtil}`);
console.log(`Percentual: ${percentual.toFixed(2)}%`);
console.log(`Classificacao: ${classificacao}`);

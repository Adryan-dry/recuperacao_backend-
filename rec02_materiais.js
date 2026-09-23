// Uma equipe de manutenção precisa calcular o custo de um lote de peças de reposição.
const entrada = require ("readline-sync");

const material = entrada.question ("Qual nome da peca? ");
const qtdPecas = entrada.questionInt ("Quantidade de pecas compradas? ");
const precoUnitario = entrada.questionFloat("Qual valor da peca? ");

const total = qtdPecas *precoUnitario;

console.log("\n=== RESUMO DA COMPRA ===");
console.log(`Pecas: ${material}`);
console.log(`Quantidade: ${qtdPecas}`);
console.log(`Preco: R$ ${precoUnitario.toFixed(2)}`);
console.log(`Valor total: R$ ${total.toFixed(2)}`);


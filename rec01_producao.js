// Uma máquina de embalagem produz uma quantidade fixa de caixas por hora. Crie um programa que
// calcule quantas caixas serão produzidas durante um dia de trabalho.
// EXERCÍCIO 01 — Produção do turno

const caixasPorHora = 75;
const horasTrabalhadas = 8;
const producaoTotal = caixasPorHora * horasTrabalhadas;

console.log("=== PRODUÇÃO DO TURNO ===");
console.log(`Caixas por hora: ${caixasPorHora} caixas`);
console.log(`Horas trabalhadas: ${horasTrabalhadas} horas`);
console.log(`Total produzido: ${producaoTotal} caixas`); 

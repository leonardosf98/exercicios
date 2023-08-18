var lines = ["João", "1700", "1230.50"];
let salarioBase = parseInt(lines[1]);
let comissao = parseInt(lines[2]);
let total = salarioBase + comissao * 0.15;

console.log("TOTAL = R$ " + total.toFixed(2), comissao);

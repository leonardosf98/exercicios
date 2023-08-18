let vezes = prompt("Quantas vezes você quer converter?");
vezes = parseInt(vezes);

for (let i = 1; i < vezes; i++) {
  let valor = prompt("Qual o valor para conversão?");
  let convertido = parseInt(valor) / 5;
  console.log(valor);
}

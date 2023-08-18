console.log("Contagem Inteligente");
let inicio = prompt("Digite o primeiro número da contagem");
let fim = prompt("Digite o último número da contagem");
inicio = parseInt(inicio);
fim = parseInt(fim);

let lista = [];

if (inicio > fim) {
  for (let i = fim; i < inicio + 1; i++) {
    lista.push(i + ".. ");
  }
} else {
  for (let i = inicio; i < fim + 1; i++) {
    lista.push(i + ".. ");
  }
}

lista = lista.join("");
console.log(lista);

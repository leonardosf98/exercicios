let soma = 0;
do {
  let numero = prompt("Digite um valor");
  numero = parseInt(numero);
  let resposta = prompt("Você quer continuar?[S/N]");
  if (resposta === "S") {
    resposta = true;
  } else {
    resposta = false;
  }
  soma = numero + soma;
} while (resposta === true);
console.log(soma);

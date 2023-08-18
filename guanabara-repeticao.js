contar();

function contar() {
  let i = 1;
  let soma = 0;
  let maior = 0;
  let menor;
  while (i <= 3) {
    let numero = prompt("Digite um número");
    if (numero === null) {
      return;
    } else {
      numero = parseInt(numero);
      if (i === 1) {
        menor = numero;
      }
      soma += numero;
      if (numero > maior) {
        maior = numero;
      }
      if (numero < menor) {
        menor = numero;
      }
      i++;
    }
  }
  console.log(soma, maior, menor);
}

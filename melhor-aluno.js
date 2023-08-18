let alunos = prompt("Quantos alunos a sala tem?");
alunos = parseInt(alunos);
let lista = [];
let i = 0;
let melhorNota = new Object();
melhorNota.nome = "";
melhorNota.nota = 0;

while (i < alunos) {
  let nome = prompt("Qual o nome do aluno?");
  let nota = prompt("Qual a nota do aluno?");
  nota = parseFloat(nota);
  if (nota > melhorNota.nota) {
    melhorNota.nome = nome;
    melhorNota.nota = nota;
  }
  let aluno = new Object();
  aluno.nome = nome;
  aluno.nota = nota;
  lista.push(aluno);
  console.log("Nome do aluno: " + aluno.nome);
  console.log("Nota do aluno: " + aluno.nota);
  i++;
}

console.log(
  "O melhor aluno foi " + melhorNota.nome + " com a nota " + melhorNota.nota
);

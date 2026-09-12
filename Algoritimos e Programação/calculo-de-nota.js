let aln = prompt("digite o nome do aluno: ");
let nota1 = parseFloat(prompt("digite a sua primeira nota: "));
let nota2 = parseFloat(prompt("digite a sua segunda nota: "));
let nota3 = parseFloat(prompt("digite a sua terceira nota: "));
let nota4 = parseFloat(prompt("digite a sua quarta nota : "));

let nf = (nota1 + nota2 + nota3 + nota4) / 4

if (nf >= 9.0 && nf <= 10.0){
  conceito = "A"
  console.log("parabéns " + aln + " você passou, sua nota é " + nf + " e seu conceito é " + conceito);
}
else if (nf >= 7.0 && nf <= 8.9){
  conceito = "B"
  console.log("parabéns " + aln + " você passou, sua nota é " + nf + "e seu conceito é " + conceito);
}
else if (nf >= 5.0 && nf <= 6.9){
  conceito = "C"
  console.log("parabéns " + aln + " você passou na média, sua nota é " + nf + " seu conceito é " + conceito);
}
else if (nf <= 4.9){
  conceito = "D"
  console.log("infelizmente " + aln + " você reprovou, sua nota é " + nf + " seu conceito é " + conceito);
}
else{
  console.log("nota invalidade, tente novamento (nota maxima 10.0 e minima 0")
}
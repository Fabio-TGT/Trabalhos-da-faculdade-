let filme = prompt("digite o nome do filme: ");

let p1 = prompt("digite seu nome: ");
let p2 = prompt("digite seu nome: ");
let p3 = prompt("digite seu nome: ");

let nota1 = parseFloat(prompt( p1 + " diga a nota do filme " + filme +":"));
let nota2 = parseFloat(prompt( p2 + " diga a nota do filme " + filme +":"));
let nota3 = parseFloat(prompt (p3 + " diga a nota do filme " + filme +":"));

let media_nota = (nota1 + nota2 + nota3) / 3;
let nota;
if (media_nota >= 4 && media_nota <= 5){
  nota = "boa";
}
else if (media_nota >= 3 && media_nota <= 3.9){
  nota = "medio";
}
else if (media_nota <= 2.9){
  nota = "ruim";
}
else {
  console.log("nota invalida tente novamente (de 0.0 a 5.0)");
}
switch (nota) {
  case "boa":
    console.log("O filme é classificado como bom.");
    break;
  case "medio":
    console.log("O filme é classificado como mediano.");
    break;
  case "ruim":
    console.log("O filme é classificado como ruim.");
    break;
}
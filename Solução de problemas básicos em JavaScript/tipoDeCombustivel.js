let alcohol = 0;
let gasoline = 0;
let diesel = 0;

let lines = new Array();
let entrada = gets();

while (entrada != 4) {
  lines.push(entrada);
  entrada = gets();
}

while (lines.length > 0) {
  const code = Number(lines.shift());
  switch (code) {
    case 1: 
      alcohol++;
      break;
    case 2:
      gasoline++;
      break;
    case 3:
      diesel++;
      break;
    case 4:
      break;
  }
}

console.log("MUITO OBRIGADO");
console.log("Alcool: " + alcohol);
console.log("Gasolina: " + gasoline);
console.log("Diesel: " + diesel);
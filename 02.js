1;
!false;
console.log(1);
console.log(!false);

// prompt("¿Cómo te llamas?");
// Solo funciona en navegadores

// para mostrar un mensaje en pantalla con Node.js es:
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("¿Cómo te llamas? ", function(nombre) {
  console.log(`Hola, ${nombre}!`);
  rl.close();
});
// Solo funciona en Node.js

if (false != true) {
  console.log("Tiene sentido.");
  if (1 < 2) {
    console.log("No hay sorpresas ahí.");
  }
}
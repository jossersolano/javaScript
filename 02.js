1;
!false;
console.log(1);
console.log(!false);

// prompt("¿Cómo te llamas?");
// Solo funciona en navegadores

/*
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
*/

if (false != true) {
  console.log("Tiene sentido.");
  if (1 < 2) {
    console.log("No hay sorpresas ahí.");
  }
}

for (let i = '#'; i.length <= 7; i += '#') {
  console.log(i);
}

for (let i = 1; i <= 100; i++) {
  let output = "";
  if (i % 3 == 0) output += "Fizz";
  if (i % 5 == 0) output += "Buzz";
  console.log(output || i);
}

for (let i = 1; i <= 8; i++) {
  let line = "";
  for (let j = 1; j <= 8; j++) {
    if ((i + j) % 2 == 0) {
      line += " ";
    } else {
      line += "#";
    }
  }
  console.log(line);
} 
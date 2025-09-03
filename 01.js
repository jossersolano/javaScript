console.log(314 % 100)
console.log(0/0)
console.log(Infinity - Infinity)
console.log(`la mitad de 100 es ${100 / 2}`)

console.log(typeof 4.5)
console.log(typeof "x")
console.log(- (10 - 2))

console.log(3 > 2)
// → true
console.log(3 < 2)
// → false

console.log("Aardvark" < "Zoroaster")
console.log("Itchy" != "Scratchy")
console.log("Apple" < "Banana")

console.log("Z"< "a")

console.log(NaN == NaN)

console.log(1 + 1 == 2 && 10 * 10 > 50)

console.log(true ? 1 : 2);
// → 1
console.log(false ? 1 : 2);
// → 2

console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("five" * 2)
// → NaN
console.log(false == 0)
// → true

console.log(null + 1)
console.log(null == 0)
console.log(null >= 0)
console.log(undefined == 0)
console.log(0 == false) // true
console.log("" == false) // true


// Cortocircuito de valores lógicos
console.log(true || false); // true

let nombre = null;
var usuario = nombre || "Invitado";
console.log(usuario); // "Invitado"

console.log(false && true); // false

var usuario = "Josser";
let acceso = usuario && "Acceso permitido";
console.log(acceso); // "Acceso permitido"

let edad = 0;
let valor = edad ?? 18;
console.log(valor); // 0

let edad2 = null;
let valor2 = edad2 ?? 18;


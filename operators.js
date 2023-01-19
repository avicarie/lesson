let a = 5;
// console.log(`${a} + 2`, a + 2); // Template literal
// console.log(`${a} - 2`, a - 2);
// console.log(`${a} / 2`, a / 2);
// console.log(`${a} * 2`, a * 2);
// console.log(`${a} % 3`, a % 3); // Modulo

function wypisz(name) {
  console.log(`${name} ma kota`);
}

// wypisz("ala");
// wypisz("1232");
// wypisz("qweqe");
// wypisz("aleqweqwa");

let b = 5;

console.log(`++${b}`, ++b); // b = b + 1
console.log(`${b}++`, b++); // b = b + 1
console.log(b);
console.log(`--${b}`, --b); // b = b - 1
console.log(`${b}--`, b--); // b = b - 1
console.log(b);

console.log(--b);

b = b - 1;
console.log(b);

console.log(b--);

console.log(b);
b = b - 1;

let c = 5;

if (c % 2 == 0) {
  console.log(c);
}

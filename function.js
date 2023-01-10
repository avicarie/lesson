function sumTwoNumbers(first, second) {
  console.log(first + second); // side effect - efekt uboczny
} // jeżeli funkcje mają side effecty -> impure function
function subtract(first, second) /* argumenty */ {
  return first - second;
}
// sumTwoNumbers(10, 1);
// console.log(subtract(10, 1));
let money = 100;
money = subtract(money, 10);
console.log(money);
money = subtract(money, 40);
console.log(money);

// Dodać liczby o 1 do N
// Wyliczyć iloczyn liczb od 1 do N
// Potęgować

// fun(5) = 0 + 1 + 2 + 3 + 4 + 5
// fun(0) = 0
// fun(n) = 1 + .. + N
// fun(n) = fun(n-1) + n
// fun(n-1) = 1 + .. + n - 1
function sumAllUntil(n) {
  if (n == 0) {
    return 0;
  }
  return sumAllUntil(n - 1) + n;
}

console.log(sumAllUntil(5));

// fun(5) = 1 * 2 * 3 * 4 * 5
// fun(n) = fun(n-1) * n
function multiplyAllUntil(n) {
  if (n == 1) {
    return 1;
  }
  return multiplyAllUntil(n - 1) * n;
}
console.log(multiplyAllUntil(5));

// Potęgowanie
// fun(5, 5) = 5 * 5 * 5 * 5 * 5
// fun(5, 5) = fun(5, 4) * 5
// fun(5, 5) = fun(5, 5 - 1) * 5
// fun(5, N) = fun(5, N - 1) * 5
// fun(base, expo) = fun(base, expo - 1) * base
// fun(base, 0) = 1
function pow(base, expo) {
  if (expo == 0) return 1;
  return pow(base, expo - 1) * base;
}

console.log(pow(2, 10));

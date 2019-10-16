function powerCalc(base, exp) {
  if (exp <= 0) return "exponent should be >= 0";
  if (exp === 1) return base;

  return base * powerCalc(base, exp - 1);
}

powerCalc(10, 2);
console.time()
console.log(powerCalc(5, 3));
console.timeEnd()
console.log(powerCalc(5, -1));

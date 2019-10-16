function nthTriangle(sides) {
  if (sides === 1) return 1;

  return sides + nthTriangle(sides - 1);
}

console.time()
console.log(nthTriangle(1500));
console.timeEnd()
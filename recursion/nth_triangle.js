function nthTriangle(sides) {
  if (sides === 1) return 1;

  return sides + nthTriangle(sides - 1);
}

console.log(nthTriangle(3), nthTriangle(5));

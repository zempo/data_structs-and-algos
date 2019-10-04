function binaryConverter(n, s) {
  if (n === 0) return s || "0";

  return binaryConverter(Math.floor(n / 2), (n % 2) + s);
}

var t = (function f(n, s) {
  return n === 0 ? s || "0" : f(~~(n / 2), (n % 2) + s);
})(22, "");

console.log(binaryConverter(22, ""), t);

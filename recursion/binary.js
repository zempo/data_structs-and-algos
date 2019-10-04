function binaryConverter(num) {
  let numStr = num.toString();
  if (num != Math.floor(num)) return "Please enter a number";
  if (num < 0) return "Please enter a positive integer";

  return "bi";
}

var t = (function f(n, s) {
  return n === 0 ? s || "0" : f(~~(n / 2), (n % 2) + s);
})(22, "");

console.log(binaryConverter(22), t);

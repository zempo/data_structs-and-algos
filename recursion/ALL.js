const countSheep = x => {
  if (x === 0) return "All sheep have jumped the fence.";

  return `${x} sheep have jumped the fence. \n` + countSheep(x - 1);
};

console.log("Problem 1: Count Sheep");
console.log(countSheep(3));
console.log("\n");

const powerCalc = (base, exp) => {
  if (exp <= 0) return "Exponent should be greater than 0";
  if (exp === 1) return base;

  return base * powerCalc(base, exp - 1);
};

console.log("Problem 2: Power Calculator");
console.log(powerCalc(10, -1));
console.log(powerCalc(10, 2));
console.log(powerCalc(10, 4));
console.log("\n");

const revStr = str => {
  if (str.length === 0) return "";

  return str.slice(str.length - 1) + revStr(str.slice(0, str.length - 1));
};

console.log("Problem 4: Reverse String");
console.log(revStr("hello"));
console.log("\n");

const nthTriangle = x => {
  // counts the sides
  if (x === 1) return x;

  return x + nthTriangle(x - 1);
};

console.log("Problem 5: nth Triangle");
console.log(nthTriangle(5));
console.log("\n");

const optimizeFibbo = fn => {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const res = fn(...args);
    cache[args] = res;
    return res;
  };
};
const fibboSlow = x => {
  if (x < 2) return x;

  return fastFibbo(x - 1) + fastFibbo(x - 2);
};

const fastFibbo = optimizeFibbo(fibboSlow);

console.log("Problem 6: Fibonacci");
console.log(fastFibbo(7));
console.log("\n");

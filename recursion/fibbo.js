function memoizeMe(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const res = fn(...args);
    cache[args] = res;
    return res;
  };
}

function slowFib(n) {
  // 4 ... 1, 1, 2, 3
  if (n < 2) return n;

  return fastFib(n - 1) + fastFib(n - 2);
}

const fastFib = memoizeMe(slowFib);

console.time();
// 3921 maximum ==> infinity
console.log(fastFib(42));
console.timeEnd();

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

function crashAndFib(n) {
  // 4 ... 1, 1, 2, 3
  if (n < 2) return n;

  return betterFibbo(n - 1) + betterFibbo(n - 2);
}

const betterFibbo = memoizeMe(crashAndFib);

console.time();
console.log(betterFibbo(50));
console.timeEnd();

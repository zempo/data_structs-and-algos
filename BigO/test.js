function compute(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i === 1) {
      result.push(0);
    } else if (i == 2) {
      result.push(1);
    } else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  return result;
}

function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

console.time();
console.log(findRandomElement([1, 3, 5, 6, 23, 43, 54, 2, 4]));
console.timeEnd();

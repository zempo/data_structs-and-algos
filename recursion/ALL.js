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

const factorial = x => {
  if (x === 1) return x;

  return x * factorial(x - 1);
};

console.log("Problem 7: Factorial");
console.log(factorial(5));
console.log("\n");

let maze = [
  [" ", " ", " ", "*", " ", " ", " "],
  ["*", "*", " ", "*", " ", "*", " "],
  [" ", " ", " ", " ", " ", " ", " "],
  [" ", "*", "*", "*", "*", "*", " "],
  [" ", " ", " ", " ", " ", " ", "e"]
];

// the maze, x coor, y coor, current path string
const mazeSolver = (maze, x, y, path = "") => {
  let mazeCopy = maze.map(arr => [...arr]);

  // can't move any further left, can only go right
  if (x < mazeCopy[0].length - 1) {
    // if the spot to the right is clear or the exit
    if (mazeCopy[y][x + 1] === " " || mazeCopy[y][x + 1] === "e") {
      // close off the spot
      mazeCopy[x][y] = "*";
      // add to the path
      let newPath = path + "R";
      // literal exit case
      if (mazeCopy[y][x + 1] === "e") {
        console.log(`Path to the exit: ${newPath}`);
      } else {
        mazeSolver(mazeCopy, x + 1, y, newPath);
      }
    }
  }
  // can't move any further right, can only go left
  if (x > 0) {
    if (mazeCopy) {
    }
  }
};

console.log("Problem 8: Maze Solver");
console.log(mazeSolver(maze, 0, 0));
console.log("\n");

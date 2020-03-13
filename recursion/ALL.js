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

let solutions = [];
const shortestArr = solutions => {
  return solutions.sort((a, b) => a.length - b.length)[0];
};

// the maze, x coor, y coor, current path string
const mazeSolver = (maze, x, y, path = "") => {
  let mazeCopy = maze.map(arr => [...arr]);

  // can't move any further left, can only go right
  if (x < mazeCopy[0].length - 1) {
    // if the spot to the right is clear or the exit
    if (mazeCopy[y][x + 1] === " " || mazeCopy[y][x + 1] === "e") {
      // close off the spot
      mazeCopy[y][x] = "*";
      // add to the path
      let newPath = path + "R";
      // literal exit case
      if (mazeCopy[y][x + 1] === "e") {
        solutions.push(newPath);
        console.log(`Path to the exit: ${newPath}`);
      } else {
        mazeSolver(mazeCopy, x + 1, y, newPath);
      }
    }
  }
  // can't move any further right, can only go left
  if (x > 0) {
    if (mazeCopy[y][x - 1] === " " || mazeCopy[y][x - 1] === "e") {
      // close off the spot
      mazeCopy[y][x] = "*";
      // add to the path
      let newPath = path + "L";
      // literal exit case
      if (mazeCopy[y][x - 1] === "e") {
        solutions.push(newPath);
        console.log(`Path to the exit: ${newPath}`);
      } else {
        mazeSolver(mazeCopy, x - 1, y, newPath);
      }
    }
  }

  // can't go up any further
  if (y < mazeCopy.length - 1) {
    // if the spot below is clear or the exit
    if (mazeCopy[y + 1][x] === " " || mazeCopy[y + 1][x] === "e") {
      // close off the spot
      mazeCopy[y][x] = "*";
      // add to the path
      let newPath = path + "D";
      // literal exit case
      if (mazeCopy[y + 1][x] === "e") {
        solutions.push(newPath);
        console.log(`Path to the exit: ${newPath}`);
      } else {
        mazeSolver(mazeCopy, x, y + 1, newPath);
      }
    }
  }

  // can't go down any further
  if (y > 0) {
    // if the spot above is clear or the exit
    if (mazeCopy[y - 1][x] === " " || mazeCopy[y - 1][x] === "e") {
      // close off the spot
      mazeCopy[y][x] = "*";
      // add to the path
      let newPath = path + "U";
      // literal exit case
      if (mazeCopy[y - 1][x] === "e") {
        solutions.push(newPath);
        console.log(`Path to the exit: ${newPath}`);
      } else {
        mazeSolver(mazeCopy, x, y - 1, newPath);
      }
    }
  }

  return "The Most Efficient Path: " + shortestArr(solutions);
};

console.log("Problem 8: Maze Solver");
console.log(mazeSolver(maze, 0, 0));
console.log("\n");

const anagramsSolver = str => {
  // if 1 letter or less
  str.toLowerCase();
  if (str.length < 2) return str;

  let permutations = [];

  // get the permutations for each original letter
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    // if this permutation has already been found
    if (str.indexOf(char) != i) {
      continue;
    }

    // otherwise...
    // concat this unique permutation and the rest of the string
    let remainingStr = str.slice(0, i) + str.slice(i + 1, str.length);
    // for all other possible arrangements, recursively
    // at each 'starting point' of the string
    for (var subPermutation of anagramsSolver(remainingStr)) {
      permutations.push(char + subPermutation);
    }
  }

  return permutations;
};

console.log("Problem 9: Anagrams");
console.log(anagramsSolver("east"));
console.log("\n");

const members = {
  Zuckerberg: {
    Schroepfer: {
      Bosworth: {
        Steve: "Steve",
        Kyle: "Kyle",
        Andra: "Andra"
      },
      Zhao: {
        Richie: "Richie",
        Sofia: "Sofia",
        Jen: "Jen"
      }
    },
    Schrage: {
      VanDyck: {
        Sabrina: "Sabrina",
        Michelle: "Michelle",
        Josh: "Josh"
      },
      Swain: {
        Blanch: "Blanch",
        Tom: "Tom",
        Joe: "Joe"
      }
    },
    Sandberg: {
      Goler: {
        Eddie: "Eddie",
        Julie: "Julie",
        Annie: "Annie"
      },
      Hernandez: {
        Rowi: "Rowi",
        Inga: "Inga",
        Morgan: "Morgan"
      },
      Moissinac: {
        Amy: "Amy",
        Chuck: "Chuck",
        Vinni: "Vinni"
      },
      Kelley: {
        Eric: "Eric",
        Ana: "Ana",
        Wes: "Wes"
      }
    }
  }
};

const companyOrganizer = (data, indent = "") => {
  for (const key in data) {
    console.log(indent + key);
    if (typeof data[key] === "object") {
      companyOrganizer(data[key], indent + "  ");
    }
  }
  return "Org Chart";
};

console.log("Problem 10: Org Chart");
console.log(companyOrganizer(members));
console.log("\n");

const decToBi = x => (x === 0 ? 0 : (x % 2) + 10 * decToBi(Math.floor(x / 2)));

console.log("Problem 11: Org Chart");
console.log(decToBi(22));
console.log("\n");

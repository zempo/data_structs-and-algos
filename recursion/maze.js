let mySmallMaze = [[" ", " ", " "], [" ", "*", " "], [" ", " ", "e"]];

let maze = [
  [" ", " ", " ", "*", " ", " ", " "],
  ["*", "*", " ", "*", " ", "*", " "],
  [" ", " ", " ", " ", " ", " ", " "],
  [" ", "*", "*", "*", "*", "*", " "],
  [" ", " ", " ", " ", " ", " ", "e"]
];

const mazeSolver = (maze, y, x, path = "") => {
  let mazeCopy = maze.map((arr) => [...arr]);

  if (x < mazeCopy[0].length - 1) {
    if (mazeCopy[y][x + 1] === " " || mazeCopy[y][x + 1] === "e") {
      mazeCopy[y][x] = "*";
      let newPath = path + "R";
      if (mazeCopy[y][x + 1] === "e") {
        console.log(`Path to the exit: ${newPath}`);
      } else {
        mazeSolver(mazeCopy, y, x + 1, newPath);
      }
    }
  }

  if (x > 0) {
    if (mazeCopy[y][x - 1] === " " || mazeCopy[y][x - 1] === "e") {
      mazeCopy[y][x] = "*";
      let newPath = path + "L";
      if (mazeCopy[y][x - 1] === "e") {
        console.log(`Path to the exit: ${newPath}`);
      } else {
        mazeSolver(mazeCopy, y, x - 1, newPath);
      }
    }
  }

  if (y < mazeCopy.length - 1) {
    if (mazeCopy[y + 1][x] === " " || mazeCopy[y + 1][x] === "e") {
      mazeCopy[y][x] = "*";
      let newPath = path + "D";
      if (mazeCopy[y + 1][x] === "e") {
        console.log(`Path to the exit: ${newPath}`);
      } else {
        mazeSolver(mazeCopy, y + 1, x, newPath);
      }
    }
  }

  if (y > 0) {
    if (mazeCopy[y - 1][x] === " " || mazeCopy[y - 1][x] === "e") {
      mazeCopy[y][x] = "*";
      let newPath = path + "U";

      if (mazeCopy[y - 1][x] === "e") {
        console.log(`Path to the exit: ${newPath}`);
      } else {
        mazeSolver(mazeCopy, y - 1, x, newPath);
      }
    }
  }
};

console.time();
console.log(mazeSolver(maze, 0, 0));
console.timeEnd();

function isAllowed(result) {
  if (!result || result === "*") {
    return false;
  }
  return true;
}

function nextMove(maze, index, move) {
  const indexCopy = [...index];

  if (move === "R") {
    indexCopy[1] = indexCopy[1] + 1;
    const result = maze[indexCopy[0]][indexCopy[1]];
    return {
      move: "R",
      isValid: isAllowed(result),
      coord: indexCopy,
      inverse: "L",
      priority: 1
    };
  } else if (move === "L") {
    indexCopy[1] = indexCopy[1] - 1;
    const result = maze[indexCopy[0]][indexCopy[1]];
    return {
      move: "L",
      isValid: isAllowed(result),
      coord: indexCopy,
      inverse: "R",
      priority: 3
    };
  } else if (move === "D") {
    indexCopy[0] = indexCopy[0] + 1;
    if (!maze[indexCopy[0]]) return false;
    const result = maze[indexCopy[0]][indexCopy[1]];
    return {
      move: "D",
      isValid: isAllowed(result),
      coord: indexCopy,
      inverse: "U",
      priority: 2
    };
  } else if (move === "U") {
    indexCopy[0] = indexCopy[0] - 1;
    if (!maze[indexCopy[0]]) return false;
    const result = maze[indexCopy[0]][indexCopy[1]];
    return {
      move: "U",
      isValid: isAllowed(result),
      coord: indexCopy,
      inverse: "D",
      priority: 4
    };
  }
}

function escapeMaze(maze, index = [0, 0], prevMove = null) {
  if (maze[index[0]][index[1]] === "e") {
    return "";
  }
  let allMoves = ["R", "L", "U", "D"];
  allMoves = allMoves.filter((move) => move !== prevMove);
  const results = allMoves.map((move) => nextMove(maze, index, move));
  const result = results.sort((a, b) => (a.priority > b.priority ? 1 : -1)).find((result) => result.isValid);
  return result.move + escapeMaze(maze, result.coord, result.inverse);
}

console.time();
console.log(escapeMaze(maze));
console.timeEnd();

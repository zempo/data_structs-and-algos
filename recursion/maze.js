let mySmallMaze = [[" ", " ", " "], [" ", "*", " "], [" ", " ", "e"]];

let maze = [
  [" ", " ", " ", "*", " ", " ", " "],
  ["*", "*", " ", "*", " ", "*", " "],
  [" ", " ", " ", " ", " ", " ", " "],
  [" ", "*", "*", "*", "*", "*", " "],
  [" ", " ", " ", " ", " ", " ", "e"]
];

function findTheCheese(grid, row, pos) {
  let startPos = grid[0][0];

  for (const key of grid[0].keys()) {
    console.log(key, grid[0][key]);
  }

  console.log(startPos);
}

console.log(findTheCheese(maze));

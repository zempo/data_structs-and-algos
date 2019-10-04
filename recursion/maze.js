let mySmallMaze = [[" ", " ", " "], [" ", "*", " "], [" ", " ", "e"]];

let maze = [
  [" ", " ", " ", "*", " ", " ", " "],
  ["*", "*", " ", "*", " ", "*", " "],
  [" ", " ", " ", " ", " ", " ", " "],
  [" ", "*", "*", "*", "*", "*", " "],
  [" ", " ", " ", " ", " ", " ", "e"]
];

const testRow = (row, pos) => {
  let rowPath = "";
  if (pos === 0) {
    ////// starts from left
    for (let key of row.keys()) {
      //   console.log(key, row[key]);
      if (row[key] === "*") {
        return rowPath;
      } else if (key === 0) {
        rowPath += "";
      } else {
        rowPath += "R";
      }
    }
  }
};

function findTheCheese(grid, row, pos, path) {
  if (row === grid.length) return "";

  let startRow = grid[0];
  let startPos = grid[0][0];
  let path = "";

  let next = testRow(grid[row], pos);
  path += next;
  console.log(next);

  return `Escape maze: ${path}`;
}

console.log(findTheCheese(maze, 0, 0));

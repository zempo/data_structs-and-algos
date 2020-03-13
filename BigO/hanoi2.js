let moves = 0;
function hanoiSolver(discs, srcP, desP, auxP) {
  if (discs >= 1) {
    hanoiSolver(discs - 1, srcP, auxP, desP);
    console.log("Move disc from peg", srcP, "to peg", desP);
    moves++;
    hanoiSolver(discs - 1, auxP, desP, srcP);
  }
  return "Relocated tower in " + moves + " moves";
}

console.log(hanoiSolver(5, "1", "2", "3"));

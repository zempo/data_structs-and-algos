let count = 0;

function hanoiStack(discs, srcPeg, endPeg, auxPeg) {
  // if there are still discs to relocate
  if (discs >= 1) {
    // move to the auxillery peg, first
    hanoiStack(discs - 1, srcPeg, auxPeg, endPeg);
    count += 1;

    // Log instructions
    console.log(`Move ${count}: Disc ${discs} from Tower ${srcPeg} to Tower ${endPeg}.`);
    hanoiStack(discs - 1, auxPeg, endPeg, srcPeg);
  }

  return `Total moves: ${count}`;
  //   return `Total Moves: ${Math.pow(2, discs) - 1}`;
}

// console.time();
// console.log(hanoiStack(3, "A", "C", "B"));
// console.timeEnd();
// --> 7 moves

console.time();
console.log(hanoiStack(12, "A", "C", "B"));
console.timeEnd();
// --> 31 moves

// console.time();
// console.log(hanoiStack(7, "A", "C", "B"));
// console.timeEnd();
// --> 127 moves

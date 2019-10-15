// problem 1
function iterateSheep(sheepToCount) {
  for (let i = 0; i < sheepToCount; i++) {
    console.log(`${i + 1}: Another sheep jumps over the fence`);
  }
  console.log("All sheep jumped over the fence");
}

iterateSheep(3);
console.log("\n");

// problem 2
function iterativePower(base, exp) {
  if (exp <= 0) return "exponent should be >= 0";

  if (exp === 1) return base;

  let output = 1;

  for (let i = 0; i < exp; i++) {
    output *= base;
  }

  return output;
}

// console.log(iterativePower(1, -1))
// console.log(iterativePower(1, 100))
// console.log(iterativePower(2, 1))
console.log(iterativePower(2, 3));
console.log("\n");

function revStr(str) {
  if (typeof str === "string" || typeof str === "number") {
    let toString = str.toString();
    if (toString.length === 0) return "";
    let reversedStr = "";
    for (let i = toString.length - 1; i >= 0; i--) {
      reversedStr += toString[i];
    }

    return reversedStr;
  } else {
    return "Can only reverse string or number";
  }
}

console.log(revStr(null));
console.log(revStr(45));
console.log(revStr("smile"));

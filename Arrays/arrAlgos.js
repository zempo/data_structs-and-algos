// ALGO 1: Urlify a string with 1 pass

let input1 = "tauhida parveen";
let input2 = "www.thinkful.com /tauh ida parv een";

function urlify(inputStr) {
  output = "";

  for (let i = 0; i < inputStr.length; i++) {
    if (inputStr[i] === " ") {
      output += "%20";
    } else {
      output += inputStr[i];
    }
  }

  return output;
}

console.log("Algo 1: Urlify");
console.log(urlify(input1));
console.log(urlify(input2));
console.log("\n");

// ALGO 2: Custom filter method
const input3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, -1, 2, 5, 18, 20, 100, -20, 0];
const filterCase = "less"; // 'greater', 'equals', or 'less'

function myNumFilter(arr, filterCase, val) {
  let filterArr = [];
  if (filterCase === "less") {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < val) {
        filterArr.push(arr[i]);
      }
    }
    return filterArr;
  } else if (filterCase === "equals") {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === val) {
        filterArr.push(arr[i]);
      }
    }
    return filterArr;
  } else if (filterCase === "greater") {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > val) {
        filterArr.push(arr[i]);
      }
    }
    return filterArr;
  } else if (filterCase === "less-equals") {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] <= val) {
        filterArr.push(arr[i]);
      }
    }
    return filterArr;
  } else if (filterCase === "greater-equals") {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= val) {
        filterArr.push(arr[i]);
      }
    }
    return filterArr;
  }
}

console.log("Algo 2: Custom Num Filter");
console.log(myNumFilter(input3, filterCase, 5));
// console.log(myNumFilter(input3, "less-equals", 5));
// console.log(myNumFilter(input3, "equals", 5));
// console.log(myNumFilter(input3, "greater", 5));
// console.log(myNumFilter(input3, "greater-equals", 5));
console.log("\n");

/// ALGO 3: Maximum sum in Arr
let input4 = [2, -45, 24, -66, 100, -20, 19];
let input5 = [1, 3, 5, 7];
let input6 = [-4, -5, -7, -2];
let input7 = [];

const maxSequence = (arr) => {
  let allPositive = (arr) => arr.every((n) => n > 0);
  let allNegative = (arr) => arr.every((n) => n < 0);

  if (arr.length === 0 || allNegative(arr)) return 0;
  if (allPositive(arr)) return { start: 0, end: arr.length - 1, sum: arr.reduce((a, b) => a + b, 0) };

  const temp = { start: 0, sum: 0 };
  let result = { start: 0, end: 0, sum: 0 };

  for (let i = 0; i < arr.length; i++) {
    // sum so far
    temp.sum += arr[i];

    if (temp.sum > result.sum) {
      result = { start: temp.start, end: i, sum: temp.sum };
    }
    if (temp.sum < 0) {
      temp.sum = 0;
      temp.start = i + 1;
    }
  }
  return result;
};

console.log("Algo 3: Maximum Contigous Sum");
console.log(maxSequence(input4));
console.log(maxSequence(input5));
console.log(maxSequence(input6));
console.log(maxSequence(input7));
console.log("\n");
/// ALGO 4: Merge presorted Arrays

let input8 = [1, 3, 6, 8, 11];
let input9 = [2, 3, 5, 8, 9, 10];

const mergeArrsClean = (arr1, arr2) => {
  let result = [...arr1, ...arr2];
  return result.sort((a, b) => a - b);
};

const mergeArrs = (arr1, arr2) => {
  let merged = [];
  let indexArr1 = 0;
  let indexArr2 = 0;
  let current = 0;

  while (current < arr1.length + arr2.length) {
    let isArr1Depleted = indexArr1 >= arr1.length;
    let isArr2Depleted = indexArr2 >= arr2.length;

    if (!isArr1Depleted && (isArr2Depleted || arr1[indexArr1] < arr2[indexArr2])) {
      merged[current] = arr1[indexArr1];
      indexArr1++;
    } else {
      merged[current] = arr2[indexArr2];
      indexArr2++;
    }

    current++;
  }

  return merged;
};

console.log("Algo 4: Merge and Sort Arrays");
// console.log(mergeArrsClean(input8, input9));
console.log(mergeArrs(input8, input9));
console.log("\n");

/// ALGO5: remove chars without split, filter, or join
const input10 = "Battle of the Vowels: Hawaii vs. Grozny";
const input11 = "aeiou";

const deleteChars = (str, strToRmv) => {
  let output = str;

  // loop through each rmv char
  for (let i = 0; i < strToRmv.length; i++) {
    // console.log(strToRmv[i]);
    let currentCharToRmv = strToRmv[i];
    // then loop through each input char
    for (let j = 0; j < str.length; j++) {
      if (str[j] === currentCharToRmv) {
        //
        output = output.replace(str[j], "");
      } else {
        //
      }
    }
  }

  return output;
};

const deleteCharsFaster = (str, strToRmv) => {
  let output = str;

  for (let i = 0; i < strToRmv.length; i++) {
    let currentToRmv = strToRmv[i];
    let currentPattern = new RegExp(currentToRmv, "g");
    output = output.replace(currentPattern, "");
  }

  return output;
};

console.log("Algo 5: Custom Sanitizer");
console.time();
console.log(deleteChars(input10, input11));
console.timeEnd();

console.time();
console.log(deleteCharsFaster(input10, input11));
console.timeEnd();
console.log("\n");

///  Algo 6: product of all other array indexes except current
const input12 = [1, 3, 4, 9];

const productOfOthers = (arr) => {
  let output = [];
  let productOfAll = arr.reduce((acc, cur) => acc * cur);

  for (let i = 0; i < arr.length; i++) {
    let allOthers = productOfAll / arr[i];
    output.push(allOthers);
  }
  return output;
};

console.log("Algo 6: Product of all others");
console.log(productOfOthers(input12));
console.log("\n");

//// Algo 7:
const input13 = [[1, 0, 1, 1, 0], [0, 1, 1, 1, 0], [1, 1, 1, 1, 1], [1, 0, 1, 1, 1], [1, 1, 1, 1, 1]];

const matrixBullets = (arr) => {
  let matrix = arr;
  let matrixRef = { rows: [], columns: [] };
  // first we'll reference the rows and columns
  // with a search iterator
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        matrixRef.rows.push(i);
        matrixRef.columns.push(j);
      }
    }
  }
  console.log(matrixRef);
  // then we replace the columns
  for (let col = 0; col < matrixRef.columns.length; col++) {
    let currentCol = matrixRef.columns[col];
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][currentCol] = 0;
    }
  }
  // followed by the rows
  for (let row = 0; row < matrixRef.rows.length; row++) {
    let currentRow = matrixRef.rows[row];
    for (let i = 0; i < matrix.length; i++) {
      if (i === currentRow) {
        for (let j = 0; j < matrix[i].length; j++) {
          matrix[i][j] = 0;
        }
      }
    }
  }
  return matrix;
};

console.log("Algo 7: Matrix Navigator");
console.log(matrixBullets(input13));
console.log("\n");

/// ALGO 8: Str Rotation
let input14 = "amazon";
let input15 = "azonma";
let input16 = "azonam";

function checkRotationStrings(string, rotatedString) {
  let match = false;
  for (let i = 0; (i < string.length - 1) & !match; i++) {
    match = rotatedString.substring(i, rotatedString.length) + rotatedString.substring(0, i) === string;
  }
  return match;
}

console.log("Algo 8: String Rotation Checker");
console.log(checkRotationStrings(input14, input15));
console.log(checkRotationStrings(input14, input16));

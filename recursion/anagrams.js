function gramans(str) {
  if (str.length < 2) return str;

  let permutations = [];

  // create each letter prefix, until 'anagramed'
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    // if duplicate
    if (str.indexOf(char) != i) {
      continue; // skip it
    }

    let remainingStr = str.slice(0, i) + str.slice(i + 1, str.length); // concat the prefix and remainder

    for (var subPermutation of gramans(remainingStr)) {
      permutations.push(char + subPermutation);
    }
  }
  return permutations;
}

console.time();
console.log(gramans("solomon"));
console.timeEnd();

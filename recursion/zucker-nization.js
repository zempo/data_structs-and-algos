const theFacebook = [
  { id: 1, name: "Zuckerberg", superior: 0 },
  { id: 2, name: "Schroepfer", superior: 1 },
  { id: 3, name: "Bosworth", superior: 2 },
  { id: 4, name: "Steve", superior: 3 },
  { id: 5, name: "Kyle", superior: 3 },
  { id: 6, name: "Andra", superior: 3 },
  { id: 7, name: "Zhao", superior: 2 },
  { id: 8, name: "Richie", superior: 7 },
  { id: 9, name: "Sofia", superior: 7 },
  { id: 10, name: "Jen", superior: 7 },
  { id: 11, name: "Schrage", superior: 1 },
  { id: 12, name: "VanDyck", superior: 11 },
  { id: 13, name: "Sabrina", superior: 12 },
  { id: 14, name: "Michelle", superior: 12 },
  { id: 15, name: "Josh", superior: 12 },
  { id: 16, name: "Swain", superior: 11 },
  { id: 17, name: "Blanch", superior: 16 },
  { id: 18, name: "Tom", superior: 16 },
  { id: 19, name: "Joe", superior: 16 },
  { id: 20, name: "Sandberg", superior: 1 },
  { id: 21, name: "Goler", superior: 20 },
  { id: 22, name: "Eddie", superior: 21 },
  { id: 23, name: "Julie", superior: 21 },
  { id: 24, name: "Annie", superior: 21 },
  { id: 25, name: "Hernandez", superior: 20 },
  { id: 26, name: "Rowi", superior: 25 },
  { id: 27, name: "Inga", superior: 25 },
  { id: 28, name: "Morgan", superior: 25 },
  { id: 29, name: "Moissinac", superior: 20 },
  { id: 30, name: "Amy", superior: 29 },
  { id: 31, name: "Chuck", superior: 29 },
  { id: 32, name: "Vinni", superior: 29 },
  { id: 33, name: "Kelley", superior: 20 },
  { id: 34, name: "Eric", superior: 33 },
  { id: 35, name: "Ana", superior: 33 },
  { id: 36, name: "Wes", superior: 33 }
];

function processChart(output) {
  //   console.dir(output, { depth: null });

  return output;
}

function getNestedChart(members, superior) {
  var org = [];
  for (let i in members) {
    if (members[i].superior == superior) {
      let subordinates = getNestedChart(members, members[i].id);
      if (subordinates.length) {
        members[i].subordinates = subordinates;
      }
      org.push(members[i]);
    }
  }
  return processChart(org);
  //   return JSON.stringify(org, null, 1);
}

console.time();
console.log(getNestedChart(theFacebook, 0));
console.timeEnd();

// Zuckerberg
//     Schroepfer
//         Bosworth
//             Steve
//             Kyle
//             Andra
//         Zhao
//             Richie
//             Sofia
//             Jen
//     Schrage
//         VanDyck
//             Sabrina
//             Michelle
//             Josh
//         Swain
//             Blanch
//             Tom
//             Joe
//     Sandberg
//         Goler
//             Eddie
//             Julie
//             Annie
//        Hernandez
//             Rowi
//             Inga
//             Morgan
//        Moissinac
//             Amy
//             Chuck
//             Vinni
//        Kelley
//             Eric
//             Ana
//             Wes

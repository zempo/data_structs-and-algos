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

function printHeirarchy(heirarchy, indent = "") {
  for (const key in heirarchy) {
    console.log(`${indent}${key}`);
    if (typeof heirarchy[key] === "object") {
      printHeirarchy(heirarchy[key], indent + "   ");
    }
  }
}

printHeirarchy(members);

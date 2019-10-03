function countSheep(numberOfSheep) {
  if (numberOfSheep === 0) {
    console.log("All sheep jumped over the fence");
    return;
  }

  console.log(`${numberOfSheep}: Another sheep jumps over the fence`);

  countSheep(numberOfSheep - 1);
}

countSheep(3);

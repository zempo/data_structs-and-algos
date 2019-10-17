const arr = [1, 2, 3, 4]

const newArr = []

for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i] + 1;
}

console.log(newArr)

console.log(arr.map(el => ++el))

// custom prototype
Array.prototype.map = (callback) => {
    const mappedArr = []


    for (let i = 0; i < this.length; i++) {
        mappedArr[i] = callback(this[i], i);
    }

    return mappedArr
}

console.log(arr.map(el => ++el))  
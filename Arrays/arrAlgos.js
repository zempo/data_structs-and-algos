// ALGO 1: Urlify a string with 1 pass

let input1 = "tauhida parveen"
let input2 = "www.thinkful.com /tauh ida parv een"

function urlify(inputStr) {
    output = ''

    for (let i = 0; i < inputStr.length; i++) {
        if (inputStr[i] === ' ') {
            output += '%20'
        } else {
            output += inputStr[i]
        }
    }

    return output

}

console.log('Algo 1: ')
console.log(urlify(input1))
console.log(urlify(input2))
console.log('\n')


// ALGO 2: Custom filter method 
const input3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, -1, 2, 5, 18, 20, 100, -20, 0]
const filterCase = 'less' // 'greater', 'equals', or 'less'

function myNumFilter(arr, filterCase, val) {
    let filterArr = []
    if (filterCase === 'less') {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < val) {
                filterArr.push(arr[i])
            }
        }
        return filterArr
    } else if (filterCase === 'equals') {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === val) {
                filterArr.push(arr[i])
            }
        }
        return filterArr
    } else if (filterCase === 'greater') {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > val) {
                filterArr.push(arr[i])
            }
        }
        return filterArr
    } else if (filterCase === 'less-equals') {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] <= val) {
                filterArr.push(arr[i])
            }
        }
        return filterArr
    } else if (filterCase === 'greater-equals') {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= val) {
                filterArr.push(arr[i])
            }
        }
        return filterArr
    }

}

console.log('Algo 2:')
console.log(myNumFilter(input3, filterCase, 5))
console.log(myNumFilter(input3, 'less-equals', 5))
console.log(myNumFilter(input3, 'equals', 5))
console.log(myNumFilter(input3, 'greater', 5))
console.log(myNumFilter(input3, 'greater-equals', 5))


/// ALGO 3: Maximum sum in Arr
let input4 = [4, 6, -3, 5, -2, 1]
let input5 = [-4, -5, -7, 2]
let input6 = [2, -45, 24, -66, 100, -20, 19]
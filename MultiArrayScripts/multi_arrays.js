/**
 * Multidimensional Arrays
 * A two-dimensional array is like a spreadsheet
 *      EX: Wroksheet where you specify a row and column to access a cell
 * A three-dimensional array is like an array of two-dimensional arrays
 *      EX: Excel Workbook w/ Multiple Worksheets
 */

let lockerAndAccessCode = [
    ["Locker 1", 135],
    ["Locker 2", 159],
    ["Locker 3", 642]
];

// access the first element
console.log(lockerAndAccessCode[0]); // ["Locker 1", 135]

// access the first inner element of the second element
console.log(lockerAndAccessCode[1][0]); // "Locker 2"

// Predict the output of the following before you run it
console.log(lockerAndAccessCode[2][1]) //642

console.log(lockerAndAccessCode[1]) // ["Locker 2", 159]
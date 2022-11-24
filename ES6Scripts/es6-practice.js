// ES6 introduced the find() method that searches an array for the first
// value that matches a specified condition

// Declare Variables
let numbers = [7, 9, 64, 60, 12, 13, 65, 62];

function isOver60(arrayValue) {
    if (arrayValue > 60) {
        return true;
    } else {
        return false
    }
}

// Find the first value over 50
let firstValOver60 = numbers.find(isOver60); // returns 64

if (firstValOver60 != undefined) {
    console.log(firstValOver60);
}

// findIndex() returns the index of the first element that passes the test function
// Return position of val over 60
let firstValOver60Position = numbers.findIndex(isOver60);
if (firstValOver60Position != -1) {
    console.log("First value over 60 found at position " + firstValOver60Position);
    } else {
    console.log("No values over 60");
}

// filter() method returns an array of all values that pass a test function
let allOver60 = numbers.filter(isOver60);

if (allOver60.length > 0) {
    console.log(allOver60); 
} else {
    console.log("No values over 60");
}
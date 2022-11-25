/**
 * ES6 Arrow Functions
 * Useful when passing a function object to a method
 * (a, b) => a * b
 */


// * reduce() method
let numbers = [300, 150, 25];
/* 
function getSum(currentTotal, arrayValue) {
    return currentTotal + arrayValue;
}
*/
let sum = numbers.reduce((currentTotal, arrayValue) => currentTotal + arrayValue);
//  console.log(sum) // COMMENT OUT

let addOnOptions = [
    {item: "A/C", price: 1019.00},
    {item: "Sunroof", price: 699.99},
    {item: "Mud flaps", price: 299.49},
    {item: "Heated seats", price: 1199.99},
    {item: "AM/FM Stereo w/ cassette player", price: 199.00}
];
// * find() method [returns the first value]
let oneCheapOption = addOnOptions.find((arrayValue) => arrayValue.price < 500);


if (oneCheapOption != undefined) {
    console.log(oneCheapOption.item + " $" + oneCheapOption.price);
} else {
    console.log("No options under $500");
}

// * filter() method [returns all]
console.log()
let allCheapOptions = addOnOptions.filter(arrayValue => arrayValue.price < 500);
for (let i=0; i < allCheapOptions.length; i++) {
    console.log(allCheapOptions[i].item + " $" + allCheapOptions[i].price);
}
let person = {name: "Pursalane", age: 11, gender: "Female"};
// console.log(person["name"]);
// console.log(person["age"]);
// console.log(person["gender"]);

// You can iterate over properties using the for-in loop
// for-in returns the index or key of the enxt item in the array
for (let key in person) {
    console.log(key + ": " + person[key]);
}


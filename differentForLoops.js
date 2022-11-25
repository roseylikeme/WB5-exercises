
let kids = [ 
    { first : "Natalie", last : "Plyers" },
    { first: "Brittany", last: "Ray" }, 
    { first: "Zachary", last: "Westly" } 
];

// Shorter for loops forEach()
function displayKid(arrayElement) { 
    console.log(arrayElement.first + " " + arrayElement.last); 
}

kids.forEach(displayKid);

// Map elements from one array to a new array + For Loop
console.log()

function buildFullName(arrayElement) {
    return arrayElement.first + " " + arrayElement.last
}

let namesList = kids.map(buildFullName);

let numElements = namesList.length;
for (i = 0; i<numElements; i++){
    console.log(namesList[i])
}

// Another example
console.log()

function displayName(arrayElement){
    console.log(arrayElement);
}

let anotherNamesList = kids.map(buildFullName);
namesList.forEach(displayName)
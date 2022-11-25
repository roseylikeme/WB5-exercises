// Find a single element matching a condition

let menu = [
    {id: 1, item: "Tacos", category: "Meal", price: 12.29},
    {id: 2, item: "Burger", category: "Meal", price: 7.29},
    {id: 3, item: "Salad", category: "Meal", price: 8.29},
    {id: 4, item: "Ice tea", category: "Drink", price: 2.19},
    {id: 5, item: "Coke", category: "Drink", price: 2.29},
];

let matching = null;

// Put it in a function

// Grab Item by its ID 
function getItem(_arrayOfObjects, _searchId) {
    let numItems = _arrayOfObjects.length;
    for (let i = 0; i < numItems; i++) {
        if (_arrayOfObjects[i].id == _searchId) {
            matching = _arrayOfObjects[i];
            break
        }
    }
    if (matching != null) {
        console.log(matching.item + " costs $" + matching.price);
    } else {
        console.log("Item " + _searchId + " not found!");
    }
}

getItem(menu, 3);

// Find subset of elements that match a condition

function grabSubset(_arrayOfObjects, _searchCategory) {
    let matching = [];
    let numItems = _arrayOfObjects.length;
    for(i = 0; i < numItems; i++) {
        if (_arrayOfObjects[i].category == _searchCategory) {
            matching.push(_arrayOfObjects[i]);
        }
    }

    if (matching.length != 0) {
        let numMatches = matching.length;
        for(let i = 0; i < numMatches; i++) {
            console.log(matching[i].item + " costs $" + matching[i].price)
        }
    } else {
        console.log(`No items matched category ${_searchCategory}`)
    }
}

grabSubset(menu, "Meal")
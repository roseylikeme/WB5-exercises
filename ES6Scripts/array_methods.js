let cart = [
    {item: "Bread", price: 3.29, quantity: 2},
    {item: "Milk", price: 4.09, quantity: 1},
    {item: "T-Bone Steak", price: 12.99, quantity: 2},
    {item: "Baking Potato", price: 1.89, quantity: 6},
    {item: "Iceberg Lettuce", price: 2.06, quantity: 1},
    {item: "Ice Cream - Vanilla", price: 6.81, quantity: 1},
    {item: "Apples", price: 0.66, quantity: 6}
];

// (a) Search the course array using the map function to retrun the item name
// then use forEach to display the list of items

function getItemName(arrayElement){
    return arrayElement.item;
}
function displayName(arrayElement){
    console.log(arrayElement);
}
// Sorts the list before displaying [COMMENT OUT TO SEE UNSORTED]
cart.sort(function (a, b) {
    if (a.item < b.item) return -1;
    else if (a.item == b.item) return 0;
    else return 1;
});

let cartItem = cart.map(getItemName);
cartItem.forEach(displayName); // COMMENT OUT 

// (b) Write code that determines the total cost of everything in the cart using
// reduce(). Remember to account for the possibility of there being more than
// 1 unit (ex: 5 apples rather than)

function getTotalCost(currentTotal, arrayElement){
    return currentTotal + (arrayElement.price * arrayElement.quantity);
}

let totalCost = cart.reduce(getTotalCost, 0); //? What is the 0 for?

// console.log(`Total Cost: $${totalCost}`); // COMMENT OUT 



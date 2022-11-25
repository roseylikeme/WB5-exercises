let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Sour Patch", price: "2.79"},
    {product: "Warhead Variety 75pc", price: "12.15"},
    {product: "Toxic Waste", price: "2.97"},
    {product: "Mentos Candy", price: "4.28"},
    {product: "Life Savers", price: "3.78"},
    {product: "Ferrero 24", price: "10.48"}
];

// Which candies costs less than $4.00?
let candiesUnder4 = products.filter(arrayValue => arrayValue.price < 4);
for (i=0; i < candiesUnder4.length; i++){
    console.log(candiesUnder4[i].product + " $" + candiesUnder4[i].price);
}
// Which candies has "M&M" its name?
console.log()
let candiesWithNameMM = products.filter(arrayValue => arrayValue.product.includes("M&M"));
for(i=0; i<candiesWithNameMM.length; i++){
    console.log(candiesWithNameMM[i].product + " $" + candiesWithNameMM[i].price);
}

// Do we carry "Swedish Fish"?
console.log()
let swedishFish = products.find(arrayValue => arrayValue.product == "Swedish Fish");
if (swedishFish) {
    console.log("Yes, we have that product")
} else {
    console.log("No, we don't have that product.")
}
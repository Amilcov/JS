
const Ingredient = require("./ingredient.js");


const flour = new Ingredient("flour", 2.25, 5, "pound");
const eggs = new Ingredient("eggs", 3.00, 12, "piece");
const water = new Ingredient("water", 0.00, 1, "cup");
const apples = new Ingredient("apples", 1.30, 1, "pound");
const butter = new Ingredient("butter", 0.75, 8, "tablespoon");
const sugar = new Ingredient("sugar", 10.40, 5, "pound");


console.log(apples.calculateCost(5)) // 6.5
console.log(apples.calculateCost(20)) // 26
console.log(apples.calculateCost(3.5)) // 4.55

apples.printIngredient()
//         * apples (1 pound) Cost: $1.30

Ingredient.printIngredientList([flour, eggs, water, apples, butter, sugar])
// Ingredients:
//         * flour (5 pound) Cost: $2.25
//         * eggs (12 piece) Cost: $3.00
//         * water (1 cup) Cost: $0.00
//         * apples (1 pound) Cost: $1.30
//         * butter (8 tablespoon) Cost: $0.75
//         * sugar (5 pound) Cost: $10.40

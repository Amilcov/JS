class Ingredient {
  // Insert code here
  constructor(name, cost, quantity, unitOfMeasurement) {
       this.name = name;
       this.cost = cost;
       this.quantity = quantity;
       this.unitOfMeasurement = unitOfMeasurement;
  }

  printIngredient() {
    console.log (`${this.name} (${this.quantity} ${this.unitOfMeasurement}) Cost: ${this.cost}`)
  }
  
 
  static printIngredientList(...ingredients) {
    return ingredients.map(ingredient => ingredient.printIngredient);
  }

  calculateCost(units) {
    return units * this.cost;
  }

}

module.exports = Ingredient;

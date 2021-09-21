var sandwich = {
    bread:    "sourdough",
    protein:  "london broil",
    cheese:   "lacey swiss cheese",
    toppings: ["romaine lettuce", "heirloom tomatoes", "horseradish sauce"]
};
    
console.log(sandwich);

function sandwichFactory(bread, protein, cheese, toppings) {
    var sandwich = {};
    sandwich.bread = bread;
    sandwich.protein = protein;
    sandwich.cheese = cheese;
    sandwich.toppings = toppings;
    return sandwich;
}
    
var s1 = sandwichFactory("wheat", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
console.log(s1);

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

pizza1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);

pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])

pizza3 = pizzaOven("cauliflower", "BBQ", "provolone", ["chicken", "onions"]);

pizza4 = pizzaOven("thin", "none", ["american", "provolone"], ["philly-steak", "onions", "bell peppers", "mushrooms"]);



function randomPizza() {

}

console.log(pizza1, pizza2, pizza3, pizza4);
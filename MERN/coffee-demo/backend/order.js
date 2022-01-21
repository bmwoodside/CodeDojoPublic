const faker = require('@faker-js/faker');
class Order {
    constructor(){
        // milk, name, espresso shots, size, syrup, topping, coffee shop name, type of base
        const bases = ["dark roast", "light roast", "medium roast", "espresso"];
        const additives = ["milk", "soy milk", "coconut milk", "oat milk", "goat milk", "almond milk", "water"];
        const sweetener = ["honey", "sugar", "splenda", "pumpkin spice syrup", "simple syrup"];
        const sizes = ["unintelligible starbucks size", "small", "medium", "large", "bigpig"];

        this.baristaName = faker.name.findName();
        this.coffeeShop = faker.company.companyName() + " Coffee Roasters";
        this.base = Math.floor(Math.random() * bases.length);
        this.additives = Math.floor(Math.random() * additives.length);
        this.sweetener = Math.floor(Math.random() * sweetener.length);
        this.espressoShots = Math.floor(Math.random() * 10);
        this.cost = "$" + faker.commerce.price();
        this.size = sizes[Math.floor(Math.random() * sizes.length)];
    }

}

module.exports = Order;
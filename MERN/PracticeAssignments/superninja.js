class Ninja {
    constructor(name, health, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(`My ninja's name is ${ this.name }`)
    }

    showStats() {
        console.log(`${ this.name }\'s stats: Strength: ${ this.strength }, Speed: ${ this.speed }, Health: ${ this.health }`)
    }

    drinkSake() {
        this.health += 10;
        console.log(`${ this.name } drank some Sake and gained 10 health.`)
    }
}

const ninja1 = new Ninja("Hyabusa", 100);
// ninja1.sayName();
// ninja1.showStats();

// ninja1.drinkSake();
// ninja1.showStats();

class Sensei extends Ninja {
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10) {
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }

    speakWisdom() {
        super.drinkSake();
        console.log(`${ this.name } says: "Be careful, you cannot run forever."`)
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
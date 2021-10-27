
class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class unitCard extends Card {
    constructor(name, cost, power, resilience) {
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }

    attack(target) {
        if (target instanceof Card) {
            target.resilience -= this.power;
            console.log(`${ this.name } attacks ${target.name} for ${ this.power }. ${ target.name } has ${target.resilience} remaining resilience.`)
        } else {
            throw new Error('Target is not a unit');
        }
    }
}

class effectCard extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    use(target) {
        if (target instanceof Card) {
            target[this.stat] += this.magnitude;
        } else {
            console.log("Target is not a Unit");
        }
    }
}

const redBeltNinjaCard = new unitCard("Red Belt Ninja", 3, 3, 4);
const blackBeltNinjaCard = new unitCard("Black Belt Ninja", 4, 5, 4);

const hardAlgorithmCard = new effectCard("Hard Algorithm", 2, "Increase target's resilience by 3", "resilience", +3)
const unhandledPromiseCard = new effectCard("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2)
const pairProgrammingCard = new effectCard("Pair Programming", 3, "increase target's power by 2", "power", +2)


redBeltNinjaCard
hardAlgorithmCard.use(redBeltNinjaCard);
blackBeltNinjaCard
unhandledPromiseCard.use(redBeltNinjaCard);
pairProgrammingCard.use(redBeltNinjaCard);
redBeltNinjaCard.attack(blackBeltNinjaCard);
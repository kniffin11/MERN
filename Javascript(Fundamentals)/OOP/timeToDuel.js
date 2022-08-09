class Card{
    constructor(name, cost, power, resilience){
        this.name = name;
        this.cost = cost;
        this.power = power;
        this.resilience = resilience;
    }


}

class Unit extends Card{
    constructor(name, cost, power, resilience){
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }
    
    attack(target){
        target.resilience -= this.power;
    }
}

class Effect extends Card{
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
}

const red = new Unit("Red Belt Ninja", 3, 3, 4);
const black = new Unit("Black Belt Ninja", 4, 5, 4);

const algo = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);
const rej = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
const pair = new Effect("Hard Algorithm", 2, "increase target's power by 3", "power", 2);

red.algo()

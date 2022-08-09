class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        return this.name;
    }

    showStats(){
        return this.name + " has a speed of " + this.speed + ", a strength of " + this.strength + ", and a health of " + this.health + ".";
    }

    drinkShake(){
        this.health += 10;
        // so it is chainable
        return this;
    }
}

const n1 = new Ninja("Sam");
console.log(n1.sayName());
console.log(n1.showStats());
n1.drinkShake();
console.log(n1.showStats());
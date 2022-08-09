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

class Sensei extends Ninja {
    constructor(name){
        super(name);
        this.health = 200;
        this.wisdom = 10;
    }

    speakWisdom(){
        return "What oen programmer can do in one month, two programmers can do in two months.";
    }
}

const n1 = new Ninja("Sam");
console.log(n1.sayName());
console.log(n1.showStats());
n1.drinkShake();
console.log(n1.showStats());

const s1 = new Sensei("Master Sam");
console.log(s1.speakWisdom());
console.log(s1.showStats());
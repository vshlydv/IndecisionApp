
class Person {
    constructor(name = "Anonymous", age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi, I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is  ${this.age} year(s) old.`;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getDescription() {
        let descripton = super.getDescription();
        if(this.hasHomeLocation()) {
            descripton += ` I'm visiting from ${this.homeLocation}`;
        }
        return descripton;
    }

}

const me = new Traveler("Vishal Yadav", 21, "Indore");
const other = new Traveler();

console.log(me.getDescription());
console.log(other.getDescription());
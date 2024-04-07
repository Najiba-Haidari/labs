//PART 1
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
    name: "Leo",
    type: "Cat"
    }, 
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        }
    
    }

    const flea = {
        name: "Frank",
        type: "Flea",
        belongings : ["hat", "sunglasses"]
    }

    adventurer.companion.companion = flea;

console.log(adventurer)
adventurer.roll();


//PART 2
class Character {
    constructor (name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
    }
    }
    // Every character should also be able to make rolls. Add the roll method to the Character class.
    // Now, we can re-create Robin using the Character class!
    const robin = new Character("Robin");
    robin.inventory = ["sword", "potion", "artifact"];
    robin.companion = new Character("Leo");
    robin.companion.type = "Cat";
    robin.companion.companion = new Character("Frank");
    robin.companion.companion.type = "Flea";
    robin.companion.companion.inventory = ["small hat", "sunglasses"];

    console.log(robin)

//PART 3
class Adventurer extends Character {
    constructor (name, role) {
    super(name);
    // Adventurers have specialized roles.
    this.role = role;
    // Every adventurer starts with a bed and 50 gold coins.
    this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
    }
    }

class Companion extends Character{
    constructor(name,  type) {
        super(name);
        this.type= type;

    }
}

const Robin = new Adventurer("Robin", "hero") 
console.log(Robin)
const Leo = new Companion("Leo", "cat")
console.log(Leo)
const Frank = new Companion("Frank", "Flea" )
Frank.inventory.push("small hat", "sunglasses")
console.log(Frank)

//PART 4
// Add a static MAX
// _
// HEALTH property to the Character class, equal to 100.
// Add a static ROLES array to the Adventurer class, with the values “Fighter,
// ” “Healer,
// ” and
// “Wizard.
// ” Feel free to add other roles, if you desire!
// Add a check to the constructor of the Adventurer class that ensures the given role matches
// one of these values.
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
        inventory : ["hat", "sunglasses"]
    }

    adventurer.companion.companion = flea;

console.log(adventurer)
adventurer.roll();


//PART 2
class Character {
    static MAX_HEALTH = 100;
    constructor (name) {
    this.name = name;
    // this.health = 100;
    this.inventory = [];
    }
    
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        }
    }
    // Every character should also be able to make rolls. Add the roll method to the Character class.
    // Now, we can re-create Robin using the Character class!
    const zobin = new Character("Robin");
    zobin.inventory = ["sword", "potion", "artifact"];
    zobin.companion = new Character("Leo");
    zobin.companion.type = "Cat";
    zobin.companion.companion = new Character("Frank");
    zobin.companion.companion.type = "Flea";
    zobin.companion.companion.inventory = ["small hat", "sunglasses"];

    console.log(zobin)
   zobin.roll()

//PART 3
class Adventurer extends Character {
    static ROLES=["fighter", "healer", "wizard"];
    constructor (name, role) {
    super(name);
    // Adventurers have specialized roles.
    if (Adventurer.ROLES.includes(role)) {
        this.role = role;
    }
   
    // Every adventurer starts with a bed and 50 gold coins.
    this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
    }

    duel(opponent) {
        let health1 = this.constructor.MAX_HEALTH;
        let health2 = opponent.MAX_HEALTH
        while (health1 > 50 && health2 > 50) {
            let roll1 = this.constructor.roll();
            let roll2 = opponent.roll();
			if (roll1 > roll2) {
                health2 -= 1;
			} else if (roll2 > roll1) {
				health1 -= 1;
			} else {
                console.log("It's a tie")
            }
			console.log(` ${this.name}'s health: ${health1}`);
			console.log(`${opponent.name}'s health: ${health2}`);
		}
		if (health1 > 50) {
			console.log(`${this.name} wins the duel!`);
		} else {
			console.log(`${opponent.name} wins the duel!`);
		}

    }
    // static checkRoles(role){
        
    //     const foundRole = adventurer.ROLES.includes(role)
    //     if (!foundRole){
    //         return;
    //     }
    //     return this.role=role;
    // }
    }



class Companion extends Character{
    constructor(name,  type) {
        super(name);
        this.type= type;
        // this.inventory.push(["small hat", "sunglasses"])
    }
}

const robin = new Adventurer("Robin", "healer") 
console.log(robin)
const leo = new Companion("Leo", "bear")
console.log(leo)
const frank = new Companion("Frank", "Dog" )
frank.inventory.push(["small hat", "sunglasses"])
console.log(frank)
leo.companion = frank;
robin.companion = leo;
console.log('ROBIN', robin);


const mark = new Adventurer("mark","teacher");
robin.duel(adventurer);
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

  //PART 5
  class AdventurerFactory {
    constructor (role) {
    this.role = role;
    this.adventurers = [];
    }
    generate (name) {
    const newAdventurer = new Adventurer(name, this.role);
    this.adventurers.push(newAdventurer);
    }
    findByIndex (index) {
    return this.adventurers[index];
    }
    findByName (name) {
    return this.adventurers.find((a) => a.name === name);
    }
}
    const john = new Adventurer("John","Healer");
    const healers = new AdventurerFactory("Healer");
    healers.generate("John")
    console.log('john', john);
    console.log('HEALERS', healers);
    
    // const mark = new Adventurer("mark","teacher");
    // robin.duel(adventurer);

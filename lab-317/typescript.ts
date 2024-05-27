// @ts-check

class Vehicle {
  make: string;
  model: string;
  wheels: number;
  status: "started" | "stopped" = "stopped";

  constructor(make: string, model: string, wheels: number) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }
  start() {
    this.status = "started";
  }
  stop() {
    this.status = "stopped";
  }
}

class Car extends Vehicle {
  constructor(make: string, model: string) {
    super(make, model, 4);
  }
}

class MotorCycle extends Vehicle {
  constructor(make: string, model: string) {
    super(make, model, 2);
  }
}

function printStatus(vehicle) {
  if (vehicle.status === "started") {
    console.log("The vehicle is running.");
  } else {
    console.log("The vehicle is stopped.");
  }
}

// const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
// myHarley.start();
// printStatus(myHarley);
// console.log(myHarley.make.toUpperCase());

// const myBuick = new Car("Buick", "Regal");
// myBuick.wheels = myBuick.wheels - 1;
// console.log(myBuick.wheels);
// console.log(myBuick.model);

class NCycle<T> {
  make: T | T[];
  model: T | T[];
  wheels: T;
  status: "started" | "stopped" = "stopped";

  constructor(make: T | T[], model: T | T[], wheels: T) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }
  start() {
    this.status = "started";
  }
  stop() {
    this.status = "stopped";
  }

  print(param: number = 0) {
    if (typeof this.model != "object") {
      console.log(`This is a ${this.make} ${this.model} NCycle`);
    } else if (
      this.model &&
      this.make &&
      typeof (this.model === "object" && typeof (this.make === "object")) &&
      this.make.indexOf(param) !== -1 &&
      this.model.indexOf(param) !== -1
    ) {
      console.log(`This NCycle a ${this.make} ${this.model} ${param}`);
    } else {
      console.log("NCycle not added properly");
    }
  }

  printAll() {
    if (
      this.model &&
      this.make &&
      typeof (this.model === "object" && typeof (this.make === "object"))
    ) {
      for (let i = 0; i < this.make.length && i < this.model.length; i++) {
        console.log(`This NCycle is a ${this.make[i]} ${this.model[i]}`);
      }
    } else {
      console.log("NCycle not added properly in printAll");
    }
  }
}

const testCycle1 = new NCycle<number>(1, 2, 3);
testCycle1.print();
testCycle1.printAll();
const testCycle2 = new NCycle<string>("This ", "That", "four");
testCycle2.print();
testCycle2.printAll();
const testCycle3 = new NCycle<string>("Make", "Ten", "four");
testCycle3.print(4);
// testCycle3.printAll();

const makes4 = ["Volkswagon", "Tesla", "Audi"];
const models4 = ["Passat", "Model X", "A4"];
// const testCycle4 = new NCycle<string[]>(makes4, models4, 4);
const testCycle4 = new NCycle<string[]>(makes4, models4, ["four"]);

testCycle4.print(2);
testCycle4.printAll();
const makes5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const models5 = [1, 1, 2, 3, 5];
const models5 = [1, 1, 2, 3, 5, 7];
// const testCycle5 = new NCycle<number[]>(makes5, models5, 0);
const testCycle5 = new NCycle<number[]>(makes5, models5, [0]);
testCycle5.print(7);
testCycle5.printAll();

function add(x: number, y: number): number {
  return x + y;
}
console.log(add(testCycle1.make, testCycle5.model[1]));
// Error expected here
console.log(add(testCycle2.make, testCycle4.model[1]));

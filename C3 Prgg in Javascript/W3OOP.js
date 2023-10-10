// classes

// class Car {
//   constructor(color, speed) {
//     this.color = color;
//     this.speed = speed;
//   }
//   turboOn() {
//     console.log("turbo is on!");
//   }
// }

// const car1 = new Car();
// car1.turboOn();

// Polymorphism
// const bicycle = {
//   bell: function () {
//     return "ring,ring! Watch out, please!";
//   },
// };
// const door = {
//   bell: function () {
//     return "Ring,ring! Come here,please!";
//   },
// };

// // console.log(bicycle);
// // bicycle.bell();
// // door.bell();

// function ringTheBell(thing) {
//   console.log(thing.bell());
// }

// ringTheBell(bicycle);

// class Bird {
//   useWings() {
//     console.log("Flying!");
//   }
// }
// class Eagle extends Bird {
//   useWings() {
//     super.useWings();
//     console.log("Barely flapping!");
//   }
// }
// class Penguin extends Bird {
//   useWings() {
//     console.log("Diving!");
//   }
// }
// var baldEagle = new Eagle();
// var kingPenguin = new Penguin();
// baldEagle.useWings(); // "Flying! Barely flapping!"
// kingPenguin.useWings(); // "Diving!"

// Task 1: Code a Person class
class Person {
  constructor(name = "Tom", age = 20, energy = 100) {
    this.energy = energy;
    this.age = age;
    this.name = name;
  }
  sleep() {
    this.energy += 10;
  }
  doSomethingFun() {
    this.energy -= 10;
  }
}
// Task 2: Code a Worker class
class Worker extends Person {
  constructor(xp = 0, hourlyWage = 10, name = "Tom", age = 20, energy = 100) {
    super(name, age, energy);
    this.xp = xp;
    this.hourlyWage = hourlyWage;
  }
  doSomethingFun() {
    super.doSomethingFun;
  }
  sleep() {
    super.sleep;
  }

  goToWork() {
    this.xp += 10;
  }
}

// Task 3: Code an intern object, run methods
function intern() {
  let intern = new Worker();
  intern.name = "Bob";
  intern.age = "21";
  intern.energy = 110;
  intern.xp = 0;
  intern.hourlyWage = 10;
  intern.goToWork();
  return intern;
}

// Task 4: Code a manager object, methods
function manager() {
  const manager = new Worker("Alice", 30, 120, 100, 30);
  manager.doSomethingFun();
  return manager;
}

console.log(intern());
console.log(manager());

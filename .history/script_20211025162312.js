'use strict';

// // const Person = function (firstName, birthYear) {
// //   // Instance properties
// //   this.firstName = firstName;
// //   this.birthYear = birthYear;

// //   // this.calcAge = function () {
// //   //   console.log(2037-this.birthYear)
// //   // }
// // };

// // const sam = new Person('Kiroko', 1989);
// // const joy = new Person('Wanjiku', 1993);
// // const myles = new Person('Njenga', 2016);
// // console.log(sam, joy, myles);

// // // Prototypes

// // Person.prototype.calcAge = function () {
// //   console.log(2037 - this.birthYear);
// // };

// // sam.calcAge();
// // joy.calcAge();
// // myles.calcAge();

// // console.log(sam.__proto__.__proto__);
// // console.log(sam.__proto__.__proto__.__proto__);
// // console.log(sam.hasOwnProperty('firstName'));
// // console.log(Person.prototype.constructor);

// // const arr = [3, 5, 6, 6, 4, 5, 6, 7];
// // console.log(arr.__proto__);
// // console.log(arr.__proto__ === Array.prototype);

// // Array.prototype.unique = function () {
// //   return [...new Set(this)];
// // };

// // console.log(arr.unique());

// // /**
// //  * Challenge #
// //  * */

// // const ACCELERATE = 10;
// // const BRAKE = -5;

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   let accSpeed = (this.speed += ACCELERATE);
//   console.log(`${this.make} is going at ${accSpeed}km/h`);
// };

// Car.prototype.brake = function () {
//   let brakeSpeed = (this.speed += BRAKE);
//   console.log(`${this.make} is going at ${brakeSpeed}km/h`);
// };

// const car_1 = new Car('BMW', 120);
// const car_2 = new Car('Mercedes', 90);

// console.log(car_1);
// console.log(car_2);

// car_1.accelerate();
// car_1.accelerate();
// car_2.accelerate();

// car_1.brake();
// car_1.brake();
// car_2.brake();
// car_2.brake();

// // ////////////////////////////////////////////////
// // ES6 classes
// // ////////////////////////////////////////////////

// // // class declaration
// class Person {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     console.log(2040 - this.birthYear);
//   }
//   greet() {
//     console.log(`hey ${this.firstName}`);
//   }
//   get age() {
//     return 2040 - this.birthYear;
//   }
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not full name`);
//   }
//   get fullName() {
//     return this._fullName;
//   }
//   static hey() {
//     console.log('hey there 👋🏿');
//     console.log(this);
//   }
// }

// const jessica = new Person('samuel kiroko', 1966);
// console.log(jessica);
// jessica.calcAge();
// jessica.greet();
// Person.hey();
// console.log(jessica.age);

// const account = {
//   owner: 'Samuel',
//   movement: [200, 530, 120, 300],
//   get latest() {
//     return this.movement.slice(-1).pop();
//   },
//   set latest(mov) {
//     this.movement.push(mov);
//   },
// };

// console.log(account.latest);
// account.latest = 50;
// console.log(account.movement);

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// const sarah = Object.create(PersonProto);
// console.log(sarah.init('Sarah', 1979));
// sarah.calcAge();

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  get speedUs() {
    let miles = this.speed / 1.6;
    console.log(`${miles}mi/h`);
  }
  set speedUs(miles) {
    let km = miles * 1.6;
    console.log(`${km}mi/h`);
  }
}

const ford = new Car('Ford', 120);
console.log(ford);

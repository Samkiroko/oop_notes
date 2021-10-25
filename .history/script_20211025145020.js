'use strict';

// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // this.calcAge = function () {
//   //   console.log(2037-this.birthYear)
//   // }
// };

// const sam = new Person('Kiroko', 1989);
// const joy = new Person('Wanjiku', 1993);
// const myles = new Person('Njenga', 2016);
// console.log(sam, joy, myles);

// // Prototypes

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// sam.calcAge();
// joy.calcAge();
// myles.calcAge();

// console.log(sam.__proto__.__proto__);
// console.log(sam.__proto__.__proto__.__proto__);
// console.log(sam.hasOwnProperty('firstName'));
// console.log(Person.prototype.constructor);

// const arr = [3, 5, 6, 6, 4, 5, 6, 7];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// /**
//  * Challenge #
//  * */

// const ACCELERATE = 10;
// const BRAKE = -5;

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

// ////////////////////////////////////////////////
// ES6 classes
// ////////////////////////////////////////////////

// class declaration
class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`${this.firstName}`);
  }
}

const jessica = new Person('samuel', 1966);
console.log(jessica);
jessica.calcAge();
jessica.greet();

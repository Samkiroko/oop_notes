'use strict';

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // this.calcAge = function () {
  //   console.log(2037-this.birthYear)
  // }
};

const sam = new Person('Kiroko', 1989);
const joy = new Person('Wanjiku', 1993);
const myles = new Person('Njenga', 2016);
console.log(sam, joy, myles);

// Prototypes

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

sam.calcAge();
joy.calcAge();
myles.calcAge();

console.log(sam.__proto__.__proto__);
console.log(sam.__proto__.__proto__.__proto__);
console.log(sam.hasOwnProperty('firstName'));
console.log(Person.prototype.constructor);

const arr = [3, 5, 6, 6, 4, 5, 6, 7];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

/**
 * Challenge #
 * */

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  console.log(this.speed + 10);
};

Car.prototype.brake = function () {
  console.log(this.speed - 5);
};

const car_1 = new Car('BMW', 120);
const car_2 = new Car('Mercedes', 90);

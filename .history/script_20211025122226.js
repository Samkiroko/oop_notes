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

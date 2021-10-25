'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const sam = new Person('Kiroko', 1989);
const joy = new Person('Wanjiku', 1993);
const myles = new Person('Njenga', 1989);
console.log(sam, joy, myles);

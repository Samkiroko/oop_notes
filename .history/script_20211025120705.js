'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const sam = new Person('Kiroko', 1989);
console.log(sam);

'use strict';


//OOP
//Person функция шаблон
const Person = function (firstName, year) {
    this.firstName = firstName;
    this.year = year;
    // console.log(this)

//use much memory, don't use it
    // this.printAge = function () {
    //     console.log(2023 - this.year)
    // }
}
const arr = ['jo', 'mark', 'abram'];
let newarr = [];
for (const name of arr) {
    const n = new Person(name, 2000);
    newarr.push(n);
    // console.log(newarr)
}
// console.log(jo);
// newarr[0].printAge();
// console.log(newarr[0].firstName);

const dima = new Person('Dima', 1986);
const youra = new Person('Youra', 1981);

// console.log(dima.__proto__)
// console.log(newarr.__proto__)
// console.log(Array.prototype.__proto__)

// console.log(dima.printAge());
// console.log(dima.year);
// console.log(dima instanceof Person);


//Prototype

Person.prototype.printAge = function () {
    console.log(2023 - this.year)
}
Person.prototype.personClass = 'Human'

// console.log(dima.printAge())
// console.log(dima, youra)
// console.log(dima.hasOwnProperty('firstName'));
// console.log(dima.hasOwnProperty('personClass'));
// console.log(dima.personClass)


//Prototype Array

const numbers = [1,2,1];
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(numbers)))

// console.log(numbers.__proto__)
// console.log(numbers.__proto__.__proto__)
// console.log(numbers.__proto__.__proto__.__proto__)


//bad practice
Array.prototype.uniqueElements = function () {
    return [...new Set(this)]
}

// console.log(numbers.uniqueElements())

const h2 = document.querySelector('h2');
// console.dir(h2)
// console.dir(h => h*1)

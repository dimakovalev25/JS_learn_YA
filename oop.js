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

const numbers = [1, 2, 1];
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


//Class ES6

class User {
    constructor(name, password) {
        this.name = name;
        this.password = password;

    }

    printPass() {
        console.log(this.password)
    }
}

User.prototype.greet = function () {
    console.log(`Welcome ${this.name}`)
}
const alex = new User('alex', 11111);
// console.log(alex.printPass())
// console.log(alex.__proto__ === User.prototype)
// console.log(Object.getPrototypeOf(alex) === User.prototype)
// alex.greet()
//Setter Getter
// {
//     const account = {
//         owner: 'dima',
//         transaction: [300, 500, 700],
//
//         get lastTransaction() {
//             return this.transaction.slice(-1).pop();
//         },
//
//         set lastTransaction(trans) {
//             this.transaction.push(trans)
//         }
//     };
//
//     account.lastTransaction = 100;
//     console.log(account)
//
//     console.log(account.lastTransaction)
// }


//Реальное наследование в функциях конструкторах в JS!

const Persona = function (firstName, year) {
    this.firstName = firstName;
    this.year = year;

};

Persona.prototype.printAge = function () {
    console.log(this.year)
};

const Student = function (firstName, year, dept) {
    // this.name = name;
    // this.age = age;

    Persona.call(this, firstName, year);
    this.dept = dept;
};

Student.prototype = Object.create(Persona.prototype);

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName}, age is ${this.year} and i learn ${this.dept}`)
}

// console.log(ivan instanceof Student);
// console.log(ivan instanceof Persona);
// console.log(ivan instanceof Object);
Student.prototype.constructor = Student;

const ivan = new Student('ivan', 23, 'JS');
// ivan.introduce()
// ivan.printAge()
// console.log(ivan.__proto__);
// console.log(Object.getPrototypeOf(ivan))


//наследвание в Классах JS

class Vehicle {
    constructor(name, number) {
        this.name = name;
        this.number = number;
    }

    printName() {
        console.log(this.name)
    }
}

class ElVehicle extends Vehicle {
    constructor(name, number, charge) {
        super(name, number);
        this.charge = charge;
    }

    printName() {
        console.log(`Electro car ${this.name}`)
    }
}

// const tesla3 = new ElVehicle('tesla3', 1111, 33)
// console.log(tesla3);
// tesla3.printName()
// tesla3.color = 'red';
// console.log(tesla3)






//реальное наследование через Object.create

const PersonPrototype = function (name, year) {
    this.name = name;
    this.year = year;
    this.print = function () {
        console.log(this.name);
    }
}

// const dima = Object.create(PersonPrototype);
// console.log(dima)
// const jo = new PersonPrototype('jo', 22)
// jo.print();
const jo = Object.create(PersonPrototype);
const joJunior = Object.create(jo);
console.log(jo)
console.log(joJunior)




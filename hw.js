//HW

// {
//     const Car = function (name, speed) {
//         this.name = name;
//         this.speed = speed;
//     }
//
//     Car.prototype.accelerate = function () {
//         console.log(this.speed + 50)
//     }
//
//     Car.prototype.break = function () {
//         console.log(this.speed - this.speed)
//     }
//
//     const honda = new Car('honda', 120)
//     const lexus = new Car('lexus', 125)
//
// // console.log(honda, lexus)
// // console.log(honda.accelerate())
// // console.log(honda.break())
// // console.log(lexus.break())
// }

// class Car {
//     constructor(name, speed) {
//         this.name = name;
//         this.speed = speed;
//
//     }
//
//     accelerate() {
//         console.log(this.speed + 10)
//     }
//
//     break() {
//         console.log(this.speed - 10)
//     }
//
//     get speedMph() {
//         return this.speed = this.speed / 1.6
//         // console.log(`${this.speed / 1.6} Mph `)
//     }
//
//     set speedMph(speed) {
//         return this.speed = speed * 1.6
//         // console.log(`${this.speed / 1.6} Mph `)
//     }
//
// }

const Car = function (name, speed) {
    this.name = name;
    this.speed = speed;
}

Car.prototype.colorCar = function (color) {
    this.color = color;
    console.log(this.color)
}

Car.prototype.accelerate = function () {
    console.log(this.speed + 50)
}

const ElectricCar = function (name, speed, battery) {
    Car.call(this, name, speed)
    this.battery = battery;
}

ElectricCar.prototype = Object.create(Car.prototype);

ElectricCar.prototype.chargeBattery = function (chargeLevel) {
    this.battery = chargeLevel;
}

ElectricCar.prototype.accelerate = function () {
    this.battery -= 2;
    this.speed += 10;

}

// const tesla = new ElectricCar('tesla', 124, 33)
// tesla.chargeBattery(32)
// console.log(tesla)
// tesla.accelerate()
//
// console.log(tesla)
//
// tesla.color = 'red';
// console.log(tesla)
// tesla.colorCar('green')
// tesla.accelerate()
// console.log(tesla)

// const audi = new Car('audi', 140);
// console.log(audi)
// audi.speedMph = 100;
// console.log(audi.speed)


// class Vehicle {
//     constructor(name, number) {
//         this.name = name;
//         this.number = number;
//     }
//
//     up() {
//         this.number += 1;
//     }
//
// }
//
// class ElVehicle {
//     constructor(name, number, charge) {
//         // Vehicle.call(this, name, number)
//         this.name = name;
//         this.number = number;
//         this.charge = charge;
//
//     }
// }
//
// const teslaX = new ElVehicle('teslaX', 12144, 33);
// console.log(teslaX)


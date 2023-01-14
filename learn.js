// // let name = prompt('name?');
// // let lastName = prompt('last name?');
// // let age = prompt('age?');
// // console.log(`your name: ${name}, last name: ${lastName}, age: ${age}`);
//
// // let weight = prompt('weight?')
// // let height = prompt('height  metr?')
// //
// // result= weight/(height*height);
// // let index = result >= 25 ? true : false;
// //
// // alert(`Are you overweight: ${index}?`);
// // console.log(result);
// // let res = 88;
//
// // switch (res) {
// //     case 9:
// //         console.log('+')
// //         break
// //     case 10:
// //         console.log('-')
// //         break
// //     default:
// //         console.log('done')
// // }
//
// // let arr2 = 'tttttt'
// // let arr = [1, 2, 3, 4];
// //
// // arr = arr2.split('');
// // console.log(arr)
//
// // console.log(arr.length)
// // console.log(Array.isArray(arr))
// // console.log(arr.indexOf(2))
// // arr.push(555);
// // arr.unshift(44,77)
// // arr.shift();
// // arr.join('')
// // arr.splice(2)
// // // let t = arr.pop();
// // arr.reverse()
// // console.log(arr.concat(arr2))
// // console.log(t)
//
// // let test = 'test'
// // console.log(test.lastIndexOf('t'))
//
//
// // const PersData = ['Dima', 1986, 'unemployes'];
// // // console.log(PersData)
// //
// // const PersUser = {
// //     name: 'Dima',
// //     age : 33,
// //     job: 'programmer'
// // }
// // const Item = prompt('Choose beetween name, age and job')
// // console.log(PersUser[Item])
//
//
// const User = {
//     name: 'Dima',
//     age: 33,
//     year: 1986,
//     job: 'programmer',
//     calcAge: function () {
//         // console.log(this)
//         return this.age = 2023 - this.year
//     },
//     isMarried: true,
//     getSummary: function () {
//         return `${this.name} is ${this.job} and his age is ${this.calcAge()}!`
//     }
// }
//
// // console.log(User.calcAge())
// console.log(User.getSummary())
//
//
//
// const PersData = ['Dima', 1986, 'unemployes'];
// let arr = [];
// let num = 10;
// for (let i = 0; i < PersData.length; i++) {
//     if (typeof PersData[i] == 'number') break;
//     console.log(PersData[i])
// }
//
// // console.log(arr)
//
//
// let result;
// const firstName = 'Jack';
// const lastName = 'Brown';
// const space = ' ';
// const age = 25;
// const greeting = "Hey there!";
//
// // Concatanation
//
// result = firstName + space + lastName;
//
// result = greeting + space + 'My name is' + space + firstName
//     + ' ' + lastName + ". I'm " + age + " years old.";
//
// //Escaping
//
// result = 'I\'m 34 years old';
//
// result = "I like \"Star wars\" movie";
//
//
// // Properties and methods
//
// result = 'Hello! '.length;
// result = firstName.length;
//
// // concat()
//
// result = firstName.concat(' ', lastName);
//
// result = greeting.concat(space, 'My name is ', firstName, space, lastName);
//
// // toUpperCase()
//
// result = result.toUpperCase();
// result = result.toLowerCase();
//
// // index
// result = firstName[1];
//
// result = 'Hello'.indexOf('l');
// result = 'Hello lol'.lastIndexOf('l');
// result = firstName.indexOf('a');
// result = 'Hello lol'.indexOf('lo');
// result = firstName.indexOf('b');
//
//
// // charAt()
// result = firstName.charAt(1);
//
// const longString = 'Hi, I\'m a long string';
//
// result = longString.charAt(longString.length - 1);
//
// // substring()
// result = greeting.substring(4,9);
//
// // slice()
// result = greeting.slice(4,9);
// result = greeting.slice(-6);
//
// // split()
// result = longString.split(' ');
// const colors = 'red, orange, green, blue';
// result = colors.split(',');
//
//
// //replace()
// result = colors.replace('blue',
//     'yellow');
//
// // includes()
// result = colors.includes('indigo');
//
// console.log(result);
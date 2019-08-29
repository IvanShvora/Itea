// function Car() {
//     let enabled = false;
//     this.enableEngine = function() {
//         enabled = true;
//         console.log('The engine is enabled!!!');
//      }
//      this.disableEngine = function() {
//         enabled = false;
//         console.log('The engine is disabled!!!');
//      }
// }

// function Audi(model) {
//     Car.call(this);
//     this.model = model;
// }
// const q5 = new Audi('Q5');
// q5.enableEngine();


// const StudentFunctionality = function () {
//     this.sayCourse = function() {
//         return 'Course => 5';
//     }
// }
// const WorkerFunctionality = function () {
//     this.dayOff = function() {
//         return true;
//     }
// }

// const userTypes = {
//     'student': StudentFunctionality,
//     'worker': WorkerFunctionality
// }

// const User = function(name, type) {
//     this.name = name;
//     this.type = type;
//     if(type in userTypes) {
//         userTypes[type].call(this);
//     }
//     this.sayHello = function() {
//         return Hello I'm ${this.name}, and my type is ${this.type}
//     }
// }

// const vasya = new User('Vasya', 'student');

// console.log(vasya.sayHello());
// console.log(vasya);


// function getGreet (greetingWord){
//     function getName(name){
// return greetingWord + name;
//     }
// return getName;
    

// }
// const greet = getGreet("Hello"+ ' ');
// console.log(greet("Alex"));
// console.log(greet("Maxx"));
// console.log(greet("Jax"));

// /* 'use strict'; */
// const academy = {};

// Object.defineProperty(academy, 'name', {
//  configurable: false,
//  value: 'Js-Advanced'
// });

// delete academy.name;
// console.log(academy);





// Yuriy Petrichenko, [27.08.19 21:23]
// /* 'use strict'; */
// const academy = {
//  name: 'Alex',
//   age: 21
// };

// Object.defineProperty(academy, 'getFullInfo', {
//  get: function() {
//    return "Hello I'm " + this.name + 'My age: ' + this.age
//   }
// });

// console.log(academy.getFullInfo)






//patern

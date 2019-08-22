// function func(a) {
//     if (a < 50 && a >= 20) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(func(17));



//leson 2

// const human = { greet: 'Hello World!'};
// const user = { 
// age: 21,
// name: "Ng-speedster"
// };
// user._proto_=humen;
// for(let key in user){
// if(user.hasOwenProperty(key))
// console.log(key);
// }

// let fruits = {
//   apple: 3,
//   lemon: 0,
//   bananas: 5,
//   pineapple: 0
// };

// let vegetables = {
//   potato: 2,
//   tomato: 1,
//   carrot: 0
// };

// let sortFruits = Object.setPrototypeOf(fruits, vegetables);
// for (let key in fruits) {
//   if (sortFruits[key]) {
//      console.log(key);
//   }
// }

// function Person (name, sename){
//     this.name = name;
//     this.sename=sename;
//     this.sayHallo = function() {
//         console.log("Hello"+ " " + this.name + " " + this.sename);
//     }
// }
// const ivan = new Person ("Ivan", "Shvora");
// ivan.sayHallo();
const calc = new Calculator();{
    calc.sum(1,20);
    console.log(calc.sum);
}


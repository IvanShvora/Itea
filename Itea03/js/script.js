// const noBinding = {
//     person: 'Ng-speedster',
//      showText(){
//      setTimeout(this.printInfo.bind(this),2000)
//      },
//      printInfo() {
//      document.write(`Hello ${this.person}`);
//      }
//    }
//    noBinding.showText();


// let fruits = [
//     {
//        name: 'Lemon',
//        color: 'Yellow'
//     },
//    {
//        name: 'Banana',
//        color: 'Yellow'
//     },
//    {
//        name: 'pineapple',
//        color: 'Brown'
//     }
//   ];
//     function fruitsPrint() {
//         document.write(`Fruit name:${this.name},  with color:  ${this.color}.` );
//         document.write('<hr>');
//     }
  
//   for (let i = 0; i < fruits.length; i++) {
//     fruitsPrint.call(fruits[i],fruits.name, fruits[i].color);
//   }
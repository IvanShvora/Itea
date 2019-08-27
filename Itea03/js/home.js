let fruits = [
    {
      name: 'Lemon',
      color: 'Yellow'
    },
    {
      name: 'Apple',
      color: 'Red'
    },
    {
      name: 'Pineapple',
      color: 'Brown'
    }
  ];
  
  function fruitsPrint() {
    document.write(`Fruit name:${this.name},  with color:  ${this.color}.` );
    document.write('<hr>');
  }
  
  for (let i = 0; i < fruits.length; i++) {
    fruitsPrint.apply(fruits[i], [fruits.name, fruits.color]);
  
  }
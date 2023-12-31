/*
Creational Design patterns
    - Creational design patterns provide optimized object creation techniques
    - They are usefull in  
        - Multiple Objects that share similar characteristics need to be created
        - Implementations of a class library needs to be hidden
        - A system should be independent of how its objects and products are created
    -Factory Pattern. 
        - This pattern provides a template that can be used to create objects
        - Used in complex situations where the type of the object required varies and needs to be specified in each case
    - Other common patterns include 
        - the Constructor Pattern, 
        - the Singleton Pattern, 
        - the Builder Pattern, 
        - the Prototype Pattern, 
        - the Abstract Pattern.    
*/
class IceCreamFactory {
  constructor() {
    this.createIcecream = function (flavor) {
      let iceCream;
      if (flavor === "chocolate") {
        iceCream = new Chocolate();
      } else if (flavor === "mint") {
        iceCream = new Mint();
      } else if (flavor === "strawberry") {
        iceCream = new Strawberry();
      }
      return iceCream;
    };
  }
}

class Chocolate {
  constructor() {
    this.icecreamFlavor = "chocolate";
    this.message = function () {
      return `You chose the ${this.icecreamFlavor} flavor.`;
    };
  }
}

class Mint {
  constructor() {
    this.icecreamFlavor = "mint";
    this.message = function () {
      return `You chose the ${this.icecreamFlavor} flavor.`;
    };
  }
}

class Strawberry {
  constructor() {
    this.icecreamFlavor = "strawberry";
    this.message = function () {
      return `You chose the ${this.icecreamFlavor} flavor.`;
    };
  }
}

// creating objects
const iceCreamfactory = new IceCreamFactory();

const chocolate = iceCreamfactory.createIcecream("chocolate");
const mint = iceCreamfactory.createIcecream("mint");
const strawberry = iceCreamfactory.createIcecream("strawberry");

console.log(chocolate.message());
console.log(mint.message());
console.log(strawberry.message());

// function ToyFactory() {
//   this.toy = ToyDuck;
//   this.createToy = function (toyChosen) {
//     if (toyChosen.toyType == "duck") {
//       this.toy = ToyDuck;
//     } else if (toyChosen.toyType == "car") {
//       this.toy = ToyCar;
//     }
//     return new this.toy(toyChosen);
//   };
// }

// function ToyDuck(toyObj) {
//   this.color = toyObj.color;
//   this.price = toyObj.price;
// }

// function ToyCar(toyObj) {
//   this.color = toyObj.color;
//   this.price = toyObj.price;
//   this.name = toyObj.name;
// }

// var toyFactory = new ToyFactory();
// var car = toyFactory.createToy({
//   toyType: "car",
//   color: "blue",
//   price: 12,
//   name: "honda",
// });

// console.log(car);
// console.log(car instanceof ToyCar);

// var duck = toyFactory.createToy({
//   toyType: "duck",
//   color: "yellow",
//   price: 5,
// });

// console.log(duck);
// console.log(duck instanceof ToyDuck);

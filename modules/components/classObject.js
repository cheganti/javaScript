export class PersonClass{
    constructor(name){
      this.name = name
    }
  hello(){
    console.log(`hello ${this.name} and my age is ${this.age}`)
  }
 }
 

 export class Leela extends PersonClass{
    constructor(age){
        super('leela');
        this.age = age;
    }
    hello(){
        console.log("Hello")
    }
    helloTwice(){
        super.hello();
        super.hello();
    }
 }
//  let person  = new Person('Ravi');
//  person.hello();
 
//  console.log(person.__proto__ === Person.prototype)
 
 // function Person(){
 //   this.name = 'Leela';
 //   this.hello = function(){
 //     console.log(`Hello world this is ${this.name}`)
 //   }
 // }
 
 // const p1 = new Person();
 // p1.hello();
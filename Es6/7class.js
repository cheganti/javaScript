class Person{
    constructor(name){
      this.name = name
    }
  hello(){
    console.log(`hello ${this.name}`)
  }
 }
 
 let person  = new Person('Ravi');
 person.hello();
 
 console.log(person.__proto__ === Person.prototype)
 
 // function Person(){
 //   this.name = 'Leela';
 //   this.hello = function(){
 //     console.log(`Hello world this is ${this.name}`)
 //   }
 // }
 
 // const p1 = new Person();
 // p1.hello();
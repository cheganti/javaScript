/*
- These patterns deal with object relationships and the structure of objects
- With structural patterns, 
    - you can add functionalities to objects so that restructuring some parts of the system does not affect the rest
-  Decorator pattern  
    - The Decorator Pattern is a structural pattern that allows behavior to be added to an individual object dynamically without affecting the behavior of other objects from the same class. 
- Other common patterns include 
    - the Facade Pattern, 
    - the Adapter Pattern, 
    - the Bridge Pattern, 
    - the Composite Pattern, 
    - the Proxy Pattern,
    - the Flyweight Pattern
    */ 



class Text {
    constructor(value) {
      this.value = value;
    }
  }
   
  function applyHeadingStyles(text) {
    text.color = "gray";
    text.size = "18px";
    return text;
  }
   
  function changeFont(text, font) {
    text.font = font;
    return text;
  }
   
//   const text1 = new Text("Hello world.");
//   const heading = applyHeadingStyles(text1);
//   const textWithFont = changeFont(text1, "Arial");
   
//   console.log(heading);
//   console.log(textWithFont);

class SuperHero {
    constructor(name,power) {
      this.name = name
      this.power = power
    }
  }

  function SuperHeroWithSword(superhero){
      superhero.sword = true
      superhero.hasSword= function(){
      return `${this.name}'s power is ${this.power}, and he also has a sword now.`
    }
    return superhero;
  } 
  
  function SuperHeroWithSuperSpeed(superhero) {
      superhero.superSpeed = true
      superhero.hasSuperSpeed= function(){
      return `${this.name}'s power is ${this.power}, and he also has the super speed now.`
    }
    return superhero;
  }
  
  function SuperHeroWithSpeedandSword(superhero){
      superhero.speedAndSword = true
    
    superhero.hasSpeedAndSword = function(){
      return `${this.name}'s power is ${this.power}, and he also has both super speed and a sword now.`
    }
    return superhero;
  }

  var superhero1 = new SuperHero("Fire Man", "Fire")
  console.log(SuperHeroWithSword(superhero1))
  console.log(SuperHeroWithSuperSpeed(superhero1))
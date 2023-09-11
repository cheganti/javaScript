/*
- Behavioral patterns deal with communication between different objects in a system.
- They also assign responsibilities to objects and ensure that they all have synchronized information. 
- Chain of Responsibility pattern
*/ 
class EmployeeChain 
{
  setNextEmp(nextEmpInChain){}
  assignWork(req){}
} 
  
class Employee
{
  constructor(name,level){
    this.name = name
    this.level = level
  }
  
  getLevel(){ 
    return this.level
  } 

  getName(){
    return this.name
  }
  
} 
  
class EasyLevelWorkHandler extends EmployeeChain
{
  constructor(){
    super()
    this.nextEmpInChain = new EmployeeChain()
  } 
  
  setNextEmp(nextEmpObj){ 
    this.nextEmpInChain = nextEmpObj; 
  } 
  
  assignWork(req) { 
    if (req.getLevel() == "Easy") { 
      console.log("Easy work assigned to: " + req.getName()); 
    }else{ 
      this.nextEmpInChain.assignWork(req); 
    } 
  } 
} 
  
class MediumLevelWorkHandler extends EmployeeChain
{ 
  constructor(){
    super()
    this.nextEmpInChain = new EmployeeChain()
  } 
  
  setNextEmp(nextEmpObj){ 
    this.nextEmpInChain = nextEmpObj; 
  } 
  
  assignWork(req) { 
    if (req.getLevel() == "Medium") { 
      console.log("Medium work assigned to: " + req.getName()); 
    }else{ 
      this.nextEmpInChain.assignWork(req); 
    } 
  } 
} 


class HardLevelWorkHandler extends EmployeeChain
{ 
  constructor(){
    super()
    this.nextEmpInChain = new EmployeeChain()
  } 
  
  setNextEmp(nextEmpObj){ 
    this.nextEmpInChain = nextEmpObj; 
  } 
  
  assignWork(req) { 
    if (req.getLevel() == "Hard") { 
      console.log("Hard work assigned to: " + req.getName()); 
    }else{ 
      this.nextEmpInChain.assignWork(req); 
    } 
  } 
} 


var w1 = new EasyLevelWorkHandler(); 
// var w2 = new MediumLevelWorkHandler(); 
// var w3 = new HardLevelWorkHandler(); 
// w1.setNext(w2); 
// w2.setNext(w3);

const emp3 = new Employee("Shawn","Hard")
console.log(w1.assignWork(emp3));
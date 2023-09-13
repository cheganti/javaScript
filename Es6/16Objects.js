let obj1={
    name: 'Leela'
}

let obj2={
    age:30
}

let obj= Object.assign(obj1,obj2)
console.log(obj);

class Obj1{
    constructor(){
        this.name = 'Leela'
    }
}

class Obj2{
    constructor(){
        this.age = 30
    }
}

let Oobj1 = new Obj1();
let Oobj2 = new Obj2();
console.log(Oobj1 instanceof Obj1)
console.log(Oobj2 instanceof Obj2)
let Obj = Object.assign({},Oobj1,Obj1);

// console.log(Obj instanceof Obj1)
// console.log(Obj)

// console.log(Obj.__proto__== Obj1.prototype)

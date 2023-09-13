class Person{
    constructor(name){
        this._name = name;
    }

    get name(){
        return this._name.toUpperCase();
    }
    set name(value){
        if(value.length>2){
            this._name = value;
        }else{
            console.log("Not saved")
        }
    }
}

let person = new Person('Leela');
console.log(person.name);

person.name = "Le";
console.log(person.name)
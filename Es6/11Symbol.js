let symbol = Symbol('debug');
console.log(typeof symbol);

let obj = {
    name:'Leela',
    [symbol]:22
}

console.log(obj[symbol]);

//key for symbol wouold not displayed that is the feature
for(let key in obj){
    console.log(key);
    console.log(obj[key])
}


//sharing symbol

let symbol1 = Symbol.for('age');
let symbol2 = Symbol.for('age');
console.log(symbol1 == symbol2)

let person = {
  name:'Leela',
  age:27
};

function  makeAge(){
  let symbol3 = Symbol.for('age');
  person[symbol3] = 30; 
}

makeAge();
console.log(person[symbol1]);
console.log(person['age'])
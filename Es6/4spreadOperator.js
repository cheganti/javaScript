var numbers = [1,2,3,4];
console.log(...numbers);
console.log(Math.max(...numbers));

var obj = {
    name:'Ravi',
    age:35,
    gender:'male'
}

var obj1 = {
    name:'John',
    age:30,
    hobbies:['circket']
}
 
console.log({...obj,...obj1});

let arr1 = [100,200,300];

let arr2 = [400,500,600];

console.log([...arr1,...arr2])
let numbers = [1,2,3];

// let a = numbers[0];
// console.log(a);

let [a,...b] = numbers;

// console.log(a);
// console.log(b);
// console.log(c);

let a1 = 10;
let b1 = 20;
let c1 = b1;
b1 = a1;
a1 = c1;

// console.log(a1,b1);

let a2 = 10;
let b2 =20;
 [b2,a2] = [a2,b2];

//  console.log(a2,b2)


let obj = {
    name:'Ravi',
    age:30,
    hello:function(){
        console.log("Hello")
    }
}

let {name,hello,hello:greet} = obj;

console.log(name);
greet();
hello();
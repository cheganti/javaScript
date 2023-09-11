// const multiply = function (x) {
//   return function (y) {
//     return x * y;
//   };
// };

// let multiplyBytwo = multiply(2);
// console.log(multiplyBytwo(3))

let multiply = function(x,y){
    return (x*y);
}

let multiplyBytwo = multiply.bind(this,2);
console.log(multiplyBytwo(3))

const multiply1 = function(x){
    return function(y){
        return x*y
    }
}
let multiplyBytwo1 = multiply1(2);
console.log(multiplyBytwo1(3));
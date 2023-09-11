// let fruits = ["Apple", "Banana", "Mango"];
// let [a,...b] = fruits;
// console.log(a);
// console.log(b);

let person = { name: "Peter", age: 28 };
let { name, ...age } = person;
// console.log(name);
// console.log(age)

// var fruits = ["Banana", "Orange", "Apple", "Papaya", "Mango"];
// console.log(fruits.sort());
// console.log(fruits.reverse())

var numbers = [5, 20, 10, 75, 50, 100];

// console.log(
//   numbers.sort(function (a, b) {
//     return b - a;
//   })
// );
let arr = [];
for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length-i-1; j++) {
    if (numbers[j+1] < numbers[j]) {
        [numbers[j+1],numbers[j]] = [numbers[j],numbers[j+1]]
    }
  }
}
console.log(numbers);
console.log(numbers.pop());
console.log(numbers.unshift(12))
console.log(numbers);



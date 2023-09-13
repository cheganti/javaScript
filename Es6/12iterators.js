let numbers = ["aaa","bbb"];
console.log(numbers[Symbol.iterator]);
let itfn=numbers[Symbol.iterator]();

console.log(itfn.next())
console.log(itfn.next())

console.log(itfn.next())
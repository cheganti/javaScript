let set = new Set([1,2,3]);

set.add(5);
console.log(set.size);
console.log(set.has(30))
for(let value of set){
  console.log(value)
}

// Weak set

let obj1 = {a:1};
let obj2 = {b:1}
let set1 = new WeakSet([obj1,obj2]);

console.log(set1.has(obj2))
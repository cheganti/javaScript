function sumOfNumber(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}

function memoize(fn) {
  let mem = {};
  return function (...args) {
    if (args[0] in mem) {
      return mem[args[0]];
    } else {
      let result = fn(args[0]);
      mem[args[0]] = result;
      return result;
    }
  };
}
console.time();
const efficient = memoize(sumOfNumber);
console.log(efficient(5));
console.timeEnd();
console.time();
console.log(efficient(5));
console.timeEnd();
console.time();
console.log(efficient(5));
console.timeEnd();

// setInterval(function(){
//     console.log("Hello from setInterval")
// },500);
// setTimeout(function(){
//     console.log("Hello from setTimeOut")
// },500)

// console.log(sumOfNumber(5));
// var twoSum = function(nums, target) {
//     for (let index = 0; index < nums.length; index++) {
//         const diff = target - nums[index];
//         const diffIndex = nums.indexOf(diff);
//         // "diffIndex !== index" takes care of same index not being reused
//         if (diffIndex !== -1 && diffIndex !== index) {
//             return [index, diffIndex];
//         }
//     }
// };

// const nums = [2, 7, 11, 15,7];
// console.log(twoSum(nums,14));

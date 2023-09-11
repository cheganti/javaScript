// const cart = ["Jeans", "Shirt"];

// function createOrder(cart) {
//   const pr = new Promise(function (resolve, reject) {
//     if (cart[0] == "Jeans") {
//       resolve(cart[0]);
//     } else {
//       const err = new Error("Cart is not matching!!!");
//       reject(err);
//     }
//   });
//   return pr;
// }

// createOrder(cart)
//   .then(function (item) {
//     console.log(item);
//   })
//   .catch(function (err) {
//     console.log(err);
//   })
//   .then(function () {
//     console.log("No matter what happens, I will definietly be called.");
//   })
//   .finally(() => {
//     console.log("Experiment completed");
//   });
// const promise1 = new Promise(function (resolve, reject) {
//   resolve(5);
// });
// const promise2 = Promise.resolve(6);
// const promise3 = 7;

// Promise.all([promise1, promise2, promise3])
//   .then(function (values) {
//     console.log(values);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// const pr1 = Promise.resolve(5);
// const pr2 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     reject();
//   }, 1500);
// });

// const pr3 = [pr1, pr2];

// Promise.allSettled(pr3).then(function (results) {
//   results.forEach((element) => {
//     console.log(element.status);
//   });
// });

function step1(value, error) {
  return new Promise((resolve, reject) => {
    if (!error) {
      resolve(value + 10);
    } else {
      reject("Something went wrong from step1");
    }
  });
}

function step2(value, error) {
  return new Promise((resolve, reject) => {
    if (!error) {
      resolve(value + 10);
    } else {
      reject("Something wrong from step2");
    }
  });
}

// step1(10,false)
// .then((result1)=>step2(result1,false))
// .then((result2)=>{console.log(result2)})
// .catch((error)=>console.log(error));

const p1 = Promise.resolve("Like if you understood callbacks");
const p2 = 100;
const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "subscribe for more");
});
// const p4 = Promise.reject("reject");

// Promise.all([p1,p2,p3]).then((values)=>console.log(values));
// Promise.race([p1,p2,p3]).then((value)=>console.log(value));
// Promise.allSettled([p1,p2,p3,p4]).then((value)=>console.log(value));
// Promise.any([p1,p2,p3,p4]).then((value)=>console.log(value));

//realtime usage of promise
// fetch('https://api.github.com/users')
// .then((response)=>response.json())
// .then((result)=>console.log(result));

// axios.get('https://api.github.com/users')
// .then((result)=>console.log(result));

async function result() {
  let result1 = await step1(10, false);
  // console.log(result1);
  return result1;
}
async function result2() {
  let result = await Promise.resolve(5);
  return result;
}
result2().then((res) => console.log(res));

result().then((result) => console.log(result)).catch((err)=>console.log(err));

// firstFunction(function () {
//   secondFunction(function () {
//     thirdFunction(function () {
//       fourthFunction();
//     });
//   });
// });

// function firstFunction(callback) {
//   console.log("First Function!!!...");
//   callback();
// }

// function secondFunction(callback) {
//   console.log("second Function!!!...");
//   callback();
// }

// function thirdFunction(callback) {
//   console.log("third Function!!!...");
//   callback();
// }

// function fourthFunction() {
//   console.log("Fourth Function!!!...");
// }

// function step1(val, callback) {
//   callback(val + 10, false);
// }

// function step2(val, callback) {
//   callback(val + 20, false);
// }

// function step3(val, callback) {
//   callback(val + 30, true);
// }
// step1(10, function (value1, error) {
//   if (!error) {
//     console.log(value1);
//     step2(value1, function (value2, error) {
//       if (!error) {
//         console.log(value2);
//         step3(value2, function (value3, error) {
//           if (!error) {
//             console.log(value3);
//           }
//         });
//       }
//     });
//   }
// });

/* call back example start*/
// const posts = [
//   { title: "Post One", body: "This is post one" },
//   { title: "Post Two", body: "This is post two" },
// ];

// function getPosts() {
//   setTimeout(() => {
//     let output = "";
//     posts.forEach((post) => {
//       output += post.title;
//     });
//     console.log(output);
//   }, 1000);
// }

// function createPost(post, callback) {
//   setTimeout(() => {
//     posts.push(post);
//     callback();
//   }, 2000);
// }

// createPost({ title: "Post Three", body: "This is post Three" }, getPosts);
/* call back example End*/

/* Promises Start*/
const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += post.title;
    });
    console.log(output);
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong!...");
      }
    }, 2000);
  });
}
// createPost({ title: "Post three", body: "this is post three" })
// .then(getPosts)
// .catch((err)=>{console.log(err)})
/*Promse.all*/ 
const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "Good Bye");
});
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json())
// Promise.all([promise1, promise2, promise3,promise4]).then((values) =>
//   console.log(values)
// );
/* Promises End*/
/*Async Await*/
 async function init(){
  await createPost({ title: "Post three", body: "this is post three" });
  getPosts();
 }

 init()


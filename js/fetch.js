// var data = fetch("https://dummyjson.com/products");
// console.log(data);
// var productCategory = {};
// data.then(function (res) {
//   res.json().then((res1) => {
//     const prod = res1.products;
//     for (let i = 0; i < prod.length; i++) {
//         let obj = prod[i];
//      if(productCategory[obj['category']]){
//         productCategory[obj['category']].push(obj)
//      }else{
//         productCategory[obj['category']] = [obj]
//      }
//     }
//   });
// });
// console.log(productCategory)

var data = fetch("https://dummyjson.com/products");
let catObj = {};
var new_collection = [];
data.then(function (res) {
  res.json().then((jsonData) => {
    console.log(jsonData);
    const products = jsonData.products;
    const output1 = products.reduce((acc, curr) => {
      if (acc[curr.title]) {
        acc[curr.title] = acc[curr.title] + 1;
      } else {
        acc[curr.title] = 1;
      }
      return acc;
    }, {});
    console.log(output1);

    const output = products.reduce((acc, curr) => {
      if (acc[curr.category]) {
        acc[curr.category] = acc[curr.category] + 1;
      } else {
        acc[curr.category] = 1;
      }
      return acc;
    }, {});
    console.log(output);
    for (let i = 0; i < products.length; i++) {
      let obj = products[i];
      if (catObj[obj["category"]]) {
        catObj[obj["category"]].push(obj);
      } else {
        catObj[obj["category"]] = [obj];
      }
    }

    for (var key in catObj) {
      catObj[key].sort(function (a, b) {
        return a - b;
      });

      var new_obj = {};
      new_obj[key] = catObj[key];
      new_collection.push(new_obj);
    }
  });
});
console.log(new_collection);
console.log(catObj);

// const GIHUB_API = "https://api.github.com/users/cheganti";

// const user = fetch(GIHUB_API);
// console.log(user);

// user.then(function (data) {
// //   console.log(data.json());
// data.json().then((res)=>{
//     console.log(res)
// })

// }).catch(function(err){
//     console.log(err);
// });

document.querySelector("#link").addEventListener("click", function (e) {
  alert("link clicked");
  e.preventDefault();
});

var data1 = fetch("https://jsonplaceholder.typicode.com/posts");
data1.then((res) => {
  res.json().then((posts) => {
    console.log(posts.filter((post) => post.id > 5));
  });
});

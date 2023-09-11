fetch("https://dummyjson.com/comments").then((response) =>
  response.json().then((result) => {
    const data = result.comments;
    const userWithComments = data.reduce((prev, curr, index, arr) => {
      if (prev[curr.user.username]) {
        curr.user.username += 1;
      } else {
        prev[curr.user.username] = 1;
      }
      return prev;
    }, {});
    console.log("Reduce: ", userWithComments);
    let userDetails = {};
    for (let i = 0; i < data.length; i++) {
      if (data[i].user.username in userDetails) {
        userDetails[data[i].user.username] += 1;
      } else {
        userDetails[data[i].user.username] = 1;
      }
    }
    console.log("For: ", userDetails);
  })
);

fetch("https://dummyjson.com/products").then((response) => {
  response.json().then((result) => {
    const data = result.products;
    const brandObj = data.reduce((acc, curr) => {
      if (acc[curr["brand"]]) {
        acc[curr["brand"]] += 1;
      } else {
        acc[curr["brand"]] = 1;
      }
      return acc;
    }, {});
    console.log("Using Reduce: ", brandObj);
    let brandCountObj = {};
    for (let i = 0; i < data.length; i++) {
      if (data[i].brand in brandCountObj) {
        brandCountObj[data[i].brand] += 1;
      } else {
        brandCountObj[data[i].brand] = 1;
      }
    }
    console.log("Using For: ", brandCountObj);
    // Filter Object
    // Object.filter = (obj,predecate)=>{
    //     Object.fromEntries(Object.entries(obj).filter(predecate))
    // }
   let brnadCoutn =  Object.fromEntries(Object.entries(brandCountObj).filter(([brand, count]) => count > 1));
   console.log("Brand Count > 1 :",brnadCoutn)
  });
});

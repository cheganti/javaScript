fetch("https://dummyjson.com/carts").then((response) => {
  response.json().then((result) => {
    const data = result.carts;
    console.log(data);
    let newAr = [];
    for (let i = 0; i < data.length; i++) {
      data[i].products.filter((x) => {
        if (x.quantity===1) {
          newAr.push(x);
        }
      });
    }
    console.log(newAr.sort((a,b)=>a.id-b.id));
  });
});

let fruits = {
    name:'apple'
    };
    
    let vegetables = {
        name:'pototo'
    }
    
    let basket = new Map();
    basket.set('fruits', fruits)
    basket.set('veggie', vegetables)
    
//     console.log(basket.size);
    basket.set('veggie', vegetables)
//     console.log(basket.size);
    
//     console.log(basket.get('fruits'))
    // basket.delete('fruits')
    // basket.clear();
    // console.log(basket.size);
    
//     console.log(basket.keys())
    
//     for(let key of basket.keys()){
//       console.log(key)
//     }
    
    // for(let entry of basket){
    //   console.log(entry)
    // }

let key1 = {
    a:1
}
let key2 = {
    b:1
}

let basket1 = new WeakMap();
basket1.set(key1,fruits);
basket1.set(key2,vegetables)

console.log(basket1.get(key1))












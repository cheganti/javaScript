let promise1= new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('Resolved')
    }, 1000);
})

let promise2 = new Promise((resovle,reject)=>{
    setTimeout(() => {
        rejected('Rejected2')
    }, 2000);
})
// all expects all the promises to be completed else it will go to the catch block
Promise.all([promise1,promise2])
.then((data)=>{
  console.log(data)
}).catch(error=>{
  console.log(error.message)
})

// race will execute and return which ever is completed first either reject or resolve
Promise.race([promise1,promise2])
.then((data)=>{
  console.log(data)
}).catch(error=>{
  console.log(error)
})
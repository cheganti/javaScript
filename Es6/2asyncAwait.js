async function asynFun(){
    return "Hello world"
}
function message(){
    return new Promise(resolve=> resolve("Hello world"))
}
// console.log(message())
// console.log(asynFun());


async function message1(){
    let firstWord = await new Promise(resolve=>{
        setTimeout(() => {
            resolve('hello')
        }, 1000);
        
    })
    let secondWord = await new Promise(resolve=>{
        setTimeout(() => {
            resolve('world')
        }, 1000);
       
    })
console.log(`Done, ${firstWord} ${secondWord}`)
}

message1();

let pro = new Promise((resolve,reject)=>{
    if(false){
        resolve("resolved")
    }else{
        reject("rejected")
    }
    
})

pro.then((data)=>{
    console.log(data)
}).catch(e=>{
    console.log(e)
})
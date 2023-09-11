function step1(value,error){
    return new Promise((resolve,reject)=>{
        if(!error){
            resolve(value+10);
        }else{
            reject("something wrong!")
        }
    })
}
async function result(){
    let reslut1 = await step1(10,false);
    console.log(10)
    console.log(reslut1);
    return 10;
}

console.log(result());

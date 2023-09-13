let now = Date.now();

const output = (x)=>console.log(`${x} elapsed: ${Date.now()-now}`);

output('Synchronous1');
const blocking = ()=>{
    let i=0;
    while(i<1000000000){
        i++;
    }
    return "All Done!!"
}
const unblocking =()=> Promise.resolve().then((data)=>{
    let i=0;
    while(i<1000000000){
        i++;
    }
    return "All Done!!";
})
output(unblocking().then(output))
output('Synchronous2');
var a = 10;
var b = 20;

try{
    var c = a*b;
    console.log(c);
}catch(error){
    console.log(error.message)
}finally{
    console.log("Finally")
}


var x =7;
console.log(x);
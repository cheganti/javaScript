function sum(...array){
    let result = 0;
    for(let i=0;i<array.length;i++){
        result +=array[i];
    }
    return result;
}

console.log(sum(2,3,4,1))
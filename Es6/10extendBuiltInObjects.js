class ExtendableArray extends Array{
    multiplyByTwo(){
        let returnArray = [];
        this.forEach(value=>returnArray.push(value*2));
        return returnArray;
    }
}

let array = new ExtendableArray();
array.push(1)
array.push(2)
array.push(3)

console.log(array.multiplyByTwo());
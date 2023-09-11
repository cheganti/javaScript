const arr = [20,3,55,9,0,1];

for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-i-1;j++){
        if(arr[j+1]<arr[j]){
            [arr[j+1],arr[j]] = [arr[j],arr[j+1]]
        }
    }
}
console.log(arr);
arr.splice(1,0,100)
console.log(arr);
const arr1 = ["mango","apple","banana"]
arr1.splice(1,0,'kiwi');
console.log(arr1);


console.log(arr1.slice(2))

// arr1.slice()

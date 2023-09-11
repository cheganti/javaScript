const qArray = [
  { id: 1, name: "a" },
  { id: 1, name: "k" },
  { id: 2, name: "b" },
  { id: 3, name: "c" },
  { id: 1, name: "d" },
  { id: 2, name: "l" },
  { id: 2, name: "m" },
  { id: 3, name: "n" },
];

let arr = [];

for (let i = 0; i < qArray.length; i++) {
  let obj = {};
  let x = arr.find((x) => x.id === qArray[i].id);
  if (x) {
    x.name.push(qArray[i].name);
  } else {
    obj[Object.keys(qArray[i])[0]] = qArray[i].id;
    obj[Object.keys(qArray[i])[1]] = [qArray[i].name];
    arr.push(obj);
  }
}
console.log(arr);

const sortArr = qArray.reduce((pre, curr, index, array) => { 
    // console.log(pre,index,curr,array);
    let x = pre.find(x=>x.id===array[index].id)
    if(x){
        x.name.push(curr.name)
    }else{
        let obj = {};
        obj[Object.keys(curr)[0]] = curr.id;
        obj[Object.keys(curr)[1]] = [curr.name];
        pre.push(obj)
    }
    return pre;
 },[]);
 console.log(sortArr)


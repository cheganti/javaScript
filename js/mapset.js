let arr = [9,29,9,2,0,33,2,21,10];
let objset = {
    fname: "ravi",
    lname: "cheganti",
    fullname:function(){
        return this.fname+""+this.lname;
    }
}
let objset1 = {
    fname: "ravi",
    lname: "cheganti",
    fullname:function(){
        return this.fname+""+this.lname;
    }
}
let set1 = new Set(arr)
console.log(set1);
set1.add(objset);
set1.add(objset1);
console.log(set1);

let obj = {
    fname: "ravi",
    lname: "cheganti",
    fullname:function(){
        return this.fname+""+this.lname;
    }
}

let map1 = new Map([[obj,{date:this.Date(), date1:this.Date('12/2/2021')}]]);
console.log(map1);
const player1 = { name: 'kamal', age: 30};

const playerData = new Map([[player1, [{date:'today',price :400}]]]);
 console.log(playerData);
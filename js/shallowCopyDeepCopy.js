const obj1 = {
  fname: "ravindar",
  lname: "cheganti",
  fullname: function(){
    console.log(this.fname+"--"+this.lname)
  },
  something: {
    sname:"sname"
  }
};

// const obj2 = {...obj1};
// const obj2 = Object.assign({},obj1);
const obj2 = JSON.parse(JSON.stringify(obj1))
obj2.fname = "shrithan";
obj2.something['sname'] = "thanu";
console.log(obj1)
console.log(obj2);

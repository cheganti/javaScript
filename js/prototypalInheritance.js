let arr = ["ravindar", "cheganti"];
let object = {
    fName: "ravindar",
    lName: "cheganti",
    fullName: function(){
        console.log(this.fName+"--"+this.lName);
    }
}

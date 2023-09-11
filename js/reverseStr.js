var revStr="";
function strRev(str){
    for(let i=str.length-1;i>=0;i--){
        revStr += str[i];
    }
    return revStr;
}
console.log(strRev("Hello"))
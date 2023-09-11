function palindrome(str) {
  let len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - i - 1]) {
      return "string is not a palindrome";
    } else {
      return "string is palindrom";
    }
  }
}

console.log(palindrome("sas"));

function anagramPalindrome(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] in obj) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }
  console.log(obj);
  let c = 0;
  for (let v of Object.values(obj)) {
    if (v % 2 === 1) {
      c++;
    }
  }
  if (c > 1) {
    return false;
  } else {
    return true;
  }
}
console.log(anagramPalindrome("daddaddadaa"));

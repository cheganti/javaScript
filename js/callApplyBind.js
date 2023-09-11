let nameObj = {
  name: "Tony",
};

let PrintName = {
  name: "steve",
  sayHi: function (args) {
    console.log(this.name + " age is " + args);
  },
};

Object.prototype.myBind = function (bindObj, ...args) {
  bindObj.myMethod = this;
  console.log("bindObj ->", bindObj);
  return function () {
    bindObj.myMethod(...args);
  };
};

let hiFun = PrintName.sayHi.myBind(nameObj, 25);
hiFun();

Object.prototype.myCall = function (obje, ...args) {
  obje.myMethod = this;
  obje.myMethod(...args);
};

PrintName.sayHi.myCall(nameObj, 43);

Object.prototype.MyApply = function (bindObj, args) {
  bindObj.myMethod = this;

  bindObj.myMethod(...args);
};

PrintName.sayHi.apply(nameObj, [42]);

let obj = {
  name: "ravi",
};

let obj2 = {
  name: "shri",
  myName: function () {
    console.log(this.name);
  },
};

let b = obj2.myName.bind(obj);

b();

Object.prototype.myBnd = function (obj, ...args) {
  obj.mymethod = this;
  return function () {
    obj.mymethod(...args);
  };
};

let b1 = obj2.myName.myBnd(obj);
b1();

Object.prototype.mycallFn = function (obj, ...args) {
  obj.myfn = this;
  obj.myfn(...args);
};
obj2.myName.mycallFn(obj);


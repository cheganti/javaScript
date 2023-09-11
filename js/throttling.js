const expensive = () => {
  console.log("expensive");
};
const throttle = (func, limit) => {
  let flag = true;
  return function () {
    let context = this,
      args = arguments;
    if (flag) {
      func.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};
const betterExpensive = throttle(expensive, 500);
window.addEventListener("resize", betterExpensive);

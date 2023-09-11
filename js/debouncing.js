let counter = 0;
const getData = () => {
  //calls an api and gets data
  console.log("fetching data...", counter++);
};

const debounce = function (fn, d) {
  let timer;
  return function () {
    let context = this,
    args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply();
    }, d);
  };
};
const betterFunction = debounce(getData, 500);
// betterFunction();

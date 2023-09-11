function step1(value, a) {
  let val = value + 100;
  a(val + 10, false);
}
function step2(value, callback) {
  callback(value + 10, false);
}
function step3(value, callback) {
  callback(value + 10, false);
}

function step4(value, c) {
  c(value + 100, true);
}

// step1(10, function (result1, error) {
//   if (!error) {
//     step2(result1, function (result2, error) {
//       if (!error) {
//         step3(result2, function (result3, error) {
//           console.log("result: " + result3);
//         });
//       }
//     });
//   }
// });

step1(10, function (value1) {
  step2(value1, function (value2) {
    step3(value2, function (value3) {
      step4(value3, function (value4) {
        console.log(value4);
      });
    });
  });
});

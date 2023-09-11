const axios = require("axios");

const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = {
      firstName: "ravi",
    };
    user["lastName"] = "cheganti";
    return user;
  },
  fetchuser: () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.data)
      .catch((err) => 'Error');
  },
};

module.exports = functions;

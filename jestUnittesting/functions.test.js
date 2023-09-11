const functions = require("./functions");

test("ADDS 2 +2 to equals 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("ADDS 2 +2 to Not equals 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test("should be null", () => {
  expect(functions.isNull()).toBeNull();
});

// test("should be falsy", () => {
//   expect(functions.checkValue(1)).not.tobeFalsy();
// });

test("user should be ravi cheganti object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "ravi",
    lastName: "cheganti",
  });
});

test("shoud be under 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

// Regex
test("there is no I in team", () => {
  expect("teami").not.toMatch(/I/);
});

// Arrays
test("admin should be in usernames", () => {
  usernames = ["john", "karen", "admin"];
  expect(usernames).toContain("admin");
});

// working with async data
// test("user fetched name should be Leanne Graham", () => {
//     // expect.assertions(1)
//   functions.fetchuser().then((data) => {
//     expect(data.name).toEqual("Leanne Graham");
//   });
// });

// async await
test("user fetched name should be Leanne Graham", async () => {
    const data = await functions.fetchuser();
    expect(data.name).toEqual("Leanne Graham");
    expect.assertions(1);
});

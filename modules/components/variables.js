
let keyValue = 1000;

class Person {
    constructor(name) {
        this.name = name;
    }
}

function test() {
    keyValue = 2000;
    console.log("test function")
}
let ab=200
export { keyValue, Person, test }
export default ab;
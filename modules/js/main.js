import ab,{ keyValue as key, Person, test } from "../components/variables";
import {Leela, PersonClass} from '../components/classObject'
console.log(key)

const person = new Person('ravi');
console.log(person.name);
test();
console.log(key);

console.log(ab);


const personClass = new PersonClass('raviClass');

personClass.hello();

const leelaClass = new Leela(27);
leelaClass.hello();

leelaClass.helloTwice();
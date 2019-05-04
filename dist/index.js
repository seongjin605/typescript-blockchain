"use strict";
const person = {
    name: 'seongjin',
    age: 29,
    gender: 'male'
};
const sayHi = (person) => {
    return `Hello ${person.name}, ${person.age}, ${person.gender}`;
};
//sayHi(name, age, gender);
const result = sayHi(person);
console.log(result);
module.exports = {};
//# sourceMappingURL=index.js.map
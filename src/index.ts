
interface Human {
    name:string;
    age:number;
    gender:string;
}
const person = {
    name:'seongjin',
    age:29,
    gender:'male'
}


const sayHi = (person: Human): String => {
    return `Hello ${person.name}, ${person.age}, ${person.gender}`
}

//sayHi(name, age, gender);
const result = sayHi(person);

console.log(result);

export={};
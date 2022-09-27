const student = { name: "sakib", job: "cricketer" };

// const person = new Object();

const human = Object.create(student);
console.log(human.job);

class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const person = new People("manus", 12);
console.log(person);

// Declaring variables
const name = "unchange";
let age = 34;
age = 45;

// 6 Conditions >, <, ===, !==, <==, >=
// multiple &&, ||

// Array declare
//  index
// length
const num = [12, 23, 34, 54, 65, 67];
num[0] = 21;

// loop
for (let i = 0; i < num.length; i++) {
  console.log(num + 1);
}

// function
const fnct = (n1, n2) => {
  const result = n1 + n2;
  return result;
};

const output = fnct(34, 45);
console.log(output);

// object
const student = {
  name: "Student",
  age: 34,
  movies: ["al", "bal", "fuck"],
};

const myVariables = "age";

console.log(student.age);

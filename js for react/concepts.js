// Template string
const name = "ghazni";
const about = `My hero ${name}`;
console.log(about);

// arrow function
const getFiftyFive = () => 55;
console.log(getFiftyFive);

// spread
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newNumbers = [...numbers];
numbers.push(56);
console.log(numbers);
console.log(newNumbers);

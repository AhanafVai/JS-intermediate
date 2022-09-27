const bottle = {
  color: "yellow",
  hold: "water",
  price: 50,
  isCleaned: true,
};

// getting all properties
const keys = Object.keys(bottle);
console.log(keys);
const values = Object.values(bottle);
console.log(values);
const pairs = Object.entries(bottle);
console.log(pairs);
Object.seal(bottle);
delete bottle.isCleaned;
console.log(bottle);

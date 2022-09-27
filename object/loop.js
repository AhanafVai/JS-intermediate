const bottle = {
  color: "yellow",
  hold: "water",
  price: 50,
  isCleaned: true,
};

for (const prop in bottle) {
  console.log(bottle[prop]);
}

const keys = Object.keys(bottle);
console.log(keys);
for (const prop in keys) {
  console.log(prop);
}

for (const [key, value] of Object.entries(bottle)) {
  console.log(key, value);
}

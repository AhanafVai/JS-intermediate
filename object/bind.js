const ahanafAbdullah = {
  id: 20113718,
  money: 7000,
  name: "Ahanaf",

  treatDey: function (expense) {
    this.money = this.money - expense;
    console.log(this.name, "treat dibe");
    return this.money + " taka dia";
  },
};

const atikFaisal = {
  id: 20113717,
  money: 6000,
  name: "Atik",
};

const tafrimSajin = {
  id: 20113719,
  money: 5000,
  name: "Sajin",
};
// ahanafAbdullah.treatDey(100);
const hero = ahanafAbdullah.treatDey.bind(tafrimSajin);
hero(5000);
console.log(hero);

const student = {
  id: 20113718,
  money: 5000,
  name: "Ahanaf",
  job: "programmer",
  subjects: ["Physics", "Chemistry", "Math", "Language"],
  isRich: false,
  bestFriend: { name: "Sajin", major: "Science" },
  takeExam: function () {
    console.log(this.name, "taking exam");
  },
  treatDey: function (expense) {
    this.money = this.money - expense;
    console.log(this.name, "treat dibe");
    return this.money + " taka dia";
  },
};

student.takeExam();
const remaining = student.treatDey(900);
console.log(remaining);

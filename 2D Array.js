var donutBox = [
  ["glazed", "chocolate glazed", "cinnamon"],
  ["powdered", "sprinkled", "glazed cruller"],
  ["chocolate cruller", "Boston creme", "creme de leche"],
];

// here, donutBox.length refers to the number of rows of donutsfor
// for (let row = 0; row < donutBox.length; row++) {
//console.log(donutBox[1][0]);
// }

const person = {
  name: "alixxade",
  detail: {
    age: 23,
  },
};

console.log(person);
person1 = structuredClone(person);
person1.detail.age = 100;
console.log(person1);
console.log(person);
const person2 = Object.assign({}, person);
person2.detail.age = 200;
console.log(person2);
console.log(person);
person3 = { ...person };
person3.detail.age = 300;
console.log(person3);
console.log(person);
person4 = person;
person4.detail.age = 400;
console.log(person4);
console.log(person);

const input = require("../day1/input");

const groups = input.split("\n\n");

const arr = [];
// Get all the calories of every elf
groups.forEach((group) => {
  arr.push(
    group.split("\n").reduce((total, val) => (total += parseInt(val)), 0)
  );
});

// Get the top 3 elfs calories
let calories = 0;
const newarr = arr;
const cals = [];

console.log(
  newarr
    .sort((a, b) => a - b)
    .reverse()
    .slice(0, 3)
    .reduce((prev, cur) => prev + cur)
);

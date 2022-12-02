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
for (let i = 0; i < 3; i++) {
  const cal = newarr.reduce((a, b) => Math.max(a, b), -Infinity);
  const index = arr.indexOf(cal);
  newarr[index] = 0;
  calories += cal;
  cals.push(cal);
}

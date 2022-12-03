const input = require("./input.js");

const groups = input.split("\n\n");

const arr = [];

groups.forEach((group) => {
  arr.push(
    group.split("\n").reduce((total, val) => (total += parseInt(val)), 0)
  );
});
// Part 1
console.log(arr.reduce((a, b) => Math.max(a, b), -Infinity));

// Part 2
const newarr = arr;

console.log(
  newarr
    .sort((a, b) => a - b)
    .reverse()
    .slice(0, 3)
    .reduce((prev, cur) => prev + cur)
);

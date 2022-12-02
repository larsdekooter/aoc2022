const input = require("./input.js");

const groups = input.split("\n\n");

const arr = [];

groups.forEach((group) => {
  arr.push(
    group.split("\n").reduce((total, val) => (total += parseInt(val)), 0)
  );
});

console.log(arr.reduce((a, b) => Math.max(a, b), -Infinity));

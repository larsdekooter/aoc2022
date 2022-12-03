const { readFileSync } = require("fs");
const rucksacks = readFileSync("input.txt").toString().split("\r\n");

const priorities = {
  a: 1,
  z: 26,
  A: 27,
  Z: 52,
};

let totalPriorities = 0;
// Part 1
for (const rucksack of rucksacks) {
  const numberOfItems = rucksack.length;
  const midPoint = numberOfItems / 2;
  const firstCompartment = rucksack.slice(0, midPoint);
  const secondCompartment = rucksack.slice(midPoint);
  const duplicateItem = firstCompartment
    .split("")
    .find((item) => secondCompartment.includes(item));
  if (!duplicateItem) continue;
  const ascii = duplicateItem.charCodeAt(0);
  if (duplicateItem === duplicateItem.toLowerCase()) {
    // item is in a-z
    const offset = ascii - 97;
    totalPriorities += priorities.a + offset;
  } else {
    // item is in A-Z
    const offset = ascii - 65;
    totalPriorities += priorities.A + offset;
  }
}

console.log(`[part 1] ${totalPriorities}`);

// Part 2
const groupSize = 3;
const numberOfRucksacks = rucksacks.length;

let partTwoTotalPriorities = 0;

for (let i = 0; i < numberOfRucksacks; i += groupSize) {
  const group = rucksacks.slice(i, i + groupSize);
  const badge = group[0]
    .split("")
    .find((letter) => group[1].includes(letter) && group[2].includes(letter));
  if (!badge) continue;
  const ascii = badge.charCodeAt(0);
  if (badge === badge.toLocaleLowerCase()) {
    // a-z range
    const offset = ascii - 97;
    partTwoTotalPriorities += priorities.a + offset;
  } else {
    // A-Z range
    const offset = ascii - 65;
    partTwoTotalPriorities += priorities.A + offset;
  }
}

console.log(`[Part 2]: ${partTwoTotalPriorities}`);

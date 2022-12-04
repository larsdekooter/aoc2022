const { readFileSync } = require("fs");

const input = readFileSync("./input.txt", "utf-8");

const pairs = input.split("\n");

/**
 * Part 1
 * @param {string} as1
 * @param {string} as2
 */
function range(as1, as2) {
  if (as2.endsWith("\r")) {
    as2 = as2.slice(0, as2.length - 1);
  }
  const [as1n, as2n] = as1.split("-");
  let i = parseInt(as1n);
  const resultAs1 = [];
  do {
    resultAs1.push(i);
    i++;
  } while (i < parseInt(as2n) + 1);
  const resultAs2 = [];
  const [as1nn, as2nn] = as2.split("-");
  let j = parseInt(as1nn);
  do {
    resultAs2.push(j);
    j++;
  } while (j < parseInt(as2nn) + 1);
  return [resultAs1, resultAs2];
}
let fullyContainedCount = 0;
// TODO: test if only the same also works (last if statement)
for (const pair of pairs) {
  const [section1, section2] = pair.split(",");
  const [range1, range2] = range(section1, section2); // [[numbers], [numbers]]
  if (range1.length > range2.length) {
    // Range 1 is the biggest
    if (
      range1.includes(range2[0]) &&
      range1.includes(range2[range2.length - 1])
    ) {
      // Range 1 has both the first and last element
      fullyContainedCount++;
    }
  } else if (range2.length > range1.length) {
    // Range 2 is the biggest
    if (
      range2.includes(range1[0]) &&
      range2.includes(range1[range1.length - 1])
    ) {
      // Range 2 has both the first and last element from range 1
      fullyContainedCount++;
    }
  } else {
    // Length is the same
    const [r1, r2] = [
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5],
    ];
    if (
      range1.includes(range2[0]) &&
      range1.includes(range2[range2.length - 1])
    ) {
      fullyContainedCount++;
    }
  }
}

console.log(`[Part 1]: ${fullyContainedCount}`);
// Part 2
let containedCount = 0;
for (const pair of pairs) {
  const [section1, section2] = pair.split(",");
  const [range1, range2] = range(section1, section2);
  const has = range1.some((val) => range2.includes(val));
  if (has) containedCount++;
}

console.log(`[Part 2]: ${containedCount}`);

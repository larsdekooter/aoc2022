const { readFileSync } = require("fs");
// Read the input
const lines = readFileSync("./input.txt")
  .toString()
  .split("\r\n")
  .map((group) => group.split(" "));

const winningCombos = { X: "Y", Y: "Z", Z: "X" };
const choiseRatings = { X: 1, Y: 2, Z: 3 };
const choiseMapping = { A: "X", B: "Y", C: "Z" };

// Part 1

// Get the score
function score([e, p]) {
  const en = choiseMapping[e];
  if (en === p) return 3;
  if (winningCombos[en] === p) return 6;
  return 0;
}
// Log the score
console.log(
  `[Part 1]: ${lines.reduce(
    (acc, [enemy, player]) =>
      score([enemy, player]) + choiseRatings[player] + acc,
    0
  )}`
);

// Part 2
/**
 * X = Loss;
 * Y = Draw
 * Z = win
 */

function decission([e, p]) {
  const en = choiseMapping[e];
  // Win
  if (p === "Z") return [winningCombos[en], 6];
  // loss
  if (p === "X") {
    if (en === "X") return ["Z", 0];
    if (en === "Y") return ["X", 0];
    return ["Y", 0];
  }
  return [en, 3];
}

const partTwoScore = lines.reduce((acc, [enemy, player]) => {
  const [response, score] = decission([enemy, player]);
  return acc + score + choiseRatings[response];
}, 0);

console.log(`[Part 2]: ${partTwoScore}`);

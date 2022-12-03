const { readFileSync } = require("fs");
// Read the input
const lines = readFileSync("./input.txt")
  .toString()
  .split("\r\n")
  .map((group) => group.split(" "));

const winningCombos = { X: "Y", Y: "Z", Z: "X" };
const choiseRatings = { X: 1, Y: 2, Z: 3 };
const choiseMapping = { A: "X", B: "Y", C: "Z" };
// Get the score
function score([e, p]) {
  const en = choiseMapping[e];
  if (en === p) return 3;
  if (winningCombos[en] === p) return 6;
  return 0;
}
// Log the score
console.log(
  lines.reduce(
    (acc, [enemy, player]) =>
      score([enemy, player]) + choiseRatings[player] + acc,
    0
  )
);

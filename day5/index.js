const { readFileSync } = require("fs");
const input = readFileSync("./input.txt", "utf-8");
const part1Stacks = [
  ["M", "F", "C", "W", "T", "D", "L", "B"],
  ["L", "B", "N"],
  ["V", "L", "T", "H", "C", "J"], // Add N, C
  ["W", "J", "P", "S"],
  ["R", "L", "T", "F", "C", "S", "Z"],
  ["Z", "N", "H", "B", "G", "D", "W"],
  ["N", "C", "G", "V", "P", "S", "M", "F"], // Remove N, C
  ["Z", "C", "V", "F", "J", "R", "Q", "W"],
  ["H", "L", "M", "P", "R"],
];

const moves = input.split("\r\n");
// Part 1
// Commented out, so it doesnt modify the stacks
const instructions = moves.map((move) => {
  const numbers = move.match(/\d+/g);
  return {
    amount: numbers[0],
    from: numbers[1],
    to: numbers[2],
  };
});
for (const instruction of instructions) {
  for (let i = 0; i < parseInt(instruction.amount); i++) {
    moveItem(instruction.from, instruction.to);
  }
}

function moveItem(from, to) {
  const fromStack = part1Stacks[parseInt(from) - 1];
  const toStack = part1Stacks[parseInt(to) - 1];

  const itemToMove = fromStack.shift();
  toStack.unshift(itemToMove);
}

console.log(`[Part 1: ]${part1Stacks.map((stack) => stack[0]).join("")}`);

const part2Stacks = [
  ["M", "F", "C", "W", "T", "D", "L", "B"],
  ["L", "B", "N"],
  ["V", "L", "T", "H", "C", "J"], // Add N, C
  ["W", "J", "P", "S"],
  ["R", "L", "T", "F", "C", "S", "Z"],
  ["Z", "N", "H", "B", "G", "D", "W"],
  ["N", "C", "G", "V", "P", "S", "M", "F"], // Remove N, C
  ["Z", "C", "V", "F", "J", "R", "Q", "W"],
  ["H", "L", "M", "P", "R"],
];
// Part 2
for (const i of instructions) {
  moveItems(i);
}

function moveItems({ amount, from, to }) {
  const fromStack = part2Stacks[parseInt(from) - 1];
  const toStack = part2Stacks[parseInt(to) - 1];

  const moveItems = fromStack.slice(0, parseInt(amount)).reverse();
  moveItems.forEach((item) => {
    toStack.unshift(item), fromStack.shift();
  });
}
console.log(`[Part 2]: ${part2Stacks.map((stack) => stack[0]).join("")}`);

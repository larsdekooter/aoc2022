const { readFileSync } = require("fs");
const input = readFileSync("./input.txt", "utf-8");
const buffer = input.slice(0, -1);

const size = buffer.length;

for (let i = 0; i < size; i++) {
  const window = buffer.slice(i, i + 4);
  const u = new Set(window.split(""));
  if (u.size === 4) {
    console.log(`[Part 1]: ${i + 4}`);
    break;
  }
}

for (let i = 0; i < size; i++) {
  const window = buffer.slice(i, i + 14);
  const u = new Set(window.split(""));
  if (u.size === 14) {
    console.log(`[Part 2]: ${i + 14}`);
    break;
  }
}

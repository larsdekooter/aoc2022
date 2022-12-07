const inputFilePath = require("path").join(__dirname, "input.txt");
const inputText = require("fs").readFileSync(inputFilePath, "utf-8");

const lines = inputText.split("\r\n").reverse();

const dirSizes = new Map();
let currentDirSize = 0;
let total = 0;

for (const line of lines) {
  const words = line.split(" ");
  if (words.at(0) === "$") {
    const [_, cmd, arg] = words;
    if (cmd === "cd") {
      if (arg === "..") continue;
      dirSizes.set(arg, currentDirSize);
      if (currentDirSize <= 100000) {
        total += currentDirSize;
      }
      currentDirSize = 0;
    }
  } else if (words.at(0) === "dir") {
    const dirName = words.at(1);
    if (!dirName) continue;
    const dirSize = dirSizes.get(dirName);
    if (!dirSize) continue;
    currentDirSize += dirSize;
  } else {
    const [fileSize, _] = words.map((word) => Number.parseInt(word));
    currentDirSize += fileSize;
  }
}

console.log(`[Part 1]: ${total}`);

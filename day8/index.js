const input = require("fs").readFileSync("./input.txt", "utf-8");
const rows = input.split("\r\n");
let visible = 0;

for (let i = 0; i < rows.length; i++) {
  const row = rows[i];
  if (i === 0 || i === rows.length - 1) continue;

  const trees = row.split("");

  for (let j = 1; j < trees.length - 1; j++) {
    const tree = trees[j];
    const column = rows.map((row) => row.split("")[j]);
    const higherRowTree = trees.find((t) => parseInt(t) > parseInt(tree));
    const higherColumnTree = column.find((t) => parseInt(t) > parseInt(tree));
    if (higherColumnTree !== undefined && higherRowTree !== undefined) continue;
    visible++;
  }
}

console.log(
  visible +
    rows.length +
    rows.length +
    rows[0].length +
    rows[rows.length - 1].length
);

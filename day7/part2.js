let currentDir = ["root"];
const input = require("fs").readFileSync("./input.txt", "utf-8");
console.log(
  JSON.stringify(
    input.split("\r\n").reduce(
      (dirs, line) => {
        const [cmdOrSize, arg] = line.replace("$ ", "").split(" ");
        switch (cmdOrSize) {
          case "ls":
            break;
          case "cd":
            if (arg === "/") currentDir = ["root"];
            else if (arg === "..") currentDir.pop();
            else currentDir.push(arg);
            break;
          case "dir":
            eval(`dirs.${currentDir.join(".")}.${arg} = {}`);
            break;
          default:
            currentDir.forEach((_, i) => {
              const dirSize = `dirs.${currentDir
                .slice(0, i + 1)
                .join(".")}.size`;
              eval(`${dirSize} = (${dirSize} ?? 0) + ${cmdOrSize}`);
            });
            break;
        }

        return dirs;
      },
      { root: {} }
    )
  )
    .match(/\d+/g)
    .sort((prev, curr) => prev - curr)
    .find(
      (size, _, sizes) => size > 30000000 - (70000000 - sizes[sizes.length - 1])
    )
);

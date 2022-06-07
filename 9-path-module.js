const path = require("path");

//Returns the platform specific seperator
console.log(path.sep);

const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

//Returns base name of the file
const base = path.basename(filePath);
console.log(base);

//Return an absolute path
const absolutePath = path.resolve(
  __dirname,
  "content",
  "subfolder",
  "test.txt"
);

console.log(absolutePath);

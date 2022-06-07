const { readFile, writeFile } = require("fs");

console.log("Start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const firstTxt = result;
  readFile("./content/Second.txt", "utf8", (err, result2) => {
    if (err) {
      console.log(err);
      return;
    }
    const secondTxt = result2;

    writeFile(
      "./content/result-async.txt",
      `Here is the result : ${firstTxt}, ${secondTxt}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Done with the task");
      }
    );
  });
});

console.log("Starting next task");

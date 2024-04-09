const fs = require("node:fs");
function readFileFunction(filepath, callback) {
  fs.readFile(filepath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    callback(data);
  });
}
readFileFunction(
  "c:/Users/konbr/OneDrive/Desktop/Full stack development bootcamp 4 at sabaicode/Coding in bootcamp 4/javascriptP3/3.exercise.txt",
  (content) => {
    console.log(content);
  }
);

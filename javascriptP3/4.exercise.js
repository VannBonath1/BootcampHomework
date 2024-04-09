const fs = require("node:fs");
const content = "hello world";

function writeFileFunction(filepath, callback) {
  fs.writeFile(filepath, content, (err) => {
    if (err) {
      console.error(err);
    } else {
      callback(content);
    }
  });
}

writeFileFunction(
  "c:/Users/konbr/OneDrive/Desktop/Full stack development bootcamp 4 at sabaicode/Coding in bootcamp 4/javascriptP3/4.exercise.txt",
  (content1) => {
    console.log(content1);
  }
);

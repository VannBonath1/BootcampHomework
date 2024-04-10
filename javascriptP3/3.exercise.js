const fs = require("fs");

function readFile(filePath, callback) {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      callback(data);
    }
  });
}
readFile(
  "c:/Users/konbr/OneDrive/Desktop/Full stack development bootcamp 4 at sabaicode/Coding in bootcamp 4/input.txt",
  data
);

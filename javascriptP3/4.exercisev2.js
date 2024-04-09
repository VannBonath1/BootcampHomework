const fs = require("fs");

function writeFileAsync(filePath, content, callback) {
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null, `File '${filePath}' has been written successfully.`);
  });
}

// Example usage:
const filePath =
  "c:/Users/konbr/OneDrive/Desktop/Full stack development bootcamp 4 at sabaicode/Coding in bootcamp 4/javascriptP3/4.exercise v2.txt";
const fileContent = "Hello, world!";

writeFileAsync(filePath, fileContent, (err, result) => {
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null, `File '${filePath}' has been written successfully.`);
  });
});

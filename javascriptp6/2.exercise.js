const fs = require("fs");

function readFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}


function writeFileFunction(filepath, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filepath, content, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(content);
      }
    });
  });
}

writeFileFunction(
  "C:/Users/konbr/OneDrive/Desktop/Full stack development bootcamp 4 at sabaicode/Coding in bootcamp 4/javascriptp6/write.txt",
  "ayo"
).then((data) => {
  console.log(data);
});
writeFileFunction().catch((err) => {
  console.log(err);
});

// readFile(
//   "C:/Users/konbr/OneDrive/Desktop/Full stack development bootcamp 4 at sabaicode/Coding in bootcamp 4/javascriptp6/input.txt"
// ).then((data) => {
//   console.log(data);
// });
// readFile().catch((err) => {
//   console.log(err);
// });

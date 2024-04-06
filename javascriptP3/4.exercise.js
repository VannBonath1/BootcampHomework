const fs = require("node:fs");

let contentToWrite = "";

fs.writeFile(
  "c:/Users/konbr/OneDrive/Desktop/Full stack development bootcamp 4 at sabaicode/Coding in bootcamp 4/javascriptP3/4.exercise.txt",
  contentToWrite,
  (err) => {
    if (err) {
      console.error(err);
    } else {
      fs.appendFile(
        "4.exercise.txt",
        "Good morning/afternoon/night Teacher",
        (err) => {
          if (err) {
            console.error(err);
          } else {
            console.log("Success");
          }
        }
      );
    }
  }
);

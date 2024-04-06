const fs = require("node:fs");

const content = "Good morning/afternoon/night Teacher";

fs.writeFile(
  "c:/Users/konbr/OneDrive/Desktop/Full stack development bootcamp 4 at sabaicode/Coding in bootcamp 4/javascriptP3",
  content,
  (err) => {
    if (err) {
      console.error(err);
    } else {
      // file written successfully
    }
  }
);

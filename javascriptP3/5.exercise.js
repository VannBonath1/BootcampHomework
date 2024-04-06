const fs = require("node:fs");
let append;
let output2 = "";
let append2;

fs.readFile(
  "c:/Users/konbr/OneDrive/Desktop/Full stack development bootcamp 4 at sabaicode/Coding in bootcamp 4/javascriptP3/input.txt",
  "utf8",
  (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    append = data + " First modification";
    fs.appendFile("input.txt", append, (err) => {
      if (err) {
        console.error(err);
      } else {
        fs.writeFile(
          "c:/Users/konbr/OneDrive/Desktop/Full stack development bootcamp 4 at sabaicode/Coding in bootcamp 4/javascriptP3/output1.txt",
          append,
          (err) => {
            if (err) {
              console.error(err);
            } else {
              fs.readFile(
                "c:/Users/konbr/OneDrive/Desktop/Full stack development bootcamp 4 at sabaicode/Coding in bootcamp 4/javascriptP3/output1.txt",
                "utf8",
                (err, append) => {
                  if (err) {
                    console.error(err);
                    return;
                  }

                  fs.writeFile(
                    "c:/Users/konbr/OneDrive/Desktop/Full stack development bootcamp 4 at sabaicode/Coding in bootcamp 4/javascriptP3/output2.txt",
                    output2,
                    (err) => {
                      if (err) {
                        console.error(err);
                      } else {
                        append2 = append + " Second modification";
                        fs.appendFile("output2.txt", append2, (err) => {
                          if (err) {
                            console.error(err);
                          } else {
                            fs.readFile(
                              "c:/Users/konbr/OneDrive/Desktop/Full stack development bootcamp 4 at sabaicode/Coding in bootcamp 4/javascriptP3/output2.txt",
                              "utf8",
                              (err, append2) => {
                                if (err) {
                                  console.error(err);
                                  return;
                                }
                                console.log("final result:", append2);
                              }
                            );
                          }
                        });
                      }
                    }
                  );
                }
              );
            }
          }
        );
      }
    });
  }
);

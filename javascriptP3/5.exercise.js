const fs = require("fs");

function readFile(filePath, callback) {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      callback(null, data);
    }
  });
}

function writeFileFunction(filepath, content, callback) {
  fs.writeFile(filepath, content, (err) => {
    if (err) {
      console.error(err);
    } else {
      callback(content);
    }
  });
}

function appendFunction(filepath, content, callback) {
  fs.appendFile(filepath, content, (err) => {
    if (err) {
      console.log(err);
    } else {
      callback(content);
    }
  });
}

readFile(
  "c:/Users/konbr/OneDrive/Desktop/Full stack development bootcamp 4 at sabaicode/Coding in bootcamp 4/javascriptP3/input.txt",
  (err, data1) => {
    console.log("read :", data1);
    appendFunction("input.txt", " first modification", (data2) => {
      console.log("append 1:", data2);
      const newdata = data1 + data2;
      writeFileFunction(
        "c:/Users/konbr/OneDrive/Desktop/Full stack development bootcamp 4 at sabaicode/Coding in bootcamp 4/javascriptP3/output1.txt",
        newdata,
        (data3) => {
          console.log("write file 1:", data3);
          readFile(
            "c:/Users/konbr/OneDrive/Desktop/Full stack development bootcamp 4 at sabaicode/Coding in bootcamp 4/javascriptP3/output1.txt",
            (err, data4) => {
              console.log("read file 2:", data4);
              appendFunction("output1.txt", " second modification", (data5) => {
                console.log("append 2:", data5);
                const newdata2 = data4 + data5;
                writeFileFunction(
                  "c:/Users/konbr/OneDrive/Desktop/Full stack development bootcamp 4 at sabaicode/Coding in bootcamp 4/javascriptP3/output2.txt",
                  newdata2,
                  (data6) => {
                    console.log("write file 2:", data6);
                    readFile(
                      "c:/Users/konbr/OneDrive/Desktop/Full stack development bootcamp 4 at sabaicode/Coding in bootcamp 4/javascriptP3/output2.txt",
                      (err, data7) => {
                        console.log("read final result:", data7);
                      }
                    );
                  }
                );
              });
            }
          );
        }
      );
    });
  }
);

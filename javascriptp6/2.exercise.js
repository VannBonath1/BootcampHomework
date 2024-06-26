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

function appendFunction(filepath, content) {
  return new Promise((resolve, reject) => {
    fs.appendFile(filepath, content, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(content);
      }
    });
  });
}

let data;
let ddata3;
readFile(
  "C:/Users/konbr/OneDrive/Desktop/Full stack development bootcamp 4 at sabaicode/Coding in bootcamp 4/javascriptp6/input.txt"
)
  .then((data1) => {
    console.log("readfile 1:", data1);
    data = data1;
    return appendFunction("input.txt", " first modification");
  })
  .then((data2) => {
    console.log("append 1:", data2);
    const newdata = data + data2;
    return writeFileFunction(
      "C:/Users/konbr/OneDrive/Desktop/Full stack development bootcamp 4 at sabaicode/Coding in bootcamp 4/javascriptp6/output1.txt",
      newdata
    );
  })
  .then((data3) => {
    console.log("write 1", data3);

    return readFile(
      "C:/Users/konbr/OneDrive/Desktop/Full stack development bootcamp 4 at sabaicode/Coding in bootcamp 4/javascriptp6/output1.txt"
    );
  })
  .then((data4) => {
    console.log("read 2:", data4);
    ddata3 = data4;
    return appendFunction("output2.txt", " second modification");
  })
  .then((data5) => {
    const newdata2 = ddata3 + data5;
    console.log("append 2:", data5);
    return writeFileFunction(
      "C:/Users/konbr/OneDrive/Desktop/Full stack development bootcamp 4 at sabaicode/Coding in bootcamp 4/javascriptp6/output2.txt",
      newdata2
    );
  })
  .then((data6) => {
    console.log("write 2:", data6);
    return readFile(
      "C:/Users/konbr/OneDrive/Desktop/Full stack development bootcamp 4 at sabaicode/Coding in bootcamp 4/javascriptp6/output2.txt"
    );
  })
  .then((data7) => {
    console.log("final result", data7);
  })
  .catch((err) => {
    console.log(err);
  });

// writeFileFunction(
//   "C:/Users/konbr/OneDrive/Desktop/Full stack development bootcamp 4 at sabaicode/Coding in bootcamp 4/javascriptp6/write.txt",
//   "ayo"
// ).then((data) => {
//   console.log(data);
// });
// writeFileFunction().catch((err) => {
//   console.log(err);
// });

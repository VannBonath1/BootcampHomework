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

async function display() {
  try {
    let data;
    let ddata3;
    const readFile1 = await readFile(
      "C:/Users/konbr/OneDrive/Desktop/Full stack development bootcamp 4 at sabaicode/Coding in bootcamp 4/javascriptp6/input.txt"
    );
    data = readFile1;

    const append1 = await appendFunction("input.txt", " first modification");
    const newdata = data + append1;

    const writeFile1 = await writeFileFunction(
      "C:/Users/konbr/OneDrive/Desktop/Full stack development bootcamp 4 at sabaicode/Coding in bootcamp 4/javascriptp6/output1.txt",
      newdata
    );

    const readFile2 = await readFile(
      "C:/Users/konbr/OneDrive/Desktop/Full stack development bootcamp 4 at sabaicode/Coding in bootcamp 4/javascriptp6/output1.txt"
    );
    ddata3 = readFile2;

    const append2 = await appendFunction("output2.txt", " second modification");
    const newdata2 = ddata3 + append2;

    const writeFile2 = await writeFileFunction(
      "C:/Users/konbr/OneDrive/Desktop/Full stack development bootcamp 4 at sabaicode/Coding in bootcamp 4/javascriptp6/output2.txt",
      newdata2
    );

    const readFile3 = await readFile(
      "C:/Users/konbr/OneDrive/Desktop/Full stack development bootcamp 4 at sabaicode/Coding in bootcamp 4/javascriptp6/output2.txt"
    );
    console.log(readFile3);
  } catch (err) {
    console.log(err);
  }
}
display();

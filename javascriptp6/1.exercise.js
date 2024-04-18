const mockDatabase = [
  { id: 1, name: "sok" },
  { id: 2, name: "sao" },
  { id: 3, name: "pisey" },
];

function getUserById(userId, idSearch, callback) {
  if (userId[idSearch] === undefined) {
    console.log("error");
  } else {
    setTimeout(() => callback(userId[idSearch]), 2000);
  }
}

function capitalizing(userid, idSearch, callback) {
  setTimeout(() => callback(userid[idSearch].name.toUpperCase()), 1500);
}

const idSearch = 1;

getUserById(mockDatabase, idSearch, (message) => {
  console.log(message);
  capitalizing(mockDatabase, idSearch, (message) => {
    console.log(message);
  });
});

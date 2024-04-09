const arrayDate = ["2024-01-01", "2024-02-02", "2024-04-04"];

let result = arrayDate.map((arr) => {
  let changedDate = arr.split("-");

  return `${changedDate[2]}-${changedDate[1]}-${changedDate[0]}`;
});
console.log(result);

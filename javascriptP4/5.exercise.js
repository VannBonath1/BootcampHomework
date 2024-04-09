const arrayNumber = [2, 4, 6, 1];

let result = arrayNumber.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(result);

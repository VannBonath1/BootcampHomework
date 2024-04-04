const average = (number) => {
  let sum = 0;
  for (let index = 0; index < number.length; index++) {
    sum = sum + number[index];
  }
  return sum / number.length;
};
console.log(average([10, 20, 30, 40, 50]));

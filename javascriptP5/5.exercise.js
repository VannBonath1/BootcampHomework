function anyNumber(...num) {
  sum = 0;
  num.forEach((number) => (sum += number));
  return sum;
}

let result = anyNumber(1, 2, 3, 4, 5, 5, 6, 7);
console.log(result);

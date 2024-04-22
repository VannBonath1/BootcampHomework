function anyNumber(...num) {
  sum = 0;
  num.forEach((number) => (sum += number));
  return sum;
}

let result = anyNumber(1, 1, 1, 1);
console.log(result);

function sortNumber(number) {
  return number.sort((aa, bb) => aa - bb);
}
console.log(sortNumber([40, 20, 1000, 30, 2, 0]));

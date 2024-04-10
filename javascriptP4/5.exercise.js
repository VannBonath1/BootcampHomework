const numbers = [30, 3, 8, 2, 31];
const max = numbers.reduce((acc, cur) => {
  return Math.max(acc, cur);
}, 0);

console.log(max);

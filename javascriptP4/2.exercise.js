function uniqueValue(array) {
  let result = array.filter((value, index, arr) => arr.indexOf(value) == index);
  return result;
}
const uniqueArray = uniqueValue([3, 2, 3, 10, 5, 5, 6]);
console.log(uniqueArray);

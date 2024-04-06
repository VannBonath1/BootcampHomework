function filterEvenNumbers(array2) {
  const evenNumbers = array2.filter((number) => number % 2 === 0);
  return evenNumbers;
}

function numbers(array, callback) {
  console.log(callback(array));
}
numbers([1, 2, 3, 4, 5, 6], filterEvenNumbers);

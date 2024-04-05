function factorialNumber(nonnegative) {
  let factorial = 1;
  if (nonnegative > 0) {
    for (let index = 1; index <= nonnegative; index++) {
      factorial = factorial * index;
    }
  } else {
    console.log("Error");
  }
  return factorial;
}
console.log(factorialNumber(7));

function squareArray(num) {
  return num * num;
}
function call(array, callback) {
  for (let index = 0; index < array.length; index++) {
    console.log(callback(array[index]));
  }
}
call([1, 2, 3], squareArray);   

function adult(arrayobj) {
  let result = arrayobj.filter((arrayobj) => arrayobj.age >= 18);
  return result;
}
const array = [
  { name: "bonath", age: 19 },
  { name: "dara", age: 15 },
  { name: "thy", age: 21 },
  { name: "Sna", age: 27 },
];
const adults = adult(array);
console.log(adults);

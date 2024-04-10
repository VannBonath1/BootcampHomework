// const filterProp = filterProperty(object, "b", "d");
// function listObj(obj, filterProperty) {}

// listObj();
const object = { a: 1, b: 2, c: 3, d: 4 };
function hello(obj, ...filterProps) {
  for (let i = 0; i < filterProps.length; i++) {
    const prop = filterProps[i];
    delete obj[prop];
  }
  return obj;
}
const filterProperty = hello(object, "b", "d");
console.log(filterProperty);

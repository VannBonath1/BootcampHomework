function countVowel(string) {
  let count = 0;
  for (let index = 0; index < string.length; index++) {
    if (
      string[index] === "a" ||
      string[index] === "e" ||
      string[index] === "i" ||
      string[index] === "o" ||
      string[index] === "u"
    ) {
      count++;
    }
  }
  return count;
}
console.log(countVowel("hola hello"));

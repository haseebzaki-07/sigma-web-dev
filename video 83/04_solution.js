// The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.
function mirroring(str) {
  const reverseStr = str.split("").reverse().join('');
  const mirrorStr = reverseStr + str;
  return mirrorStr;
}

const original = "Haseeb"
console.log(mirroring(original))


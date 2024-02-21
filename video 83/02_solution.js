// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

function doubling(arr) {
  let doublearr = [];
  let prevEle = null;

  for (let i = 0; i < arr.length; i++) {
    if (( arr[i] == prevEle)) {
      doublearr.push(arr[i]);
    } else {
      doublearr.push(arr[i] * 2);
    }
    prevEle = arr[i];
  }
  return doublearr;
}
const arr = [1, 3, 4, 5, 5, 6];
console.log(doubling(arr));

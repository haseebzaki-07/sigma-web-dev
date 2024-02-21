async function sleep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(45);
      resolve(45);
    }, 2000);
  });
}

function sum(x, y, z) {
    return x+y+z;
}

(async function main() {
  // let a  = await sleep()
  // console.log(a)
  // let b = await sleep()
  // console.log(b)

  // let [x, y, ...rest] = [1, 5, 5, 4 ,32, 6]
  // console.log(x,y, rest)

//   let obj = {
//     a: 1,
//     b: 3,
//     c: 2,
//   };

//   let {a,b} = obj
//   console.log(a,b)

let arr = [2,3,4]
console.log(sum(arr[0] ,arr[1],arr[2]))
console.log(sum(...arr))
})();


// let arr = [6,5,4,3,2,1]

// const red = (a,b)=>{
//     return a*b;
// }

// console.log(arr.reduce(red))

let arr1 = [6,5,4,3,2,1]

let fact = 1;

for (let index = 0; index < arr1.length; index++) {
     fact = arr1[index]*fact;
    
    
}
console.log(fact)

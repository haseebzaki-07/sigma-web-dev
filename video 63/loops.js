let a = [1, 34, 4, 787, 8]


        //for loop
// for (let index = 0; index <a.length; index++) {
//     const element =a[index];
//     console.log(element)
    
// }


        // for each loop
// a.forEach((value ,index, array)=>{
//     console.log(value,index,array)
// })


        // for in loop
// let obj ={
//     a : 1,
//     b : 2,
//     c : 3,
// }

// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(element)
        
//     }
// }

for (const iterator of a) {
    console.log(iterator)
}
let arr = [1, 2, 3, 4, 5];
// let newArr = []

// for (let index = 0; index <arr.length; index++) {
//     const element =arr[index];
//     newArr.push(element**2)
    
// }

// console.log(newArr)

let newArr = arr.map((e, index)=>{
    return e**2
})

console.log(newArr)

const GreaterThanSeven=(e)=>{
    if (e>7){
        return true

    }
    return false
}

//map filter reduce tutorial

console.log(newArr.filter(GreaterThanSeven))

let arr2 = [1, 2,3,4 ,5 ,6]

const red = (a, b) =>{
    return a*b
}

console.log(arr2.reduce(red))
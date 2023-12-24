// console.log(This is function tutorial)


function nice(name) {
    
console.log("Hey " + name + " you are good!")
console.log("Hey " + name + " you are great!")
console.log("Hey " + name + " you write good!")
console.log("Hey " + name + " you talk good!")
    
}
function sum(a, b, c=5) {
    // console.log(a + b + )
    return a + b + c;
}

result=sum(4, 5)
console.log("The sum of the number is: " ,result)
//nice("Harry")

const func1 = (x)=>{
    console.log("I am an arrow function", x)
}

func1(34);
func1(56);
func1(23);
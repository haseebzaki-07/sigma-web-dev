// Creating a faulty calculator

function sum(a, b) {

    if (Math.random(a, b)<0.1) {
        console.log(a - b)
        
    }
    else{
        console.log(a +  b)
    }
}
function diff(a, b) {
    if (Math.random(a, b)<0.1) {
        console.log(a / b)
        
    }
    else{
        console.log(a -  b)
    }
   

}
function product(a, b) {
    if (Math.random(a, b)<0.1) {
        console.log(a + b)
        
    }
    else{
        console.log(a *  b)
    }
    

}
function division(a, b) {
    if (Math.random(a, b)<0.1) {
        console.log(a ** b)
        
    }
    else{
        console.log(a /  b)
    }
    

}

division(6, 2)
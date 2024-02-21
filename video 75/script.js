// Javascript has asynchronous programming

console.log("Hzaki is a hacker")
console.log("vushi is a hecker")

setTimeout(() => {

    console.log("I am under settimeout")
    
}, 2000);
console.log("the end")

const callback= (arg) => {
    console.log(arg)
  
}
const loadScript = (src, callback) => {
    let sc = document.createElement("script")
    sc.src = src
    sc.onload = callback("Hzaki")
    document.head.append(sc)
  
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-actionscript.min.js" ,callback)
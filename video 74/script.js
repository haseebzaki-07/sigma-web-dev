let button = document.getElementById("btn")

button.addEventListener("click" , ()=>{
    document.querySelector(".box").innerHTML = "<b> Yay you were clicked !</b> Enjoy your click"
})

button.addEventListener("keydown" , ()=>{
    document.querySelector(".box").innerHTML = "<b> Dont hack us by right click please !</b> Enjoy your click"
})

document.addEventListener("keydown" , (e)=>{
    console.log(e)
})
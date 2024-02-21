console.log("Haseeb")

// let boxes = document.getElementsByClassName("boxes")
// console.log(boxes)

// boxes[2].style.backgroundColor = "green"

// document.getElementById("red").style.backgroundColor = "red"

// document.querySelector(".boxes").style.backgroundColor = "blue";

// console.log(document.querySelectorAll(".boxes"))


document.querySelectorAll(".boxes").forEach(element => {
    element.style.backgroundColor = "red"
});
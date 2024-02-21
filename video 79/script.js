let a = prompt("Enter firsdt number");
let b = prompt("Enter second number");

if (isNaN(a) || isNaN(b)) {
  throw SyntaxError("Sorry this is not a number");
}

let sum = parseInt(a) + parseInt(b);

function main() {
  let x = 1;

  try {
    console.log("The sum is ", sum * x);
    return true;
  } catch (error) {
    console.log("Error aagya bhai");
    return false;
  } finally{
    console.log("Files are being closed ");
  }
}

let c = main()
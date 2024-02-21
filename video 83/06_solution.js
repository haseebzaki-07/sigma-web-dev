// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

function sumUntilNegative(numbers) {
  var sum = 0;

  for (var i = 0; i < numbers.length; i++) {
    // Check if the current number is negative
    if (numbers[i] < 0) {
      break; // Exit the loop if a negative number is encountered
    }

    // Add the current number to the sum
    sum += numbers[i];
  }

  return sum;
}

// Example usage:
var numbersArray = [3, 7, 2, 10, -5, 8, 15];
var result = sumUntilNegative(numbersArray);
console.log("Sum until the first negative number:", result);

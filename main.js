// Task 8: Detect if a Number Is a Palindrome
// set variables for a 3-digit number and check if it reads the same forward and backward.
// Example: Input: 121 -> Output: Palindrome
//          Input: 123 -> Output: Not a Palindrome

let number = 121; // INPUT

// (keep the "// INPUT" comments - the tests use them to try other values)

// write your code below this line

let lastDigit = number % 10;      
let firstDigit = Math.floor(number / 100); 
if(lastDigit==firstDigit)
        console.log("is polindrom");
    else
        console.log("Not a Palindrome");
        
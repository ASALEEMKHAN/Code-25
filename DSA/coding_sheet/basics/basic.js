/*
1.Given a positive integer n, determine whether it is odd or even. Return true if the number is even and false if the number is odd.

Examples:

Input: n = 15
Output: false
Explanation: The number is not divisible by 2

Input: n = 44
Output: true
Explanation: The number is divisible by 2

Expected Time Complexity: O(1)
Expected Auxiliary Space: O(1)
*/

let inp_1 = 13;

console.log("Ans: 1");

if (inp_1 % 2 === 0) {
  console.log("true");
} else {
  console.log("false");
}

/*
2.You are given two integer numbers, the base a and the index b. You have to find the last digit of ab.

Examples:

Input: a = "3", b = "10"
Output: 9
Explanation: 310 = 59049. Last digit is 9.

Input: a = "6", b = "2"
Output: 6
Explanation: 62 = 36. Last digit is 6.

Your Task:
You don't need to read input or print anything. Your task is to complete the function getLastDigit() which takes two strings a,b as parameters and returns an integer denoting the last digit of ab.

Expected Time Complexity: O(|b|)
Expected Auxiliary Space: O(1)
*/

function getLastDigit(a, b) {
  const Modulo = (a, b) => {
    let mod = 0;
    for (let i = 0; i < b.length; i++) {
      mod = (mod * 10 + parseInt([b])) % a;
    }
    return mod;
  };

  const len_a = a.length;
  const len_b = b.length;

  if (len_b === 1 && b[0] === "0") return 1;
  if (len_a === 1 && a[0] === "0") return 0;

  const exp = Modulo(4, b) === 0 ? 4 : Modulo(4, b);
  const res = Math.pow(parseInt(a[len_a - 1]), exp);
  return res % 10;
}

let a = "3";
let b = "10";
let result_2 = getLastDigit(a, b);

console.log("Ans: 2");

console.log(result_2);

////////////////////////////////////////////////////////////////////////////////

function getLastDigit(a, b) {
  // Convert strings to integers
  a = parseInt(a);
  b = parseInt(b);

  // If b is 0, a^0 is always 1
  if (b === 0) {
    return 1;
  }

  // Patterns repeat every 4 cycles
  let lastDigitPatterns = [
    [0], // last digit is 0
    [1], // last digit is 1
    [2, 4, 8, 6], // last digits for base ending in 2
    [3, 9, 7, 1], // last digits for base ending in 3
    [4, 6], // last digits for base ending in 4
    [5], // last digit is 5
    [6], // last digit is 6
    [7, 9, 3, 1], // last digits for base ending in 7
    [8, 4, 2, 6], // last digits for base ending in 8
    [9, 1], // last digits for base ending in 9
  ];

  // Get the last digit of the base
  let lastDigitOfA = a % 10;

  // Find the pattern for the last digit
  let pattern = lastDigitPatterns[lastDigitOfA];

  // The position in the pattern is determined by b % pattern.length
  let position = (b - 1) % pattern.length;

  return pattern[position];
}

console.log(getLastDigit("6", "2")); // Output: 6

/*
3.
*/

// console.log("Ans: 3");

/*
4.
*/

// console.log("Ans: 4");

/*
5.
*/

// console.log("Ans: 5");

/*
6.
*/

// console.log("Ans: 6");

/*
7.
*/

// console.log("Ans: 7");

/*
8.
*/

// console.log("Ans: 8");

/*
9.
*/

// console.log("Ans: 9");

/*
10.
*/

// console.log("Ans: 10");

/*
11.
*/

// console.log("Ans: 11");

/*
12.
*/

// console.log("Ans: 12");

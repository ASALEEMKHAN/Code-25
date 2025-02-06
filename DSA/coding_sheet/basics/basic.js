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

function oddOrEven(n) {
  if (n % 2 === 0) return "true";
  return false;
}

let inp_1 = 12;

console.log("Ans: 1");

console.log(oddOrEven(inp_1));

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

console.log(getLastDigit("6", "2"));

/*
3.Given a number n. Count the number of digits in n which evenly divide n. Return an integer, total number of digits of n which divides n evenly.

Note :- Evenly divides means whether n is divisible by a digit i.e. leaves a remainder 0 when divided.

Examples:

Input: n = 12
Output: 2
Explanation: 1, 2 when both divide 12 leaves remainder 0.

Input: n = 23
Output: 0
Explanation: 2 and 3, none of them divide 23 evenly.

Expected Time Complexity: O(log n)
Expected Space Complexity: O(1)
*/

function countDivisibleDigits(N) {
  let n = N.toString();
  let count = 0;

  for (let i = 0; i < n.length; i++) {
    const digit = parseInt(n[i]);
    if (digit === 0) {
      continue;
    }
    if (inp_3 % digit === 0) {
      count++;
    }
  }
  return count;
}

let inp_3 = 2446;

console.log("Ans: 3");

console.log(countDivisibleDigits(inp_3));

/*
4.You are given an integer N, reverse the digits of given number N, ensuring that the reversed number has no leading zeroes. Return the resulting reversed number.

Example:

Input: 200
Output: 2
Explanation: By reversing the digits of 
number, number will change into 2.

Input : 122
Output: 221
Explanation: By reversing the digits of 
number, number will change into 221.

Expected Time Complexity: O(Log(N))
Expected Space Complexity: O(1)
*/

function reverseDigit(n) {
  let rev = 0;

  while (n !== 0) {
    rev = rev * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return rev;
}

let inp_4 = 122;

console.log("Ans: 4");

console.log(reverseDigit(inp_4));

/*
5.Given a number and its reverse. Find that number raised to the power of its own reverse.
Note: As answers can be very large, print the result modulo 109 + 7.

Example:

Input: N = 2, R = 2
Output: 4
Explanation: The reverse of 2 is 2 and after raising power of 2 by 2 we get 4 which gives remainder as 4 when divided by 1000000007.

Input: N = 12, R = 21
Output: 864354781
Explanation: The reverse of 12 is 21and 1221 when divided by 1000000007 gives remainder as 864354781.

Your Task:
You don't need to read input or print anything. You just need to complete the function pow() that takes two parameters N and R denoting the input number and its reverse and returns power of (N to R)mod(109 + 7).

Expected Time Complexity: O(LogN).
Expected Auxiliary Space: O(LogN).
*/

const MOD = 1000000007;

function reverseNumber(n) {
  let reverse = 0;

  while (n > 0) {
    reverse = reverse * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return reverse;
}

function powerMod(N, R, MOD) {
  let result = 1;
  N = N % MOD;
  if (N === 0) return 0;

  while (R > 0) {
    if (R % 2 === 1) {
      result = (result * N) % MOD;
    }

    R = Math.floor(R / 2);
    N = (N * N) % MOD;
  }
  return result;
}

function pow(N, R) {
  return powerMod(N, R, MOD);
}

let N = 12;
let R = reverseNumber(N);

console.log("Ans: 5");

console.log(pow(N, R));

/*
6.Given two positive integers a and b, find GCD of a and b.

Note: Don't use the inbuilt gcd function

Examples:

Input: a = 3, b = 6
Output: 3
Explanation: GCD of 3 and 6 is 3

Input: a = 1, b = 1
Output: 1
Explanation: GCD of 1 and 1 is 1

Expected Time Complexity: O(log(min(a, b)))
Expected Auxiliary Space: O(1)
*/

function gcd(a, b) {
  let rem = 1;
  let dividend;
  let divisor;

  if (a > b) {
    dividend = a;
    divisor = b;
  } else {
    dividend = b;
    divisor = a;
  }

  while (rem !== 0) {
    rem = dividend % divisor;
    if (rem !== 0) {
      dividend = divisor;
      divisor = rem;
    }
  }
  return divisor;
}

let A = 3;
let B = 6;

console.log("Ans: 6");

console.log(gcd(A, B));

function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(gcd(1, 1));

/*
7.Given an integer ‘N’, your task is to write a program that returns all the divisors of ‘N’ in ascending order.

For example:
'N' = 5.
The divisors of 5 are 1, 5.

Sample Input 1 :
10
Sample Output 1 :
1 2 5 10

Explanation of Sample Input 1:
The divisors of 10 are 1,2,5,10.

Sample Input 2 :
6
Sample Output 2 :
1 2 3 6

Explanation of Sample Input 2:
The divisors of 6 are 1, 2, 3, and 6.
*/

function findDivisors(N) {
  let divisors = [];

  for (let i = 1; i * i <= N; i++) {
    if (N % i === 0) {
      divisors.push(i);

      if (i !== N / i) {
        divisors.push(N / i);
      }
    }
  }
  return divisors.sort((a, b) => a - b);
}

let inp_7 = 10;

console.log("Ans: 7");

console.log(findDivisors(inp_7).join(" "));

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

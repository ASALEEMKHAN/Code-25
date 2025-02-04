/*
1.You are given a task to tell whether the number is pure or not. A pure number is a number whose sum of digits is multiple of 3.

O(1) time and O(1) space

Input Description:
You are given a number n.

Output Description:
Print yes if it is pure else not

Sample Input :
13

Sample Output :
not
*/

function isPureNumber(n) {
  let num = n;
  let sum = 0;

  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  if (sum % 3 === 0) {
    return "yes";
  } else {
    return "not";
  }
}

const input_1 = 13;
const res_1 = isPureNumber(input_1);

console.log("Ans: 1");

console.log(res_1);

/*
2.Find the minimum among 10 numbers.
Sample Testcase :
INPUT
5 4 3 2 1 7 6 10 8 9

OUTPUT
1
*/

let numbers = "5 4 3 2 1 7 6 10 8 9".split(" ").map(Number);

let minNum = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < minNum) {
    minNum = numbers[i];
  }
}

console.log("Ans: 2");

console.log(minNum);

/*
3.You are given a number ‘n’. You have to tell whether a number is great or not. A great number is a number whose sum of digits let (m) and product of digits let(j) when summed together gives the number back

m+j=n

Input Description:
You are given a number n;

Output Description:
Print Great if a number is great else print the no

Sample Input :
59

Sample Output :
Great
*/

function isGreatNumber(n) {
  let sum = 0;
  let product = 1;
  let num = n;

  while (num > 0) {
    let digit = num % 10;
    sum += digit;
    product *= digit;
    num = Math.floor(num / 10);
  }

  if (sum + product === n) {
    return "Great";
  } else {
    return "no";
  }
}

const input_3 = 59;
const res_3 = isGreatNumber(input_3);

console.log("Ans: 3");

console.log(res_3);

/*
4.You are given a large number made of only 0’s and 1’s.Your task is to find the max no of consecutive 1’s. If there are no 1’s print -1

Input Description:
A large number ‘n’

Output Description:
Print the max no of consecutive 1 in the number

Sample Input :
101011111

Sample Output :
5
*/

function maxConsecutiveOnes(binaryNum) {
  let maxCount = 0;
  let currentCount = 0;

  for (const digit of binaryNum) {
    if (digit === "1") {
      currentCount++;
      maxCount = Math.max(maxCount, currentCount);
    } else {
      currentCount = 0;
    }
  }
  return maxCount > 0 ? maxCount : -1;
}

const input_4 = "101011111";

console.log("Ans: 4");

console.log(maxConsecutiveOnes(input_4));

/*
5.Given a number N, print yes if the number is a multiple of 7 else print no.
Sample Testcase :
INPUT
49

OUTPUT
yes
*/

let input_5 = 49;

console.log("Ans: 5");

if (input_5 % 7 === 0) {
  console.log("yes");
} else {
  console.log("no");
}

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

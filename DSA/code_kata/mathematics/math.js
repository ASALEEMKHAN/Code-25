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
6.You are given a set of numbers, out of which you have to tell which of them are finest. A finest number ‘n’ is a number which is formed by a number ‘t’ such that

n=t^3+(t+1)^3

t is a natural number

Input Description:
You are given a number ‘z’ representing total numbers in an array, Next line contains z space separated numbers.

Output Description:
Print the numbers which are finest in ascending order if there are no such numbers print -1.

Sample Input :
2
1729 189
Sample Output :
189 1729
*/

function isFinestNumbers(n) {
  let t = 1;

  while (true) {
    let finestNumbers = Math.pow(t, 3) + Math.pow(t + 1, 3);
    if (finestNumbers === n) {
      return true;
    }
    if (finestNumbers > n) {
      break;
    }
    t++;
  }
  return false;
}

function findFinestNumbers(z, numbers) {
  let finestNumbers = [];

  for (let i = 0; i < z; i++) {
    if (isFinestNumbers(numbers[i])) {
      finestNumbers.push(numbers[i]);
    }
  }

  if (finestNumbers.length === 0) {
    console.log(-1);
  } else {
    finestNumbers.sort((a, b) => a - b);
    console.log(finestNumbers.join(" "));
  }
}

let z = 2;
let inputNumbers = [1729, 189];

console.log("Ans: 6");

findFinestNumbers(z, inputNumbers);

/*
7.Given 3 numbers a,b,c print a*b mod c.

Sample Testcase :
INPUT
5 3 2

OUTPUT
1
*/

let input_7 = "5 3 2".split(" ").map(Number);

let a = input_7[0];
let b = input_7[1];
let c = input_7[2];

let res_7 = (a * b) % c;

console.log("Ans: 7");

console.log(res_7);

/*
8.You are provided with a number ’n’. Your task is to tell whether that number is saturated. A saturated number is a number which is made by exactly two digits.

Input Description:
You are given with a number n.

Output Description:
Print Saturated if it is saturated else it is Unsaturated

Sample Input :
121 

Sample Output :
Saturated
*/

function isSaturated(n) {
  const uniqueDigits = new Set(n.toString().split(""));

  return uniqueDigits.size === 2 ? "Saturated" : "unSaturated";
}

const input_8 = 121;

console.log("Ans: 8");

console.log(isSaturated(input_8));

/*
9.boy rolls an unbiased die until he gets ‘1’. You are given a number n find the total sum of probability that he will get ‘1’ on or before nth trial.(Probability of getting 1 at 1 time + probability of getting 1 at 2 trial….+probability of getting 1 at nth trial)

Constraints

1<=n<=1000

Input Description:
You are given a number ‘n’.

Output Description:
Print two numbers denoting numerator and denominator

Sample Input :
1

Sample Output :
1 6
*/

function findProbabilitySum(n) {
  let numerator = Math.pow(6, n) - Math.pow(5, n);
  let denominator = Math.pow(6, n);

  return `${numerator} ${denominator}`;
}

const input_9 = 1;

console.log("Ans: 9");

console.log(findProbabilitySum(input_9));

/*
10.In a firm there is an intelligent employee. He said that he will not work on all those days which has factors more than 2. You are given with month and year calculate the no of working days of employee.

Input Description:
Month(M) and year(Y)

Output Description:
N denoting no of working days

Sample Input :
May 2016

Sample Output :
11
*/

function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
}

function workingDays(month, year) {
  const daysInMonth = new Date(
    year,
    new Date(Date.parse(month + " 1," + year)).getMonth() + 1,
    0
  ).getDate();

  let workingDays = 0;

  for (let day = 1; day <= daysInMonth; day++) {
    if (isPrime(day)) {
      workingDays++;
    }
  }
  return workingDays;
}

const input_10 = "May 2016".split(" ");
const [month, year] = input_10;

console.log("Ans: 10");

console.log(workingDays(month, year));

/*
1.You are given A = Length of a rectangle & B = breadth of a rectangle. Find its area “C”.

(A and B are natural numbers)

Input Description:
The inputs are two natural numbers representing the length and the breadth of a rectangle.

Output Description:
Find the area of the rectangle formed by the provided input. Round off the answer to the first decimal place if required.

Sample Input :
2
3

Sample Output :
6
*/

let A = 2;
let B = 3;

let C = A * B;

console.log("Ans: 1");

console.log(C);

/*
2.You are given a number A in Kilometers. Convert this into B: Meters and C: Centi-Metres.

Input Description:
A number "A" representing some distance in kilometer is provided to you as the input.

Output Description:
Convert and print this value in meters and centimeters.

Sample Input :
2

Sample Output :
2000
200000 
*/

// a => kilometers - 2
// b => meters - (k * 1000)
// c => centimeters - (m * 100)

let a = 2;

let b = a * 1000;
let c = b * 100;

console.log("Ans: 2");

console.log(b);
console.log(c);

/*
3.You are provided with the radius of a circle "A". Find the length of its circumference.

Note: In case the output is coming in decimal, roundOff to 2nd decimal place. In case the input is a negative number, print "Error".

Input Description:
The Radius of a circle is provided as the input of the program.

Output Description:
Calculate and print the Circumference of the circle corresponding to the input radius up to two decimal places.

Sample Input :
2

Sample Output :
12.57
*/

// radius = 2, Circumference_formula => 2 * pi * r => 2 * 3.1415 * 2

let radius = 2;

if (radius < 0) {
  console.log("Error");
}

let circumference = 2 * Math.PI * radius;

console.log("Ans: 3");

console.log(circumference.toFixed(2));

/*
4.You are given with a number "N", find its cube.

Input Description:
A positive integer is provided.

Output Description:
Find the cube of the number.

Sample Input :
2

Sample Output :
8
*/

// cube => 2^3

let N = 2;

let cube = Math.pow(N, 3);

console.log("Ans: 4");

console.log(cube);

/*
5.You are given with a number A i.e. the temperature in Celcius. Write a program to convert this into Fahrenheit. 

Note: In case of decimal values, round-off to two decimal places.

Input Description:
A number is provided in Celcius as the input of the program.

Output Description:
The output shall be the temperature converted into Fahrenheit corresponding to the input value print up to two decimal places and round off if required.

Sample Input :
12

Sample Output :
53.60
*/

// Fahrenheit_formula = (32°C × 9/5) + 32 = 89.6°F

let celcius = 12;

let fahrenheit = (celcius * 9) / 5 + 32;

console.log("Ans: 5");

console.log(fahrenheit.toFixed(2));

/*
6.You are provided with a number check whether its odd or even. 

Print "Odd" or "Even" for the corresponding cases.

Note: In case of a decimal, Round off to nearest integer and then find the output. Incase the input is zero, print "Zero".

Input Description:
A number is provided as the input.

Output Description:
Find out whether the number is odd or even. Print "Odd" or "Even" for the corresponding cases. Note: In case of a decimal, Round off to nearest integer and then find the output. In case the input is zero, print "Zero".

Sample Input :
2

Sample Output :
Even
*/

let num = 2;

let rounded = Math.round(num);

console.log("Ans: 6");

if (rounded === 0) {
  console.log("Zero");
} else if (rounded % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

/*
7.You are provided with a number "N", Find the Nth term of the series: 1, 4, 9, 16, 25, 36, 49, 64, 81, .......

(Print "Error" if N = negative value and 0 if N = 0).

Input Description:
An integer N is provided to you as the input.

Output Description:
Find the Nth term in the provided series.

Sample Input :
18

Sample Output :
324
*/

let N1 = 18;

console.log("Ans: 7");

if (N1 < 0 || N1 === 0) {
  console.log("Error");
} else {
  console.log(N1 * N1);
}

/*
8.You are provided with a number, "N". Find its factorial.

Input Description:
A positive integer is provided as an input.

Output Description:
Print the factorial of the integer.

Sample Input :
2

Sample Output :
2
*/

let number = 4;
let fact = 1;

for (let i = 1; i <= number; i++) {
  fact = fact * i;
}

console.log("Ans: 8");

console.log(fact);

/*
9.You are given three numbers A, B & C. Print the largest amongst these three numbers.

Input Description:
Three numbers are provided to you.

Output Description:
Find and print the largest among the three

Sample Input :
1
2
3

Sample Output :
3
*/

let aa = 1;
let bb = 2;
let cc = 3;

let largest = Math.max(aa, bb, cc);

console.log("Ans: 9");

console.log(largest);

/*
10.Write a code to get the input and print it 5 times.

Input Description:
A single line contains an integer N.

Output Description:
Output contains 5 lines with each line having the value N.

Sample Input :
4

Sample Output :
4
4
4
4
4
*/

let n = 4;

console.log("Ans: 10");

for (let i = 0; i < 5; i++) {
  console.log(n);
}

/*
11.You will be provided with a number. Print the number of days in the month corresponding to that number.

Note: In case the input is February, print 28 days. If the Input is not in valid range print "Error".

Input Description:
The input is in the form of a number.

Output Description:
Find the days in the month corresponding to the input number. Print Error if the input is not in a valid range.

Sample Input :
8

Sample Output :
31
*/

let month = 8;

if (month === 0 || month >= 13) {
  console.log("Error");
}

console.log("Ans: 11");

switch (month) {
  case 1:
    console.log("31");
    break;
  case 2:
    console.log("28");
    break;
  case 3:
    console.log("31");
    break;
  case 4:
    console.log("30");
    break;
  case 5:
    console.log("31");
    break;
  case 6:
    console.log("30");
    break;
  case 7:
    console.log("31");
    break;
  case 8:
    console.log("31");
    break;
  case 9:
    console.log("30");
    break;
  case 10:
    console.log("31");
    break;
  case 11:
    console.log("30");
    break;
  case 12:
    console.log("31");
    break;

  default:
    console.log("default case match");
    break;
}

/*
12.You are given with Principle amount($), Interest Rate(%) and Time (years) in that order. Find Simple Interest.

Print the output up to two decimal places (Round-off if necessary).

(S.I. = P*T*R/100)

Input Description:
Three values are given to you as the input. these values correspond to Principle amount, Interest Rate and Time in that particular order.

Output Description:
Find the Simple interest and print it up to two decimal places. Round off if required.

Sample Input :
1000 2 5

Sample Output :
100.00
*/

let p = 1000;
let r = 2;
let t = 5;

let S_I = ((p * r * t) / 100).toFixed(2);

console.log("Ans: 12");

console.log(S_I);

/*
13.Let "A" be a year, write a program to check whether this year is a leap year or not.

Print "Y" if its a leap year and "N" if its a common year.

Input Description:
A Year is the input in the form of a positive integer.

Output Description:
Print "Y" if its a leap year and "N" if its a common year.

Sample Input :
2020

Sample Output :
Y
*/

let year = 2020;

console.log("Ans: 13");

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("Y");
} else {
  console.log("N");
}

/*
14.Write a code to get an integer N and print values from 1 till N in a separate line.

Input Description:
A single line contains an integer N.

Output Description:
Print the values from 1 to N in a separate line.

Sample Input :
5

Sample Output :
1
2
3
4
5
*/

let nN = 5;

console.log("Ans:14");

for (let i = 1; i <= nN; i++) {
  console.log(i);
}

/*
15.Write a code to get an integer N and print the values from N to 1.

Input Description:
A single line contains an integer N.

Output Description:
Print the values from N to 1 in a separate line.

Sample Input :
10

Sample Output :
10
9
8
7
6
5
4
3
2
1

*/

let nNn = 10;

console.log("Ans:15");

for (let i = nNn; i > 0; i--) {
  console.log(i);
}

/*
16.Note: The output should be up to 2nd decimal place (round off if needed) and in case of a recurring decimal use braces i.e. for eg: 0.33333..... => 0.33.

Note: Use Shri Dharacharya's Method to solve i.e. X = {-b + √(b² - 4ac) } / 2a & {-b-√(b² -4ac)} / 2a

Input Description:
Three numbers corresponding to the coefficients of x(squared), x and constant are given as an input in that particular order

Output Description:
Print the two values of X after rounding off to 2 decimal places if required.

Sample Input :
1 5 6

Sample Output :
-2.00
-3.00
*/

const X = "1 5 6".split(" ");

let aA = X[0];
let bB = X[1];
let cC = X[2];

let dD = (-bB + Math.sqrt(bB * bB - 4 * aA * cC)) / (2 * aA);

let eE = (-bB - Math.sqrt(bB * bB - 4 * aA * cC)) / (2 * aA);

console.log("Ans:16");

console.log(dD.toFixed(2));
console.log(eE.toFixed(2));

/*
17.Let "A"  be a string. Remove all the whitespaces and find it's length.

Input Description:
A string is provide as an input

Output Description:
Remove all the whitespaces and then print the length of the remaining string.

Sample Input :
Lorem Ipsum

Sample Output :
10
*/

// let str = "Lorem Ipsum";

// let count = 0;

// console.log("Ans: 17");

// for (let i = 0; i < str.length; i++) {
//   if (str[i] !== " ") {
//     count++;
//   }
// }

// console.log(count);

let str = "Lorem Ipsum";

let newStr = str.replace(/\s/g, "").length;

console.log("Ans: 17");

console.log(newStr);

/*
18.Write a code get an integer number as input and print the sum of the digits.

Input Description:
A single line containing an integer.

Output Description:
Print the sum of the digits of the integer.

Sample Input :
124

Sample Output :
7
*/

let numStr = "124".split("");

let sum = 0;

for (let i = 0; i < numStr.length; i++) {
  sum += parseInt(numStr[i]);
}

console.log("Ans: 18");

console.log(sum);

/*
19.Write a code to get 2 integers as input and find the HCF of the 2 integer without using recursion or Euclidean algorithm.

Input Description:
A single line containing 2 integers separated by space.

Output Description:
Print the HCF of the integers.

Sample Input :
2 3

Sample Output :
1
*/

function findHcf(a, b) {
  let min = Math.min(a, b);

  let hcf = 1;

  for (let i = 1; i <= min; i++) {
    if (a % i === 0 && b % i === 0) {
      hcf = i;
    }
  }

  return hcf;
}

let input = "2 3";

let [num1, num2] = input.split(" ").map(Number);

const hcfResult = findHcf(num1, num2);

console.log("Ans: 19");

console.log(hcfResult);

/*
20.Write a code to get an integer N and print the digits of the integer.

Input Description:
A single line contains an integer N.

Output Description:
Print the digits of the integer in a single line separated by space,

Sample Input :
348

Sample Output :
3 4 8
*/

let separated = "348".split("").join(" ");

console.log("Ans: 20");

console.log(separated);

/*
21.Write a code to get an integer N and print the even values from 1 till N in a separate line.

Input Description:
A single line contains an integer N.

Output Description:
Print the even values from 1 to N in a separate line.

Sample Input :
6

Sample Output :
2
4
6
*/

let numN = 6;

console.log("Ans: 21");

for (let i = 1; i <= numN; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

/*
22.Write a code to get 2 integers A and N. Print the integer A, N times in separate line.

Input Description:
First line contains an integer A. Second line contains an Integer N.

Output Description:
Print the integer A, N times in a separate line.

Sample Input :
2 3

Sample Output :
2
2
2
*/

let num_an = "2 3".split(" ");

let a1 = num_an[0];
let n1 = num_an[1];

console.log("Ans: 22");

for (let i = 0; i < n1; i++) {
  console.log(a1);
}

/*
23.Write a code get an integer number as input and print the odd and even digits of the number separately.

Input Description:
A single line containing an integer.

Output Description:
Print the even and odd integers of the integer in a separate line.

Sample Input :
1234

Sample Output :
2 4
1 3
*/

let in_num = "1234".split("");

let en = [];
let on = [];

for (let i = 0; i < in_num.length; i++) {
  if (in_num[i] % 2 === 0) {
    en.push(in_num[i]);
  } else {
    on.push(in_num[i]);
  }
}

console.log("Ans: 23");

console.log(en.join(" "));
console.log(on.join(" "));

/*
24.Print the First 3 multiples of the given number "N". (N is a positive integer)

Note: print the characters with a single space between them.

Input Description:
A positive integer is provided to you as an input.

Output Description:
Print the First 3 multiples of the number with single spaces between them as an output.

Sample Input :
2

Sample Output :
2 4 6
*/

// let inputN = 2;

// let mul1 = inputN * 1;
// let mul2 = inputN * 2;
// let mul3 = inputN * 3;

// console.log("Ans: 24");

// console.log(`${mul1} ${mul2} ${mul3}`);

let inputN = 2;

let mul = [];

for (let i = 1; i <= 3; i++) {
  mul.push(inputN * i);
}

console.log("Ans: 24");

console.log(mul.join(" "));

/*
25.The area of an equilateral triangle is ¼(√3a2) where "a" represents a side of the triangle. You are provided with the side "a". Find the area of the equilateral triangle.

Input Description:
The side of an equilateral triangle is provided as the input.

Output Description:
Find the area of the equilateral triangle and print the answer up to 2 decimal places after rounding off.

Sample Input :
20

Sample Output :
173.21
*/

let in_a = 20;

let res_a = (Math.sqrt(3) * in_a * in_a) / 4;

console.log("Ans: 25");

console.log(res_a.toFixed(2));

/*
26.Using the method of looping, write a program to print the table of 9 till N in the format as follows:
(N is input by the user)

9 18 27...

Print NULL if 0 is input

Input Description:
A positive integer is provided as an input.

Output Description:
Print the table of nine with single space between the elements till the number that is input.

Sample Input :
3

Sample Output :
9 18 27
*/

let inN = 3;

console.log("Ans: 26");

if (inN === 0) console.log("NULL");

let table = [];

for (let i = 1; i <= inN; i++) {
  table.push(9 * i);
}

console.log(table.join(" "));

/*
27.Write a program to get a string as input and reverse the string without using temporary variable.

Input Description:
A single line containing a string.

Output Description:
Print the reversed string.

Sample Input :
GUVI
Sample Output :
IVUG
*/

let inStr = "GUVI".split("");

let revStr = inStr.reverse().join("");

console.log("Ans: 27");

console.log(revStr);

/*
28.You are given Two Numbers, A and B. If C = A + B. Find C.

Note: Round off the output to a single decimal place.

Input Description:
You are provided with two numbers A and B.

Output Description:
Find the sum of the two numbers (A + B)

Sample Input :
1
1

Sample Output :
2
*/

let in_A = 1;
let in_B = 1;

let in_C = in_A + in_B;

console.log("Ans: 28");

console.log(Math.round(in_C));

/*
29.You are provided with two numbers. Find and print the smaller number.

Input Description:
You are provided with two numbers as input.

Output Description:
Print the small number out of the two numbers.

Sample Input :
23 1

Sample Output :
1
*/

let twoNum = "23 1".split(" ");

let num_1 = twoNum[0];
let num_2 = twoNum[1];

let smallNum = Math.min(num_1, num_2);

console.log("Ans: 29");

console.log(smallNum);

/*
30.Write a code to get an integer N and print the sum of  values from 1 to N.

Input Description:
A single line contains an integer N.

Output Description:
Print the sum of values from 1 to N.

Sample Input :
10

Sample Output :
55
*/

let in_n = 10;

let sumN = 0;

for (let i = 1; i <= in_n; i++) {
  sumN += i;
}

console.log("Ans: 30");

console.log(sumN);

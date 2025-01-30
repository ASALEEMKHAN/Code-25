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

console.log("Ans: 1");

let C = A * B;
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

console.log("Ans: 3");

let circumference = 2 * Math.PI * radius;
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

console.log("Ans: 8");

for (let i = 1; i <= number; i++) {
  fact = fact * i;
}
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

console.log("Ans: 9");

let largest = Math.max(aa, bb, cc);
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

/*
1.Write a code to get the input in the given format and print the output in the given format

Input Description:
To take an integer value

Output Description:
Print the integer value

Sample Input :
2
Sample Output :
2 
*/

const number = 2;

console.log("Ans: 1");

console.log(number);

/*
2.Write a code to get the input in the given format and print the output in the given format

Input Description:
A single line contains integers separated by space

Output Description:
Print the integer list of integers separated by space

Sample Input :
2 3 4 5 6 7 8
Sample Output :
2 3 4 5 6 7 8
*/

let num = "2 3 4 5 6 7 8";

console.log("Ans: 2");

console.log(num);

/*
3.Write a code to get the input in the given format and print the output in the given format.

Input Description:
First-line indicates two integers which are the size of array and 'K' value. Second-line indicates an integer contains elements of an array.

Output Description:
Print the taken input in the same format.

Sample Input :
5 3
1 2 3 4 5
Sample Output :
5 3
1 2 3 4 5
*/

let str1 = "5 3";
let str2 = "1 2 3 4 5";

console.log("Ans: 3");

console.log(str1);
console.log(str2);

/*
4.Write a code to get the input in the given format and print the output in the given format

Input Description:
First-line indicates two integers separated by space. Second-line indicates two integers separated by space. Third-line indicates two integers separated by space.

Output Description:
Print the input in the same format.

Sample Input :
2 4
2 4
2 4
Sample Output :
2 4
2 4
2 4
*/

let a = "2 4";
let b = "2 4";
let c = "2 4";

console.log("Ans: 4");

console.log(a);
console.log(b);
console.log(c);

/*
5.Write a code to get the input in the given format and print the output in the given format

Input Description:
Three integers are given in line by line.

Output Description:
Print the integers in a single line separate by space.

Sample Input :
2
4
5
Sample Output :
2 4 5
*/

let aa = 2;
let ab = 4;
let ac = 5;

console.log("Ans: 5");

console.log(aa, ab, ac);

/*
6.Write a code to get the input in the given format and print the output in the given format

Input Description:
First-line indicates two integers separated by space. Second-line indicates three integers separated by space. Third-line indicates three integers separated by space

Output Description:
Print the input in the same format.

Sample Input :
2 5
2 5 6
2 4 5
Sample Output :
2 5
2 5 6
2 4 5
*/

let num1 = "2 5";
let num2 = "2 5 6";
let num3 = "2 4 5";

console.log("Ans: 6");

console.log(num1);
console.log(num2);
console.log(num3);

/*
7.Write a code to get the input in the given format and print the output in the given format

Input Description:
A single line contains a string.

Output Description:
Print the characters in a string separated by space.

Sample Input :
guvi
Sample Output :
g u v i
*/

let char = "guvi".split("").join(" ");

console.log("Ans: 7");

console.log(char);

/*
8.Write a code to get the input in the given format and print the output in the given format.

Input Description:
A single line contains three float values separated by space.

Output Description:
Print the float value separated by line.

Sample Input :
2.3 4.5 7.8
Sample Output :
2.3
4.5
7.8
*/

let float = "2.3 4.5 7.8".split(" ");

console.log("Ans: 8");

console.log(float[0]);
console.log(float[1]);
console.log(float[2]);

/*
9.Write a code to get the input in the given format and print the output in the given format.

Input Description:
A single line contains a string.

Output Description:
Print the characters in a string separated by line.

Sample Input :
guvigeek
Sample Output :
g
u
v
i
g
e
e
k
*/

let characters = "guvigeek".split("");

console.log("Ans: 9");

for (let i = 0; i < characters.length; i++) {
  console.log(characters[i]);
}

/*
10.Write a code to get the input in the given format and print the output in the given format.

Input Description:
A single line contains a string.

Output Description:
Print the characters in a string separated by comma.

Sample Input :
guvi
Sample Output :
g,u,v,i
*/

let str = "guvi".split("").join(",");

console.log("Ans: 10");

console.log(str);

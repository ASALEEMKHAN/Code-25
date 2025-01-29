// 01_variable:-

// const accountId = 144553;
// let accountEmail = "h@gmail.com";
// var accountPassword = "1234";
// accountCity = "Chennai";
// let accountState; // undefined
// let accountState = null;

// console.table([
//   accountId,
//   accountEmail,
//   accountPassword,
//   accountCity,
//   accountState,
// ]);

// Notes:-

// const accountId = 35425; // (Assignment to constant variable). so redeclared as a same variable name not allow to write (const).

// accountId = 35425; // (Assignment to constant variable). so reassignment not allow to write (const) variable.

// let accountEmail = "c@gmail.com"; // (Identifier 'accountEmail' has already been declared), so redeclared as a same variable name not allow to write (let) variable.

// accountEmail = "c@gmail.com"; // reassignment possible to write code in (let variable).

// var accountPassword = "5555"; // redeclared same variable possible to write code in (var variable). but not recommend use (var) variable use anymore.

// accountPassword = "6666"; // reassignment possible to write code in (var variable). but not recommend use (var) variable use anymore.

// console.log(accountId);
// console.log(accountEmail);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 02_dataType:-

// let name = "hitesh";
// let age = 18;
// let isLoggedIn = false;

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isLoggedIn);
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof Symbol);
// console.log(typeof Object);

// number => 15;
// bigInt => 10n;
// string => "", "", ``;
// boolean => true/false
// null => object (standalone value)
// undefined => undefined (value not assign)
// symbol => function (unique)
// object => function

// dataType-summary:-

// Primitive

// 7types: String, Number, Boolean, BigInt, null, undefine, Symbol

const score = "100";
const scoreValue = 100.3;

const isLoggedIn = false;
// const bigNumber = 5468446846616871756n
const outsideTemp = null;
let useEmail;

const id = Symbol("l123");
const anotherId = Symbol("123");

// console.log(id === anotherId); // Even if the descriptions were the same, each Symbol is unique.

// Non Primitive

// Array, Objects, Functions

const myHero = ["ironMan", "spiderMan", "thor"];

let myObj = {
  name: "hitesh",
  age: 22,
};

const myFunction = function () {
  console.log("Hello World");
};

// console.log(typeof myHero);
// console.log(typeof myObj);
// console.log(typeof myFunction);

// Stack(Primitive), Heap(Non-Primitive)

let myYoutubeName = "hiteshchaoudhatydotcom";

let anotherName = myYoutubeName;
anotherName = "chaiurcode";

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
  email: "user@gmail.com",
  upi: "user@ybl",
};

console.log(userOne);

let userTwo = userOne;
userTwo.email = "hitesh@gmail.com";

console.log(userOne);
console.log(userTwo);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 03_conversionOperation:-

// let score = "Hello";
// console.log(typeof score);

// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

// let isLogged = "Hello";
// let isLogged = "";
// let isLogged = " ";
// let isLogged = 0;
let isLogged = 1;

let booleanIsLogged = Boolean(isLogged);
// console.log(booleanIsLogged);
// console.log(typeof booleanIsLogged);

// 1 => true; 0 => false;
// "" => false, " " => true
// "Hello" => true

let someNum = 3;

let strNum = String(someNum);
// console.log(strNum);
// console.log(typeof strNum);

// Operation:-

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 / 2);
// console.log(2 ** 3);
// console.log(2 % 3);

let str1 = "Hello";
let str2 = " Hitesh";

let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
// console.log(3 + ((4 * 5) % 3));

// console.log(+true);
// console.log(-true);
// console.log(+"");
// console.log(-"");

let num1, num2, num3; // this type code no readable

num1 = num2 = num3 = 2 + 3;
// console.log(num1);
// console.log(num2);
// console.log(num3);

let counter = 200;
counter++;
// console.log(counter);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 04_comparison:-

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0); // null is converted to 0 for numerical comparisons, so this becomes 0 >= 0.
// console.log(null == 0); // checks for equality without type conversion. null only loosely equals undefined.
// console.log(null >= 0); // null is converted to 0 for numerical comparisons, so this becomes 0 >= 0.

// console.log(undefined > 0); // undefined is treated as NaN in numerical comparisons.
// console.log(undefined == 0); // // checks for equality without type conversion. null only loosely equals null.
// console.log(undefined >= 0); // undefined is treated as NaN in numerical comparisons.

// ++++++++++++++++++++++++++++++++++++++++++++

// 05_strings

const name = "hitesh";
const repoCount = 50;

// console.log("Hello my name is", name + " and my repo count is", repoCount);
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("hitesh-hc-com");

// console.log(gameName[8]);
// console.log(gameName.__proto__);

// String Methods:-

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4);
// console.log(newString);

const anotherString = gameName.slice(-8, 4);
// console.log(anotherString);

const newStringOne = "  hitesh  ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary";
// console.log(url);

// console.log(url.replace("%20", "-"));
// console.log(url.includes("sundar"));
// console.log(gameName.split("-"));

// ++++++++++++++++++++++++++++++++++++++++++++

// 06_num_and_math

// const score = 400;
// console.log(typeof score);

const balance = new Number(100); // because constructor is object
// console.log(balance);
// console.log(typeof balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNum = 123.8966;
// console.log(otherNum.toPrecision(5));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString("en-US"));

// Math:-

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// console.log(Math.random());
// console.log(Math.random() * 10 + 1);
// console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

// console.log(Math.floor(Math.random() * (max - min + 1)));

// ++++++++++++++++++++++++++++++++++++++++++++

// 07_dateInJs

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// let myCreatedDate = new Date("2023-01-14");
let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth() + 2);
// console.log(newDate.getDate());

newDate.toLocaleString("default", {
  weekday: "long",
});

// ++++++++++++++++++++++++++++++++++++++++++++

function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}

// sayMyName();

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
  //   let result = number1 + number2;
  //   return result;
  return number1 + number2;
}

const result = addTwoNumbers(3, 5);
// console.log("Result:", result);

function loginUserMessage(userName = "sam") {
  //   if (userName === undefined) {
  if (!userName) {
    console.log("Please enter a userName");
    return;
  }
  return `${userName} just logged in`;
}

// console.log(loginUserMessage("hitesh"));
// console.log(loginUserMessage("hitesh"));

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
  username: "hitesh",
  prices: 199,
};

function handleObject(anyObject) {
  console.log(
    `username is ${anyObject.username} and is price is ${anyObject.price}`
  );
}

// handleObject(user);
handleObject({
  username: "sam",
  price: 399,
});

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));

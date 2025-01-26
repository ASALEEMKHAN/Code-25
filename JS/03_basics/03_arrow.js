// this:-

const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this);

// function chai() {
//     let username = "hitesh"
//   console.log(this.username);
// }

// const chai = function () {
//   let username = "hitesh";
//   console.log(this.username);
// };

// Arrow Function:-

const chai = () => {
  let username = "hitesh";
  //   console.log(this.username);
  console.log(this);
};

// chai();

// Explicit Return:-

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// Implicit Return:-

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({ username: "hitesh" });

console.log(addTwo(3, 4));

// const myArray = [2, 5, 3, 7, 8];

// Different types of function execution in forEach loop

// myArray.forEach(function () {});
// myArray.forEach(() => {});
// myArray.forEach(() => ());

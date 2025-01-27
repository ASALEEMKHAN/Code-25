// if Statement:-

// const isUserLoggedIn = true;
// const temperature = 41;

// if (temperature === 40) {
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");

// <, >, <=, >=, ==, !=, ===

// const score = 200;

// if (score > 100) {
//   let power = "fly";
//   console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

// Short Hand notation:-

// Implicit Scope:-

const balance = 1000;

// if (balance > 500) console.log("test"), console.log("test2"); // not good practice and no readable

// Multiple Conditions in (if and else)

// if (balance < 500) {
//   console.log("less than 500");

// } else if (balance < 750) {
//   console.log("less than 750");

// } else if (balance < 900) {
//   console.log("less than 900");

// } else {
//   console.log("greater than 1200");
// }

const isUserLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// AND && operator:-
if (isUserLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course");
}

// OR || operator:-
if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in");
}

const accountId = 144553;
let accountEmail = "hitesh@google.com";
var accountPassword = "12345";
accountCity = "Chennai";
let accountState;

// accountId = 2; // not allowed

accountEmail = "bc@bc.com";
accountPassword = "212121";
accountCity = "Minjur";

console.log(accountId);

// Prefer not to use var
// because of issue in block scope and functional scope

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

const myNum = [1, 2, 3];

// const myTotal = myNum.reduce(function (acc, cur) {
//   console.log(`acc: ${acc} and cur: ${cur}`);

//   return acc + cur;
// }, 0);

// const myTotal = myNum.reduce((acc, cur) => acc + cur, 0);

// let myTotal = 0;

// myNum.forEach((num) => {
//   myTotal += num;
// });

// console.log(myTotal);

const shoppingCard = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const priceToPay = shoppingCard.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);

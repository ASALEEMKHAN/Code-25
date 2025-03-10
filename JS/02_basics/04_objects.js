// const tinderUser = new Object() // singleton object
const tinderUser = {}; // non singleton object

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userFullName: {
      firstName: "hitesh",
      lastName: "choudhary",
    },
  },
};

// console.log(regularUser.fullname.userFullName.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign({}, obj1, obj2, obj4);

// Rest Operator:-

const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "h@gmail,com",
  },
  {
    id: 1,
    email: "h@gmail,com",
  },
  {
    id: 1,
    email: "h@gmail,com",
  },
];

// console.log(users[1].email);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
  courseName: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

// course.courseInstructor

const { courseInstructor: instructor } = course;
const { price } = course;

console.log(instructor);
console.log(price);

// {
//   "name": "hitesh",
//   "courseName": "js in hindi",
//   "price": "free",
// }

[
{},
{},
{},
]

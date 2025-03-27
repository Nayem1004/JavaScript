console.log("hello bangladesh");

document.getElementById('title').innerHTML='hello world';

let sum = 150 + 40;
console.log(sum);

if (sum > 100) {
  console.log('Expensive');
} else {
  console.log('Cheep');
}

function sayHello(name) {
  console.log(`Hello ${name}`);
}
sayHello('Shovo');
//camelCase amd sanekCace
// let firstName = 'Ali';
// let age = 30;

// firstName = 'Shovo';
// FirstName = 'Hossain';
// firstname = 'ali';

// console.log(firstName);

// console.log(age + 50);

// function funcName() {
//   console.log('My First Function');
// }
// funcName();
//variable
/*
 * JavaScript variable names are case-sensitive
 ! Variable names cannot contain spaces.
 * Variables cannot be the same as reserved keywords such as `if` or `const`.
 * By convention, JavaScript variable names are written in camelCase.
 * Variables should be given descriptive names that indicate their content and usage (e.g. `sellingPrice` and `costPrice` rather than `x` and `y`).
 * You can not add number first
 * _, $ is acceptable but - not accaptable
 */

 var a = 10;
 var a = 20;
 a = 'Bangladesh';
 {
   var blocked = '30';
   console.log(a);
 }
 console.log(blocked);
 
 console.log(a);
 
 let firstName;
 let FirstName;
 
 let fruits = 'Orange';
 
 var country = 'Bangladesh';
 console.log(country);
 console.log(`${fruits} is my fav, ${fruits} I like to eat`);
 let b = 10;
b = 11;
{
  console.log(b);
}
const c = 10;
{
  const d = 50;
  console.log(c);
  console.log(d);
}

const person = {
  firstName: 'Ali',
  age: 30,
};
person.country = 'Bangladesh';
person.age = 32;

console.log(person);

let $firstName1 = 'Shovo';
 
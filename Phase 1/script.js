'use strict'; // activates strict mode --> which helps us to write secure code
// Values and let

let number = 7; // declaring a number to a let

console.log(number); // printing out the number to the console

let firstName = 'Sanjith';
let lastName1 = 'Kumar';
console.log(firstName + ' ' + lastName1); // concatenating the two let

let isAttending = true;
console.log(isAttending); // this is a boolean value

let initialPoint = null;
console.log(initialPoint); // null data type

let finalPoint = undefined;
console.log(finalPoint); // undefined data type

// const $name = "Sanju"  valid JavaScript
// const &name = "Sanju"  Invalid JavaScript

// const let = "JavaScript" // invalid

// Preferred way to name let
let selectedMajor = 'Automobile';
let interestedMajor = 'Computer Science';

// not Preferred to name let

let major1 = 'Automobile';
let major2 = 'Computer Science';

/**
 * Rules to follow while naming a let
 iable
 * the let
 iable is recommended to be declared using camelCase
 * the let
 iables should'nt start using numbers, special characters except $ ,_
 * you cannot declare a let
 iable with a reserved keywords
 * example : const const = "Hello" --> invalid
 */

// Assignment 1

const country = 'India';
let populationIndia = 2100000000;
const continent = 'Asia';

console.log(country);
console.log(populationIndia);
console.log(continent);

// Data Types
/**
 * The 7 primitive Data Types
 * Number = which is a floating point number 23.00 == 23, let num = 27;
 * String = it is a sequence of characters, quote = "JavaScript" or quote = 'JavaScript' both are valid
 * Boolean = which is either true or false, used in decision making isAttending = true or false
 * Undefined = a value which is not defined yet
 * null = a value which is empty
 * symbol = used in ES2015
 * BigInt = used after ES2020, which is used to declare large numbers
 */

/**
 * JavaScript has dynamic typing, which means that we do not have to manually define the data type
 * of the value stored in a let
 iable, JavaScript automatically determines the data type
 * the value has the type not the let
 iable we declare
 * the below code is an example
 */

let x = 35;
x = 'Bengaluru'; // Dynamic typing
console.log(x);

// the below code does'nt work because the let
// be declared first then should be accessed, now the code is out of reach
// console.log(isJavaScriptFun)
// let isJavaScriptFun = true

// this will run fine and returns true
const isJavaScriptFun = true;
console.log(isJavaScriptFun);

// typeof operator which is used to see the type of the value

console.log(typeof null); // this is a bug in JavaScript

// Assignment 2

const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof language);
console.log(typeof populationIndia);
console.log(typeof country);

// let
//  let and const

// usage of let
//  is not recommended in modern JavaScript

// DON'T USE let
// !!!
// let
// data = true;
// data = false; // let
// //  allows us to change the value even after declaration
// console.log(data); //
/*
it is recommended to use let when the value of it let
ies
let allows us to declare an empty let
iable
use let when you need to change the value after a period of time
*/
let name2 = 'Sanju';
name2 = 'Kumar'; // let allows us to change the name of the let
console.log(name2);
/*
it is recommended to use const when the value doesn't change or let
y
in the const we cannot declare an empty let
iable
const text; --> this will throw an error
*/
const name1 = 'Punith';
// name1 = "Kumar" // you cannot change the value when it is declared using a const
console.log(name1);

// We can declare a let without using let or const

let lastName = 'Kumar';
console.log(lastName);
// but this will not create a let
// iable in the local scope, instead creates
// it in a global scope, hence not recommended to do this.

// Assignment 3
language = 'Kannada'; // doesn't thrown any error, since let was used for declaration
// isIsland = true --> throws an error, since const was used for declaration

// OPERATORS
// operators allows us to transform values or combine values together

// Arithmetic operators
let num1 = 5;
let num2 = 3;

console.log(num1 + num2); // addition operator, adds two values together
console.log(num1 - num2); // subtract operator, subtracts the two values
console.log(num1 * num2); // multiplication operator, multiply the two values
console.log(num1 / num2); // division operator, divide the two values
console.log(num1 % num2); // Remainder operator, gives the remainder
console.log(num1 ** num2); // Exponential Operator, returns the exponential value

const certainYearInTheFuture = 2065; // to avoid more duplicate code
let ageSanju = certainYearInTheFuture - 2001;
let ageSagar = certainYearInTheFuture - 2011;
console.log(ageSanju, ageSagar); // we are logging multiple values here

console.log(ageSanju * 2, ageSagar / 2); // we are logging two operations at the same time
console.log(3 ** 3, 12 % 5);

// String Concatenation

const firstString = 'Hello, and';
const secondString = 'Welcome';
console.log(firstString + ' ' + secondString + '!'); // we are using '+' to add two strings together

// Assignment Operators

let value = 20;
value += 10; // this does the same as value = value + 10
console.log(value);
value -= 10; // this does the same as value = value - 10
console.log(value);
value *= 2; // this does the same as value = value * 2
console.log(value);
value /= 4; // this does the same as value = value / 2
console.log(value);
value **= 2; // this does the same as value = value ** 2
console.log(value);
value++; // this does the same as value = value + 1, the original value is displayed then it is incremented
console.log(value);
++value; // first it gets incremented, and then displays the value
console.log(value);
value--; // this does the same as value = value - 1, the original value is displayed then it is decremented
console.log(value);
--value; // it gets decremented, and then displays the value
console.log(value);

// Comparison Operators

console.log(ageSanju > ageSagar); // greater than operator
console.log(ageSanju < ageSagar); // lesser than operator
console.log(ageSanju >= ageSagar); // greater than or equal to operator
console.log(ageSanju <= ageSagar); // less than or equal to operator
console.log(ageSanju == ageSagar); // equal to operator
ageSagar = '64';
console.log(ageSanju == ageSagar); // this will return true
console.log(ageSanju != ageSagar); // this will return true
console.log(ageSanju === ageSagar); // this will return false, because it checks the type as well
console.log(ageSanju !== ageSagar); // returns true, again it checks for the type as well

// Assignment 5

let halfPopulation = populationIndia / 2;
console.log(halfPopulation);
populationIndia++;
console.log(populationIndia);
let populationFinland = 6000000;
const theAnswerIs = populationIndia > populationFinland;
console.log(theAnswerIs);

const averagePopulation = 33000000;
console.log(populationIndia < averagePopulation);

const description =
  'India is the Asian Sub continent and it has bunch of languages, and hindi is spoken dominantly, which is around 50 million people speak hindi';

// Operator Precedence

const ageNow = 2056;
const ageSam = ageNow - 2001;
const ageLil = ageNow - 2012;

console.log(ageSam > ageLil);
console.log(2022 - 2001 > 2022 - 2013); //operator precedence the operation is done first then the comparison

// Coding Challenge 1

const massMark = 78;
const massJohn = 92;
const heightMark = 1.69;
const heightJohn = 1.95;

const bmiOfMark = massMark / (heightMark * heightMark);
const bmiOfJohn = massJohn / heightJohn ** heightJohn;
console.log(bmiOfMark, +' ' + bmiOfJohn);

if (bmiOfMark > bmiOfJohn) {
  console.log(true);
} else {
  console.log(false);
}

// String and Template Literals

const myName = 'Sanjith';
const myPetName = 'Sanju';
const birthYear = 2001;
console.log(
  `I am ${myName} and my pet name is ${myPetName} and i was born in ${birthYear}, and my current age is ${
    2022 - birthYear
  }`
);

// Assignment 6
// const description =
// "India is the Asian Sub continent and it has bunch of languages, and hindi is spoken dominantly, which is around 50 million people speak hindi";

const countryName = 'India';
const continentName = 'Asia';
const languageName = 'Hindi';
const populationCount = 120000000;
const literalDescription = `The country ${countryName} is in the ${continentName} sub
continent, ${languageName} is spoken pre dominantly, and has a population of
${populationCount}`;
console.log(literalDescription);

// Conditional Statements

const age = 26;
const minimumAge = 18;

if (age >= minimumAge) {
  console.log("You are eligible to apply for a Driver's License");
} else {
  console.log(
    `You cannot apply for a driver's license as you are currently ${age} years old, please apply after ${
      minimumAge - age
    } years`
  );
}

const yearOfBirth = 2001;
let century;
if (yearOfBirth <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

// Coding Challenge 2

const massOfMark = 78;
const heightOfMark = 1.72;
const massOfJohn = 82;
const heightOfJohn = 1.69;

const BMI1 = massMark / (heightMark * heightMark);
const BMI2 = massOfJohn / (heightOfJohn * heightOfJohn);

console.log(`The BMI of MARK is ${BMI1} and BMI of JOHN is ${BMI2}`);

if (BMI1 < BMI2) {
  console.log(`John has a better BMI of ${BMI2}`);
} else {
  console.log(`Mark has a better BMI of ${BMI1}`);
}

// Type Conversion and Coercion

/**
 * Type Conversion -- we need to convert the types manually
 * Type Coercion -- here javascript automatically converts the type for us
 */

const someYear = '2001';

console.log(Number(someYear) + 18); // type conversion

console.log(Number('Sanju')); // results in NaN(not a number)

console.log('I am ' + 21 + ' years old!'); //

console.log('23' - '15' - 1); // type coercion

// Truthy and Falsy Values

console.log(Boolean(NaN));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean({}));

const money = 1000;
if (money) {
  console.log("Don't Spend all the once!");
} else {
  console.log('You are broke, get a Job!');
}

let nameOfThePerson = 'Sanju';
if (nameOfThePerson) {
  console.log(`Your name is ${nameOfThePerson}`);
} else {
  console.log('The name of the person is not defined yet');
}

// Equality Operators

const agePerson = 18;
if (agePerson == 18) console.log('YOU ARE AN ADULT NOW!!');

// Boolean Logical Operators

const hasDriversLicense = true;
const hasGoodVision = true;
const isTired = true;
console.log(hasGoodVision && hasDriversLicense); // AND operator, both needs to be true

console.log(hasDriversLicense || hasGoodVision); // OR operator, either one can be true

console.log(!hasDriversLicense || hasGoodVision); // NOT operator

// implementing what we learnt about logical operator
if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah, You can drive!');
} else {
  console.log(
    'Please get a drivers License Sarah, and get your eyes checked as well!'
  );
}

// Coding Challenge #3

let scoreDoplhin = Math.floor((196 + 108 + 89) / 3); // using let here because the score gets updated
let scoreKoalas = Math.floor((116 + 108 + 89) / 3);

// if (scoreDoplhin > scoreKoalas) {
//   console.log("DOLPHINS WIN THE TROPHY!!!");
// } else if (scoreKoalas > scoreDoplhin) {
//   console.log("KOALAS WIN THE TROPHY!!!");
// } else if (scoreDoplhin === scoreKoalas) {
//   console.log("THE MATCH IS DRAWN");
// }

// BONUS POINTS

if (scoreDoplhin > scoreKoalas && scoreDoplhin >= 100) {
  scoreDoplhin += 100;
  console.log('DOLPHINS WIN THE TROPHY!!!');
} else if (scoreKoalas > scoreDoplhin && scoreKoalas >= 100) {
  scoreDoplhin += 100;
  console.log('KOALAS WIN THE TROPHY!!!');
} else if (scoreDoplhin >= 100 && scoreKoalas >= 100) {
  console.log('BOTH WIN THE TROPHY!!!');
} else {
  console.log('NO ONE WINS THE TROPHY!!!');
}

console.log(scoreDoplhin, scoreKoalas);

// switch statements

const day = 'OCTOBER';
switch (day) {
  case 'Monday':
    console.log('1st day of the week');
    break; // if break is not present the code will run throughout the statement, hence breaks are neccessary
  case 'Tuesday':
    console.log('2nd day of the week');
    break;
  case 'Wednesday':
    console.log('3rd day of the week');
    break;
  case 'Thursday':
    console.log('4th day of the week');
    break;
  case 'Friday':
    console.log('5th day of the week');
    break;
  case 'Saturday':
    console.log("YAY! IT'S THE WEEKEND");
    break;
  case 'Sunday':
    console.log("IT'S SUNDAY");
    break;
  default:
    // if all of the cases do not apply for what we want, a default case helps here.
    console.log('You are entering something which is not a day :/');
}

let hasDriversLicense1 = false;
const passTest = true;
if (passTest) hasDriversLicense1 = true;
if (hasDriversLicense1) console.log('You can Drive');

/**
         const extend = "Drive";
         const private = 67;
         const public = 33;
         * These are reserved keywords which might be used in upcoming versions 
         hence not recommended to use, 
         */

// Functions

// creating a function
// Function Declarations
function sayHelo(name) {
  console.log('Hello,', name);
}
// calling a function
sayHelo('Sanjith');

function addNumbers(a, b) {
  return a + b;
}
console.log(addNumbers(4, 6)); // the output will be displayed in the console, but the value will not be captured anywhere

// Function Declarations can be called before initialization

function juiceProcesor(apples, mangoes) {
  const juice = `The juice has ${apples} apples and ${mangoes} mangoes in it.`;
  return juice;
}
const appleJuice = juiceProcesor(2, 0);
console.log(appleJuice); // value stored and returned back

// Reusing the function, the main advantage of the functions
const mangoeJuice = juiceProcesor(0, 5);
console.log(mangoeJuice);

function calcAge1(birthYear) {
  return 2047 - birthYear;
}

// Function expression
// once the function is declared, then only we'll be able to call it.
const calcAge2 = function (birthYear) {
  return 2056 - birthYear;
};
console.log(calcAge1(2001), calcAge2(2001));

// Arrow Functions

// has implicit returns which means that there is no neccessary for adding return keyword when value needs to be returned
const arrowFunction = () => 'Arrow Function!!';
console.log(arrowFunction());

const productNumber = (a, b) => a * b;
console.log(productNumber(3, 5));

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2056 - birthYear;
  const retirementAge = 65 - age;
  return `${firstName} retires in ${retirementAge} years`;
};
const years = yearsUntilRetirement(2001, 'Sanjith');
console.log(years);

// Calling function from one function to another function
function foodProcessor(veggies) {
  return veggies * 4;
}
function pizzaMaker(onions, tomatoes) {
  const dicedOnions = foodProcessor(onions);
  const dicedTomatoes = foodProcessor(tomatoes);
  //   const pizza = `The Pizza contains ${onions} onions and ${tomatoes} tomatoes`;
  const pizza = `The pizza contains ${dicedOnions} Onions and  ${dicedTomatoes} tomatoes`;
  return pizza;
}
console.log(pizzaMaker(1, 2));

// calculating squares of a number
const calculateSquare = square => {
  return square ** 2;
};
const squareValues = (num1, num2) => {
  const firstNumber = calculateSquare(num1);
  const secondNumber = calculateSquare(num2);
  const squareIs = `The Square of ${num1} is ${firstNumber} and square of ${num2} is ${secondNumber}`;
  return squareIs;
};
console.log(squareValues(2, 5));

// two individual functions are being called in an another function
const calculateAge = birthYear => {
  return 2037 - birthYear;
};
const minimumAge1 = age => {
  return 50 - age;
};
const toRunForPresident = (birthYear, firstName) => {
  const age = calculateAge(birthYear);
  const ageToRun = minimumAge1(age);
  return `${firstName} can run for president in ${ageToRun} years`;
};

console.log(toRunForPresident(2001, 'Sanjith'));

// Function Examples

const myCar = {
  make: 'HONDA',
  model: 'CITY',
  year: 2012,
};

function changeCar(car) {
  myCar.model = 'CIVIC';
}

const changedValue = myCar.model;
console.log(changedValue);

// Function Expression
const factorial = function fact(n) {
  return n < 2 ? 1 : n * fact(n - 1);
};
console.log(factorial(3));

// in the below code we are using a function to access an another function
function map(f, a) {
  const result = [];
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}

const f = function (x) {
  return x * x * x;
};

const nums = [1, 2, 4, 5];
const cube = map(f, nums);
console.log(cube);

// functions that can be recursive

function recursiveFunc(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * recursiveFunc(n - 1);
  }
}
console.log(recursiveFunc(1));

// let
// iables declared inside a function cannot be accessed outside, this is called a scope

// here the let
// iables are declared in the global scope
const nameP = 'Sanju';
const digit = 12;
const digit1 = 10;

function multiply() {
  return digit * digit1;
}
console.log(multiply());

function getScore() {
  const numInTheFunc1 = 60;
  const numInTheFunc2 = 50;

  function add() {
    return `${nameP} scored ${numInTheFunc1 + numInTheFunc2}`;
  }
  return add();
}
console.log(getScore());

// console.log(numInTheFunc1); --> you cannot access this way, since the let
// iable is not globally scoped and is valid only within the function

const revereNumber = n => {
  n = n + '';
  return n.split('').reverse().join('');
};
console.log(revereNumber(1565));

// Arrays in JavaScript

// Bad Practice when there are more values to store

let friend1 = 'Sanjith';
let friend2 = 'Sagar';
let friend3 = 'Punith';

// this is where we use arrays

let friends = ['Sanjith', 'Sagar', 'Punith'];
console.log(friends); // to print out the whole array

console.log(friends[0]); // to access the individual index in an array
friends[0] = 'Sanjay'; // changing the value of the array
console.log(friends);

const tvShows = ['Game of Thrones', 'Breaking Bad', 'The Office', 'Dark'];

// Array Methods

console.log(tvShows.length); // an array method to find the length of the array
tvShows[0]; // to access the first element in the array
tvShows.length - 1; // to access the last element in the array

// push method --> adds an element at the end of the array

tvShows.push('Friends', 'The Wire'); // we added elements to the last of the array
console.log(tvShows);

// Unshift --> adds the element at the beginning of the array
tvShows.unshift('The House of the Dragons'); // this adds the element in the beggining of the array
console.log(tvShows);

// Shift method --> removes the element at the beggining of the array

tvShows.shift();
console.log(tvShows);

// pop --> removes the element at the end of the array

tvShows.pop();
console.log(tvShows); // the element The Wire has been removed

// Splice --> insertion and deletion

const numbers = [10, 20, 30, 40, 50];
// this removed the element after the 1st element upto the deletion value
// which was given 2
numbers.splice(5, 0, 60, 70, 80);
console.log(numbers);

numbers.splice(5, 2);
console.log(numbers);

// Sorting method --> sorts the array based on the initial value
// 111 is sorted first then 2 is sorted

const values = [5, 1, 4, 3, 111, 2, 7, 9, 6, 8];
values.sort();
console.log(values);

const greetings = ['Hey', 'Hello', 'Hi'];
greetings.sort();
console.log(greetings);

// Array Iteration Methods -- forEach method

// a for loop can be replaced with a forEach method, since it loops through the entire Array

const numerics = [1, 2, 3, 4, 5, 6, 7, 8];
const staticNumerics = [];
// for loop
for (let i = 0; i < numerics.length; i++) {
  staticNumerics.push(numerics[i]);
}

// in a forEach method

numerics.forEach;
numerics => staticNumerics.push(numerics.length);

// both does the same operation

// Array Reverse Method

const names = ['a', 'b', 'c', 'd'];
names.reverse();
console.log(names);

// Objects

const employee = {
  nameEmp: 'Sanjith',
  empId: 45678,
  empSalary: 45000,
  empSkills: ['JavaScript', 'CSS', 'NODE JS'],
};

console.log(employee); // this logs the whole object
// using dot notation to access the values
console.log(employee.empSalary, employee.empId, employee.nameEmp); // this logs the individual object values

console.log(employee['empSkills']); // accessing the value using the bracket notation

// For Loops

// this is a basic for loop which prints out numbers, the loop is forward and incremented
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// the loop is backwards and decremented
for (let i = 5; i >= 0; i--) {
  console.log(i);
}

// the increment can be whatever
// here the loop is running and checking whether it is even or not
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// here the loop is running and checking whether it is odd or not
for (let i = 0; i < 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// to break a for loop
// when i reached the value 3 the loop breaks and doesn't increment
for (let i = 0; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

// sum of natural numbers using for loop

let sumOfNums = 0;
let n = 10;
for (let i = 0; i <= n; i++) {
  sumOfNums += i; // this adds individualy and returns the each values
}
console.log(sumOfNums);

// NEVER DO THIS
for (let i = 0; i > 0; i++) {}

// this will result in an infinite loop

let findNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let evenNumbers = [];
let oddNumbers = [];

for (let i = 0; i < findNums.length; i++) {
  if (findNums[i] % 2 !== 1) {
    evenNumbers.push(findNums[i]);
  } else {
    oddNumbers.push(findNums[i]);
  }
}
console.log(oddNumbers);
console.log(evenNumbers);

// looping through an array to find the min and max numbers

let setOfNumbers = [243, 345, 41, 12, 15, 65, 71, 28];
let max = 0;
let min = setOfNumbers[0]; // the loop is checking for the minimum value

// the below for loop gives us the max value in the array

for (let i = 0; i < setOfNumbers.length; i++) {
  if (setOfNumbers[i] > max) {
    max = setOfNumbers[i];
  }
}
for (let i = 0; i < setOfNumbers.length; i++) {
  if (setOfNumbers[i] < min) {
    min = setOfNumbers[i];
  }
}
console.log(`The Max value is ${max}`);
console.log(`The Min value is ${min}`);

// for of loop --> operates on a sequence of values that is iterable

const pets = ['Dogs', 'Cats', 'Birds'];

// for (let i = 0; i < pets.length; i++) {
//   console.log(pets[i]);
// }

// iterating obver an array
for (const pet of pets) {
  console.log(pet);
}

// both above do the same operation, whereas for of loop i syntactically easy to understand

// the for of loop returns the values in the array

// iterating over a string

const sanju = 'SANJITH';
for (const san of sanju) {
  console.log(san);
}

// FOR IN LOOP --> it used to iterate over an object

const animals = {
  name: 'Lion',
  lifeSpan: 24,
  nature: 'Carnivore',
};

// the for in loop comes to play when you need to iterate over an object

for (const wild in animals) {
  console.log(`${wild}: ${animals[wild]}`);
}

const petAnimals = {
  name: 'Dogs',
  likes: ['Treats', 'Scratches'],
  isFriendly: true,
};

for (const dog in petAnimals) {
  console.log(`${dog}: ${petAnimals[dog]}`);
}

const objInArray = [
  {
    name: 'Sanjith',
    age: 21,
  },
  {
    name: 'Punith',
    age: 19,
  },
];

for (const candidates of objInArray) {
  console.log(candidates);
}

for (const people in objInArray) {
  console.log(`${people}: ${objInArray[people]}`);
}

// THE DIFFERENCE BETWEEN FOR OF AND FOR IN

/**
 *Both for...in and for...of statements iterate over something. The main difference between 
 them is in what they iterate over.
 The for...in statement iterates over the enumerable string properties of an object,
 while the for...of statement iterates over values that the iterable object defines to
 be iterated over.
 */

// While Loops

/**
 * The while statement creates a loop that executes a specified statement as long
 * as the test condition evaluates to true. The condition is evaluated before executing the
 *  statement.
 */

let digits = 0;

while (digits <= 3) {
  digits++; // 0+1 = 1, 1+1 = 2, 2+1 = 3, 3+1 = 4
}
console.log(digits);

let p = 0;
let q = 0;
while (p < 3) {
  p++;
  q += p;
}
console.log(p);

const cars = ['BMW', 'PORSCHE', 'VOLVO'];

let i = 0;
let text = '';

while (cars[i]) {
  text += cars[i];
  i++;
}
console.log(text);

// DO WHILE Loops

/**
 *The do...while statement creates a loop that executes a specified statement until 
 the test condition evaluates to false. The condition is evaluated after executing the 
 statement, resulting in the specified statement executing at least once.
 */

let ex = 0;
do {
  ex++;
} while (ex < 3);
console.log(ex);
// so the condition is checked after executing the statement

// Debugging

// Buggy Code
const measureFahrenheit = () => {
  const measurement = {
    type: 'temp',
    unit: 'Celsius',
    // value: prompt('Degrees Celsius'),
  };
  console.log(measurement.value);
  const tempFar = measurement.value + 33.8;
  return tempFar;
};
console.log(measureFahrenheit());

// Clean Code

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'Celsius',
    // value: prompt('Degree Celsius '),
  };
  const tempFar = Number(measurement.value) + 273; // if number was not present this will result in a bug, which will add like a string
  return tempFar;
};

// console.log(measureKelvin());
// How JavaScript works behind the scenes

// An High Level Overview of JavaScript

/**
 * JavaScript is a high-level prototype based object oriented programming language,
 * interpreted, multi paradigm, dynamic, single threaded programming language
 
 * High Level = The term high level means that we need not to tell the computer to
 create memory in the hardware, it is done automatically by the high-level languages
 the downside of this is that the code will be comparatively less faster than the low-level
 languages such as C.
 
 *Garbage Collection = it is an algorithm in the JavaScript engine that cleans the unused
 objects which takes up the memory in the system, it is done by the engine itself and not 
 manually
 
 *Interpreted = The code written is converted into Byte code in time of the execution by the
 JavaScript engine and run, it is not compiled and converted into Byte code before execution like Java
 
 *Multi Paradigm = A paradigm means an approach of structuring the code, which will direct 
 the coding style and technique
 
 The paradigm is of three types:
 1: Procedural programming
 2: Object oriented programming
 3: Functional programming
 
 and JavaScript allows all the types of the above paradigm techniques to implement
 
 *First-Class functions = the functions are treated as variables, we can pass it into 
 another functions and return them from functions
 
 with the help of this we can use it in functional programming
 
 *Dynamic = there is no need to declare the data type when declaring a variable
 it can be just declared using the keywords let and const
 
 
 *Concurrency Model = how JavaScript engine handles multiple tasks happening at the same time
 since JavaScript is Single threaded, it can do only one task at a time, hence comes the concept
 non-blocking event loop
 */

/**
 * JavaScript Engine = it is a program that executes JavaScript code
 * the engine consists of a Call stack and a heap
 * the call stack has our code, where the execution needs to happen, and in the heap
 * there are unorganized objects in the memory where our objects are stored
 *
 */

// this keyword
console.log(this); // this is the global object

/**
 * JavaScript Engine = it is a program that executes JavaScript code
 * the engine consists of a Call stack and a heap
 * the call stack has our code, where the execution needs to happen, and in the heap
 * there are unorganized objects in the memory where our objects are stored
 *
 */

const getStats = arr => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce((sum, r) => sum + r);
  const avg = sum / arr.length;

  // return {
  //   max: max,
  //   min: min,
  //   sum: sum,
  //   avg: avg,
  // };

  // Short Hand Properties, with the help of this we can easily write as
  return {
    max,
    min,
    sum,
    avg,
  };
};

const reviews = [4.5, 5.2, 1.7, 4.5, 2.4, 1.1];

const stats = getStats(reviews);
console.log(stats);

const role = 'Batsman';
const person = 'Virat Kohli';
const role1 = 'Bowler';
const person1 = 'Ashwin';

const team = {};
team[role] = person;
team[role1] = person1;
console.log(team);

// computed Properties -- ES6 syntax

const team2 = {
  [role]: person,
  [role1]: person1,
};

console.log(team2);

// Example

// const addProp = (obj, k, v) => {
//   const copy = { ...obj };
//   copy[k] = v;
//   return copy;
// };

const addProp = (obj, k, v) => {
  return {
    ...obj,
    [k]: v,
  };
};
const copiedElements = addProp(team2, 'Jadeja', ':😒');

// Adding Methods to objects
// some inbuilt methods are Math.something
const operations = {
  numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
};
console.log(operations.add(43, 4));

// short hand function for adding methods in objects, ES6 syntax

const calculator = {
  numbers: [1, 2, 3, 4, 5, 6, 7, 8],
  add(x, y) {
    return x + y;
  },
  sub(x, y) {
    return x - y;
  },
  multiply(x, y) {
    return x * y;
  },
  divide(x, y) {
    return x / y;
  },
};

// this keyword

console.log(this); // the global scope which is the windows

// using this in methods

// const guy1 = {
//   first: 'Sanjith',
//   last: 'Kumar',
//   nickName: 'Sanju',
//   fullName() {
//     console.log(
//       `${this.first} ${this.last} and his nick name is ${this.nickName}`
//     );
//   },
// };
// console.log(guy1.fullName());

// the same with the help of computed properties

const singer = {
  first: 'Harry',
  last: 'Styles',
  nickName: 'Harry',
  fullName() {
    const { first, last, nickName } = this;
    return `${first} ${last} AKA ${nickName}`;
  },
  printBio() {
    console.log(this);
    // calling the method which is in the same object, using this
    const fullName = this.fullName(); // this calls the fullName method
    console.log(`${fullName} is a Great Singer`);
  },
  // arrow functions don't get their own this
  laugh: () => {
    console.log(this);
    console.log(`${this.nickName} says HAHA`);
  },
};
// singer.nickName = 'HARRRRYYY!'; we can change the value of the key pairs

// the value of this depends on the invocation context of the function used in
// which we means it depends on how we execute the function

const printBio = singer.printBio;

// this keyword in the arrow functions

const slangs = {
  phrases: ['BRUH', 'DUDE', 'MEH', 'HOMIE', 'DAWG', 'DOOOD', 'SIR'],

  // pick function which will select the phrases randomly
  pickPhrase() {
    const { phrases } = this; // destructuring
    const idx = Math.floor(Math.random() * phrases.length);
    return phrases[idx];
  },
  start() {
    // since we need a key to reference in the stop function we need to create an ID
    this.timerId = setInterval(() => {
      console.log(this.pickPhrase());
    }, 3000);
    // setInterval(function () {
    //   // this is going to throw an error because the this is referring to the window, and setInterval runs the code
    //   // console.log(this.pickPhrase());
    // }, 3000);

    // arrow functions comes in handy
  },

  stop() {
    clearInterval(this.timerId);
    console.log("IF THIS WAS USING ALERT, IT WOULD'VE BEEN MORE ANNOYING!!");
  },
};

// Applying the this keyword knowledge

// function makeDeck() {
//   const deck = [];
//   const suits = ['hearts', 'spades', 'diamonds', 'clubs'];
//   const cardValues = '2,3,4,5,6,7,8,9,10,J,K,A,Q';

//   for (let values of cardValues.split(',')) {
//     for (let suit of suits) {
//       deck.push({ value, suit });
//     }
//   }
//   return deck;
// }

// function drawCard(deck) {
//   return deck.pop();
// }

const myDeck = {
  deck: [],
  drawnCards: [],
  suits: ['hearts', 'diamonds', 'spades', 'clubs'],
  values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
  initializeDeck() {
    const { suits, values, deck } = this;
    for (let value of values.split(',')) {
      for (let suit of suits) {
        deck.push({
          value,
          suit,
        });
      }
    }
  },
  drawCard() {
    const card = this.deck.pop();
    this.drawnCards.push(card);
    return card;
  },
  drawMultipleCards(numCards) {
    const cards = [];
    for (let i = 0; i < numCards; i++) {
      cards.push(this.drawCard());
    }
    return cards;
  },
  shuffle() {
    const { deck } = this;
    for (let i = deck.length - 1; i < 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  },
};

myDeck.initializeDeck();
myDeck.shuffle();
const h1 = myDeck.drawMultipleCards(3);
const h2 = myDeck.drawMultipleCards(3);

// Async JS, promises & requests

/**
 * CALL STACK
 * the mechanism of the JS interpreter uses to keep track of its place in a
 * script which calls multiple functions
 * last thing in first thing out (LIFO) = how a stack works
 */

/**
 * multiplyNum
 * square
 * isRightTriangle()
 * when the above two functions are computed the value gets stored in the isRightTriangle function
 * which is using the above function, which need to be called
 */

const multiplyNum = (x, y) => x * y;
// this square function calls the multiply function
const square = x => multiplyNum(x, x);

// this function here calls the function square
const isRightTriangle = (a, b, c) => {
  return square(a) + square(b) === square(c);
};

console.log(isRightTriangle(3, 4, 5));

const repeat = (str, times) => {
  let result = '';
  for (let i = 0; i < times; i++) {
    result += str;
  }
  return result;
};
const scream = str => {
  return str.toUpperCase() + '!!!!!';
};

const getSomeText = phrase => {
  let text = scream(phrase);
  let some = repeat(text, 3);
  return some;
};

// const makeSome = (phrase, el) => {
//   const h1 = document.createElement('h1');
//   h1.innerText = getSomeText(phrase);
//   el.appendChild(h1);
// };

// makeSome('I LOVE PIZZA', document.body);

// JS IS SINGLE THREADED -- does things one at a time

// // it cannot run all the three console.log() at the same time
// console.log('I HAPPENED FIRST!'); // this runs first

// // since this has a timeout for 3 seconds the rest of the code runs then after completion of
// // 3 seconds this below function runs

// // the browser does all the below  work
// setTimeout(function () {
//   console.log('I HAPPENED THIRD!');
// }, 3000);
// // alert('WELL, I HAPPENED SECOND :)');  then this runs

// console.log('I HAPPENED SECOND!'); // then this

// // How Asynchronous Callbacks work

// /**
//  * the Asynchronous JS works in such a way that whenever we have a timer or a callback function
//  * the code or the function is set on pause, rest other things gets executed and then when the timer
//  * runs out, the callback function is executed,
//  * the browser handles all the work, during that waiting time, which JavaScript is not responsible
//  * at the point, when it is waiting
//  * c++ in the browser runs the callback
//  */
// console.log('HEY THERE!'); // this gets executed first
// // now this is passed on to the browser which handles this function
// // it is passed on to the web API, which handles it until the timer runs out and then
// // it is added back to the callback queue which will eventually run after the time is completed

// setTimeout(() => {
//   console.log('DANGGGGGGGG!!!!');
// }, 7000);

// // the same goes to the browser here as well
// // it is passed on to the web API, which handles it until the timer runs out and then
// // it is added back to the callback queue which will eventually run after the time is completed

// setTimeout(() => {
//   console.log('EWWWWW!!');
// }, 3000);

// console.log('BYE!!');

// CALL BACK

// const btn = document.querySelector('button');
// setTimeout(() => {
//   btn.style.transform = `translateX(100px)`;
//   setTimeout(() => {
//     btn.style.transform = `translateX(200px)`;
//     setTimeout(() => {
//       btn.style.transform = `translateX(300px)`;
//       setTimeout(() => {
//         btn.style.transform = `translateX(400px)`;
//         setTimeout(() => {
//           btn.style.transform = `translateX(500px)`;
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);
// const btn = document.querySelector('button');
// const moveX = (element, amount, delay, onSuccess, onFailure) => {
//   onFailure();
//   setTimeout(() => {
//     const bodyBoundary = document.body.clientWidth;
//     const currLeft = element.getBoundingClientRect().left;
//     const elRight = element.getBoundingClientRect().right;
//     if (elRight + amount > bodyBoundary) {
//     } else {
//       element.style.transform = `translateX(${amount}px)`;
//       onSuccess();
//     }
//   }, delay);
// };

// the arrow functions are the call back functions
// moveX(btn, 100, 1000, () => {
//   moveX(btn, 200, 1000, () => {
//     moveX(btn, 300, 1000, () => {
//       moveX(btn, 400, 1000, () => {
//         moveX(btn, 1000, 1000);
//        });
//     });
//   });
// });

// NESTING CALLBACKS IS DIFFICULT TO READ!
// moveX(
//   btn,
//   300,
//   1000,
//   () => {
//     //success callback
//     moveX(
//       btn,
//       300,
//       1000,
//       () => {
//         //success callback
//         moveX(
//           btn,
//           300,
//           1000,
//           () => {
//             //success callback
//             moveX(
//               btn,
//               300,
//               1000,
//               () => {
//                 //success callback
//                 moveX(
//                   btn,
//                   300,
//                   1000,
//                   () => {
//                     //success callback
//                     // alert('YOU HAVE A WIDE SCREEN!');
//                   },
//                   () => {
//                     //failure callback
//                     // alert('CANNOT MOVE FURTHER!');
//                   }
//                 );
//               },
//               () => {
//                 //failure callback
//                 // alert('CANNOT MOVE FURTHER!');
//               }
//             );
//           },
//           () => {
//             //failure callback
//             // alert('CANNOT MOVE FURTHER!');
//           }
//         );
//       },
//       () => {
//         //failure callback
//         // alert('CANNOT MOVE FURTHER!');
//       }
//     );
//   },
//   () => {
//     //failure callback
//     // alert('CANNOT MOVE FURTHER!');
//   }
// );

// Promises
// An object which represents the completion or failure of asynchronous operations

// const willGetABike = new Promise((resolve, reject) => {
//   const rand = Math.random();
//   if (rand < 0.5) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// // then -- this runs when the promise is resolved
// willGetABike.then(() => {
//   console.log('YAY, WE GOT THE BIKE!');
// });

// // catch -- this runs when the promise is rejected

// willGetABike.catch(() => {
//   console.log('SORRY, THE BIKE CAN WAIT!');
// });

// A promise can return a Promise
const makeBikePromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
      if (rand < 0.5) {
        resolve();
      } else {
        reject();
      }
    }, 5000);
  });
};
makeBikePromise()
  .then(() => {
    console.log('GOT A BIKE!');
  })
  .catch(() => {
    console.log('NO BIKE!');
  });

// const fakeRequest = url => {
//   return new Promise((resolve, reject) => {
//     const pages = {
//       '/users': [
//         {
//           id: 1,
//           name: 'ZUCK',
//         },
//         {
//           id: 2,
//           name: 'GATES',
//         },
//       ],
//       '/users/1': {
//         id: 1,
//         name: 'ZUCKERBURG',
//         likes: 300,
//         comments: 45,
//       },
//       '/users/2': {
//         id: 2,
//         name: 'GATES',
//         likes: 30760,
//         comments: 4532,
//       },
//       '/users/3': {
//         id: 3,
//         name: 'MUSK',
//         likes: 308940234,
//         comments: 4532423,
//       },
//     };
//     const data = pages[url];
//     if (data) {
//       resolve({ status: 200, data });
//     } else {
//       reject({ status: 404 });
//     }
//   });
// };

// fakeRequest('/users')
//   .then(res => {
//     console.log('Status Code', res.status);
//     console.log('Data', res.data);
//     console.log('CONNECTED');
//   })
//   .catch(res => {
//     console.log('Status Code', res.status);
//     console.log('NOT CONNECTED');
//   });

const fakeRequest = url => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        '/users': [
          { id: 1, username: 'Bilbo' },
          { id: 5, username: 'Esmerelda' },
        ],
        '/users/1': {
          id: 1,
          username: 'Bilbo',
          upvotes: 360,
          city: 'Lisbon',
          topPostId: 454321,
        },
        '/users/5': {
          id: 5,
          username: 'Esmerelda',
          upvotes: 571,
          city: 'Honolulu',
        },
        '/posts/454321': {
          id: 454321,
          title: 'Ladies & Gentlemen, may I introduce my pet pig, Hamlet',
        },
        '/about': 'This is the about page!',
      };
      const data = pages[url];
      if (data) {
        resolve({ status: 200, data }); //resolve with a value!
      } else {
        reject({ status: 404 }); //reject with a value!
      }
    }, 1000);
  });
};

// fakeRequest('/users').then(res => {
//   console.log(res.data);
// });

// fakeRequest('/users')
//   .then(res => {
//     const id = res.data[0].id;
//     fakeRequest(`/users/${id}`).then(res => {
//       const postId = res.data.topPostId;
//       fakeRequest(`/posts/${postId}`).then(res => {
//         console.log(res);
//       });
//     });
//   })
//   .catch(res => {
//     console.log(res.status);
//   });

// chaining the promises

fakeRequest('/users')
  .then(res => {
    console.log(res);
    const id = res.data[0].id;
    return fakeRequest(`/users/${id}`);
  })
  .then(res => {
    console.log(res);
    const postId = res.data.topPostId;
    return fakeRequest(`/posts/${postId}`);
  })
  .then(res => {
    console.log(res);
  })
  .catch(res => {
    console.log(res.status);
  });

const btn = document.querySelector('button');
const moveX = (element, amount, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bodyBoundary = document.body.clientWidth;
      const elRight = element.getBoundingClientRect().right;
      const currLeft = element.getBoundingClientRect().left;
      if (elRight + amount > bodyBoundary) {
        reject({ bodyBoundary, elRight, amount });
      } else {
        element.style.transform = `translateX(${amount}px)`;
        resolve();
      }
    }, delay);
  });
};

moveX(btn, 300, 1000)
  .then(() => moveX(btn, 300, 1000))
  .then(() => moveX(btn, 300, 1000))
  .then(() => moveX(btn, 300, 1000))
  .then(() => moveX(btn, 300, 1000))
  .then(() => moveX(btn, 300, 1000))
  .catch(({ bodyBoundary, amount, elRight }) => {
    console.log(`Body is ${bodyBoundary}px`);
    console.log(`Element is at ${elRight}px, ${amount} is large!`);
  });

// Requests

// AJAX - Asynchronous JavaScript and XML(JSON)

// function reqListener() {
//   console.log(this.responseText);
// }

// let oReq = new XMLHttpRequest();
// oReq.addEventListener('load', reqListener);
// oReq.open('GET', 'http://localhost');
// oReq.send();

// create a new request
// Basic XMLHttpRequest
// const firstRequest = new XMLHttpRequest();
// // send that request if it works
// firstRequest.addEventListener('load', function () {
//   console.log('IT WORKS!');
//   // the output we received is JSON, in order to convert that to
//   // JavaScript we use JSON.parse
//   const parsedJSON = JSON.parse(this.responseText);
//   for (let planet of parsedJSON.results) {
//     console.log(planet.name);
//   }
// });

// // send a request if it doesn't work
// firstRequest.addEventListener('error', () => {
//   console.log('ERROR!');
// });

// // open the request created
// firstRequest.open('GET', 'https://swapi.dev/api/planets/');
// firstRequest.send(); // send the request
// console.log('REQUEST SUCCESSFUL');

// Chained XMLHttpRequest
// const firstRequest = new XMLHttpRequest();
// // send that request if it works
// firstRequest.addEventListener('load', function () {
//   console.log('IT WORKS!');
//   // the output we received is JSON, in order to convert that to
//   // JavaScript we use JSON.parse
//   const parsedJSON = JSON.parse(this.responseText);
//   const filmURL = parsedJSON.results[0].films[0];
//   const filmReq = new XMLHttpRequest();
//   filmReq.addEventListener('load', function () {
//     console.log('WORKS AGAIN');
//     const filmData = JSON.parse(this.responseText);
//     console.log(filmData);
//   });
//   filmReq.addEventListener('error', function (e) {
//     console.log('ERROR!', e);
//   });
//   filmReq.open('GET', filmURL);
//   filmReq.send();
//   console.log('FILM REQUEST SUCCESSFUL');
// });
// // send a request if it doesn't work
// firstRequest.addEventListener('error', () => {
//   console.log('ERROR!');
// });

// // open the request created
// firstRequest.open('GET', 'https://swapi.dev/api/planets/');
// firstRequest.send(); // send the request
// console.log('REQUEST SUCCESSFUL');

// Fetch
// same above code but written in fetch

// fetch('https://swapi.dev/api/planets/')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`Status Code Error: ${response.status}`);
//     } else {
//       response.json().then(data => {
//         // console.log(data);
//         for (let planet of data.results) {
//           console.log(planet);
//         }
//       });
//     }
//   })
//   // the catch in fetch only works when there is a server error/problem with the network
//   .catch(err => {
//     console.log('SOMETHING WENT WRONG!', err);
//   });

// chaining in fetch

fetch('https://swapi.dev/api/planets/')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Status Code Error: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    const fetchFilmURL = data.results[0].films[0];
    return fetch(fetchFilmURL);
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`Status Code Error: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  // the catch in fetch only works when there is a server error/problem with the network
  .catch(err => {
    console.log('SOMETHING WENT WRONG!', err);
  });

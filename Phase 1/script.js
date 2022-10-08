'use strict'; // activates strict mode --> which helps us to write secure code
// Values and let
iables

let number = 7; // declaring a number to a let
iable
console.log(number); // printing out the number to the console

let firstName = 'Sanjith';
let lastName = 'Kumar';
console.log(firstName + ' ' + lastName); // concatenating the two let
iables which is a string

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
iables
let selectedMajor = 'Automobile';
let interestedMajor = 'Computer Science';

// not Preferred to name let
iables this manner
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
iable should
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
 let and const

// usage of let
 is not recommended in modern JavaScript

// DON'T USE let
!!!
let
 data = true;
data = false; // let
 allows us to change the value even after declaration
console.log(data); //
/*
it is recommended to use let when the value of it let
ies
let allows us to declare an empty let
iable
use let when you need to change the value after a period of time
*/
let name2 = 'Sanju';
name2 = 'Kumar'; // let allows us to change the name of the let
iable
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

// We can declare a let
iable without using let or const

lastName = 'Kumar';
console.log(lastName);
// but this will not create a let
iable in the local scope, instead creates
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
iables declared inside a function cannot be accessed outside, this is called a scope

// here the let
iables are declared in the global scope
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
iable is not globally scoped and is valid only within the function

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
    value: prompt('Degrees Celsius'),
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
    value: prompt('Degree Celsius '),
  };
  const tempFar = Number(measurement.value) + 273; // if number was not present this will result in a bug, which will add like a string
  return tempFar;
};

// console.log(measureKelvin());

// Math Problems
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

const isSum50 = (n1 + n2 + n3 + n4) === 50;
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2);
const isLessThanOrEqualTo25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25; 

// Task: Check if all numbers are divisible by 5. Cache the result in a variable.
const isDivisibleBy5 = (n1 % 5 === 0) && (n2 % 5 === 0) && (n3 % 5 === 0) && (n4 % 5 === 0);
console.log(`${isDivisibleBy5 ? 'All' : 'One or more'} numbers in the series ${isDivisibleBy5 ? 'are' : 'are not'} divisible by 5.`);

// Check if the first number is larger than the last. Cache the result in a variable.
const isFirstLargerThanLast = n1 > n4;
console.log(`The first number in the series ${isFirstLargerThanLast ? 'is' : 'is not'} larger than the last number.`);


/* Task: Accomplish the following arithmetic chain:
- Subtract the first number from the second number.
- Multiply the result by the third number.
- Find the remainder of dividing the result by the fourth number. */
let newNum = n2 - n1;
newNum = newNum * n3;
newNum = newNum % n4;
console.log(`The new resulting number from the arithmetic chain is ${newNum}.`);


/* Task: Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in
other logic comparisons. Rename the variable as appropriate. 
- Change made above */
console.log(`${isLessThanOrEqualTo25 ? 'All' : 'One or more'} numbers in the series ${isLessThanOrEqualTo25 ? 'are' : 'are not'} less than or equal to 25.`);


// Practical Math
const totalTripDistance = 1500;
const fuelBudget = 175;
const fuelCostPerGallon = 3;
const mpgAt55MPH = 30;
const mpgAt60MPH = 28;
const mpgAt75MPH = 23;

// Variables to preface sentences
const preface55MPH = 'If you drive 55 MPH throughout the trip,';
const preface60MPH = 'If you drive 60 MPH throughout the trip,';
const preface75MPH = 'If you drive 75 MPH throughout the trip,';


// How many gallons of fuel will you need for the entire trip?
const totalGallonsAt55MPH = totalTripDistance / mpgAt55MPH;
const totalGallonsAt60MPH = totalTripDistance / mpgAt60MPH;
const totalGallonsAt75MPH = totalTripDistance / mpgAt75MPH;

console.log(`${preface55MPH} then you will need ${totalGallonsAt55MPH.toFixed(2)} gallons of fuel.`)
console.log(`${preface60MPH} then you will need ${totalGallonsAt60MPH.toFixed(2)} gallons of fuel.`)
console.log(`${preface75MPH}, then you will need ${totalGallonsAt75MPH.toFixed(2)} gallons of fuel.`)

// Will your budget be enough to cover the fuel expense?
const totalFuelCostAt55MPH = totalGallonsAt55MPH * fuelCostPerGallon;
const isFuelBudgetSufficientAt55MPH = fuelBudget >= totalFuelCostAt55MPH;
console.log(`${preface55MPH} then you ${isFuelBudgetSufficientAt55MPH ? 'will' : 'will not'} be able to cover fuel expenses.`);

const totalFuelCostAt60MPH = totalGallonsAt60MPH * fuelCostPerGallon;
const isFuelBudgetSufficientAt60MPH = fuelBudget >= totalFuelCostAt60MPH;
console.log(`${preface60MPH} then you ${isFuelBudgetSufficientAt60MPH ? 'will' : 'will not'} be able to cover fuel expenses.`);

const totalFuelCostAt75MPH = totalGallonsAt75MPH * fuelCostPerGallon;
const isFuelBudgetSufficientAt75MPH = fuelBudget >= totalFuelCostAt75MPH;
console.log(`${preface75MPH} then you ${isFuelBudgetSufficientAt75MPH ? 'will' : 'will not'} be able to cover fuel expenses.`);

// How long will the trip take, in hours?
const lengthOfTripInHoursAt55MPH = totalTripDistance / 55; 
const lengthOfTripInHoursAt60MPH = totalTripDistance / 60; 
const lengthOfTripInHoursAt75MPH = totalTripDistance / 75; 

console.log(`${preface55MPH} the trip will take ${lengthOfTripInHoursAt55MPH.toFixed(2)} hours.`);
console.log(`${preface60MPH} the trip will take ${lengthOfTripInHoursAt60MPH.toFixed(2)} hours.`);
console.log(`${preface75MPH} the trip will take ${lengthOfTripInHoursAt75MPH.toFixed(2)} hours.`);

// Which makes the most sense for the trip?
console.log('The MPH that makes the most sense for the trip is 60 MPH as this speed keeps you within your fuel budget while getting you to your destination quicker than the alternative of 55 MPH. \n\ 75 MPH is not a reasonable alternative as the cost of fuel for that trip exceeds your budget.');
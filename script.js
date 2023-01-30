console.log(`
/*JS Practice 6*/

/*Let's practice "higher order" array methods*/

var nums = [-1, 0, 1, 2, 3, 4];
var number = 0;

/* Section 0 */
/*Arrow functions practice*/

function addTwo(n) {return n + 2;}
console.log(addTwo(number));

const addTwoFunctionExpression = function(n) {return n + 2;};
console.log(addTwoFunctionExpression(number));

const addTwoArrowFunction = n => n + 2;
console.log(addTwoArrowFunction(number));

/* Section 1 */
/*SOME and EVERY
  ☑️ write some code to check if "every" number in nums is positive
  ☑️ write some code to check if any / "some" numbers in nums are greater than 3*/

const positve = nums.every(function(n){return n % 2 === 0;});
console.log(positve);

const positveArrow = nums.every(n => n % 2 === 0);
console.log(positveArrow);

const greaterThanThree = nums.some(function(n){return n > 3;});
console.log(greaterThanThree);

const greaterThanThreeArrow = nums.some(n => n > 3);
console.log(greaterThanThreeArrow);

/* Section 2 */
/*FOR EACH number in nums
  ☑️ print out each number one at a time (use forEach, not a loop)
  ☑️ print strings formatted like so ("1 sheep", "2 sheep", "3 sheep"...) to the console*/

nums.forEach(n => {
    console.log(n);
})

nums.forEach(n => {
    console.log(n + " sheep");
})

/* Section 3 */
/*MAP is arguably the most commonly used higher order method
  ☑️ write some code that creates a new array, where double every number in nums is doubled
  ☑️ write some code that creates a new array, where each number is replaced by a dollar amount (ex ['$1.00', '$2.00', ...])
  ☑️ write some code that creates a new array, where each number is replaced by a boolean indicating whether positive (ex. [true, true, ...])*/

const doubleNums = nums.map(n => n * 2);
const dollarNums = nums.map(n => "$" + n.toFixed(2));
console.log(doubleNums, dollarNums);

const positiveNums = nums.map(n => {
    if(n > 0) { return true; }
    else { return false; }
});

const pos = nums.map(n => n > 0);

console.log(positiveNums, pos);


/* Section 4 */
/*Let's FILTER things down
  ☑️ write some code that creates a filtered array where only the negative numbers remain
  ☑️ write some code that creates a filtered array where only even numbers remain (HINT: %)*/

const trueFilter = nums.filter(n => true);
console.log(trueFilter);
const negatives = nums.filter(n => n < 0);
console.log(negatives);
const evenNums = nums.filter(n => n % 2 === 0);
console.log(evenNums);


/* Section 5 */
/*REDUCE the complexity (warning: challenging)
  ☑️ A common use case for reduce is adding all the numbers in an array together
  ☑️ Can you get that sum with reduce, for this array?*/

const numExample = nums.reduce((sum, n) => {
    //reduces first value is what you returned in previous iteration
    console.log(sum, n);
    return 0;
}, 0);

const numberExample = nums.reduce((sum, n) => {
    //n previous iteration becomes sum on next iteration
    console.log(sum, n);
    return n;
}, 0);

const numSum = nums.reduce((sum, n) => {
    console.log(sum, n);
    return sum + n;
}, 0);
console.log(numSum);

const numTotal = nums.reduce((sum, n) => sum + n);
console.log(numTotal);


const sumObj = nums.reduce((sum, n) => {
    return sum + n + " ";
}, {});
console.log(sumObj);


/* Section 6 */
/*☑️ Try creating a single "sheep" string from all the numbers, using reduce result should be ("1 sheep, 2 sheep, 3 sheep...")
  ☑️(Feel free to use Google, & don't worry if you can't get this! It's very challenging)*/


  let sheepArray = "";
  const numberSheep = nums.reduce((sum, n) => {
    return sheepArray += " " + n + " sheep,";
}, '');

console.log(numberSheep.trim().slice(0, -1));
console.log(typeof(numberSheep.trim().slice(0, -1)));


/* Section 7 */
/*HIGHER ORDER METHOD CHAINING
  Method chaining is still scary? It's about to get scarier.
  Remember, don't use intermediary variables
  ☑️ Let's chain split, filter, and join
  >> 1. Create a string variable -- var coach = "aaron"
  >> 2. SPLIT the "coach" variable using "" (empty space)
  >> 3. FILTER out the "a" characters
  >> 4. JOIN the result back into a string, using "" (empty space)

  ☑️ Let's chain together map and reduce on "nums"
  >> 1. MAP nums to create a new array, with triple each number
  >> 2. REDUCE to add the numbers (re use your reduce code here)*/


let coach = "aaron";
let splitCoach = coach.split("").filter(char => char !== "a").join("");
console.log(splitCoach);

// -3 + 3 + 6 + 9 + 12 = 27
let tripleThenAdd = nums.map(n => n * 3).reduce((sum, n) => sum + n);
console.log(tripleThenAdd);
`);

/*JS Practice 6*/

/*Let's practice "higher order" array methods (Aarrow functions optional)*/

var nums = [-1, 0, 1, 2, 3, 4];
var number = 0;

/* Section 0 */
/*Arrow functions practice*/

function addTwo(n) {return n + 2;}
console.log(addTwo(number));

const addTwoFunctionExpression = function(n) {return n + 2;};
console.log(addTwoFunctionExpression(number));

const addTwoArrowFunction = n => n + 2;
console.log(addTwoArrowFunction(number));

/* Section 1 */
/*SOME and EVERY
  ☑️ write some code to check if "every" number in nums is positive
  ☑️ write some code to check if any / "some" numbers in nums are greater than 3*/

const positve = nums.every(function(n){return n % 2 === 0;});
console.log(positve);

const positveArrow = nums.every(n => n % 2 === 0);
console.log(positveArrow);

const greaterThanThree = nums.some(function(n){return n > 3;});
console.log(greaterThanThree);

const greaterThanThreeArrow = nums.some(n => n > 3);
console.log(greaterThanThreeArrow);

/* Section 2 */
/*FOR EACH number in nums
  ☑️ print out each number one at a time (use forEach, not a loop)
  ☑️ print strings formatted like so ("1 sheep", "2 sheep", "3 sheep"...) to the console*/

nums.forEach(n => {
    console.log(n);
})

nums.forEach(n => {
    console.log(n + " sheep");
})

/* Section 3 */
/*MAP is arguably the most commonly used higher order method
  ☑️ write some code that creates a new array, where double every number in nums is doubled
  ☑️ write some code that creates a new array, where each number is replaced by a dollar amount (ex ['$1.00', '$2.00', ...])
  ☑️ write some code that creates a new array, where each number is replaced by a boolean indicating whether positive (ex. [true, true, ...])*/

const doubleNums = nums.map(n => n * 2);
const dollarNums = nums.map(n => "$" + n.toFixed(2));
console.log(doubleNums, dollarNums);

const positiveNums = nums.map(n => {
    if(n > 0) { return true; }
    else { return false; }
});

const pos = nums.map(n => n > 0);

console.log(positiveNums, pos);


/* Section 4 */
/*Let's FILTER things down
  ☑️ write some code that creates a filtered array where only the negative numbers remain
  ☑️ write some code that creates a filtered array where only even numbers remain (HINT: %)*/

const trueFilter = nums.filter(n => true);
console.log(trueFilter);
const negatives = nums.filter(n => n < 0);
console.log(negatives);
const evenNums = nums.filter(n => n % 2 === 0);
console.log(evenNums);


/* Section 5 */
/*REDUCE the complexity (warning: challenging)
  ☑️ A common use case for reduce is adding all the numbers in an array together
  ☑️ Can you get that sum with reduce, for this array?*/

const numExample = nums.reduce((sum, n) => {
    //reduces first value is what you returned in previous iteration
    console.log(sum, n);
    return 0;
}, 0);

const numberExample = nums.reduce((sum, n) => {
    //n previous iteration becomes sum on next iteration
    console.log(sum, n);
    return n;
}, 0);

const numSum = nums.reduce((sum, n) => {
    console.log(sum, n);
    return sum + n;
}, 0);
console.log(numSum);

const numTotal = nums.reduce((sum, n) => sum + n);
console.log(numTotal);


const sumObj = nums.reduce((sum, n) => {
    return sum + n + " ";
}, {});
console.log(sumObj);


/* Section 6 */
/*☑️ Try creating a single "sheep" string from all the numbers, using reduce result should be ("1 sheep, 2 sheep, 3 sheep...")
  ☑️(Feel free to use Google, & don't worry if you can't get this! It's very challenging)*/


  let sheepArray = "";
  const numberSheep = nums.reduce((sum, n) => {
    return sheepArray += " " + n + " sheep,";
}, '');

console.log(numberSheep.trim().slice(0, -1));
console.log(typeof(numberSheep.trim().slice(0, -1)));


/* Section 7 */
/*HIGHER ORDER METHOD CHAINING
  Method chaining is still scary? It's about to get scarier.
  Remember, don't use intermediary variables
  ☑️ Let's chain split, filter, and join
  >> 1. Create a string variable -- var coach = "aaron"
  >> 2. SPLIT the "coach" variable using "" (empty space)
  >> 3. FILTER out the "a" characters
  >> 4. JOIN the result back into a string, using "" (empty space)

  ☑️ Let's chain together map and reduce on "nums"
  >> 1. MAP nums to create a new array, with triple each number
  >> 2. REDUCE to add the numbers (re use your reduce code here)*/


let coach = "aaron";
let splitCoach = coach.split("").filter(char => char !== "a").join("");
console.log(splitCoach);

// -3 + 3 + 6 + 9 + 12 = 27
let tripleThenAdd = nums.map(n => n * 3).reduce((sum, n) => sum + n);
console.log(tripleThenAdd);

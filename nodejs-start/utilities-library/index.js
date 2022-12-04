/*
Importing the functions using the two different methods
*/

// Using ES6 object destructuring
const {sum, concat} = require('./utilities/util1.js');
// Import all the functions of a module
const utils = require('./utilities/util2.js');


/* Creating the variables */
const arr1 = [1, 2, 3, 4];
const arr2 = [11, 12, 13, 14];
const word1 = ["Node"];
const word2 = [".js"];

/* Calling the functions */
// Get the sum of an array's items
const mySum = sum(arr1);
console.log(mySum);

// Concatenate two words (array)
const myConcat = concat(word1, word2);
console.log(myConcat);

// Get the largest number in an array
const largestNumArray = utils.lgNum(arr2);
console.log(largestNumArray);

// Remove the third item of an array
const removeThirdItem = utils.cut3(arr1);
console.log(removeThirdItem);
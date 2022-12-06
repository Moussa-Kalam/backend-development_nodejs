"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import modules from utilities folder
var arrays_1 = __importDefault(require("./utilities/arrays"));
var numbers_1 = __importDefault(require("./utilities/numbers"));
var strings_1 = __importDefault(require("./utilities/strings"));
var numArr = [3, 4, 5, 6];
var wordArr = ['cat', 'dog', 'rabbit', 'bird'];
var arrSum = arrays_1.default.addArr(numArr);
var mixArr = arrays_1.default.concatArr(numArr, wordArr);
var myNum = '15' % 2;
var five = parseInt('5');
// results of function calls
console.log(arrays_1.default.cut3(mixArr));
console.log(numbers_1.default.sum(arrSum, myNum));
console.log(strings_1.default.capitalize('the quick brown fox'));
console.log(numbers_1.default.multiply(five, 8));
console.log(arrays_1.default.lgNum(mixArr));

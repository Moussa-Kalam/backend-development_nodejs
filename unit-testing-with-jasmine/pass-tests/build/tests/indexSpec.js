"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const arrays_1 = __importDefault(require("../utilities/arrays"));
const numbers_1 = __importDefault(require("../utilities/numbers"));
const strings_1 = __importDefault(require("../utilities/strings"));
const numArr = [3, 4, 5, 6];
const wordArr = ["cat", "dog", "rabbit", "bird"];
const myNum = "15" % 2;
it("should remove the third item from an array", () => {
    expect(arrays_1.default.cut3(numArr)).toEqual([3, 4, 6]);
});
it("capitalizes the first letter of each word", () => {
    expect(strings_1.default.capitalize("moussa kalam amzat")).toBe("Moussa Kalam Amzat");
});
it("should multiply 2 and 6 and be truthy", () => {
    expect(numbers_1.default.multiply(2, 9)).toBeTruthy();
});
it("should a sum greater than or equal to 15", () => {
    expect(numbers_1.default.sum(14, 4)).toBeGreaterThanOrEqual(15);
});
it("should concatenate two arrays but not contain 3", () => {
    expect(arrays_1.default.concatArr([1, 5, 7], [4, 2, 6, 8])).not.toContain(3);
});
it("should not contain a large number and be falsy", () => {
    expect(arrays_1.default.lgNum(wordArr)).toBeFalsy();
});
it("should return lowercase string", () => {
    expect(strings_1.default.lowerCase("I LOVE CODING")).toBe("i love coding");
});

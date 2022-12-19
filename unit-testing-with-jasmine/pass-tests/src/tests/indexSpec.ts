import arrays from "../utilities/arrays";
import numbers from "../utilities/numbers";
import strings from "../utilities/strings";

const numArr = [3, 4, 5, 6];
const wordArr = ["cat", "dog", "rabbit", "bird"];
const myNum = ("15" as unknown as number) % 2;

it("should remove the third item from an array", () => {
  expect(arrays.cut3(numArr)).toEqual([3, 4, 6]);
});

it("capitalizes the first letter of each word", () => {
  expect(strings.capitalize("moussa kalam amzat")).toBe("Moussa Kalam Amzat");
});

it("should multiply 2 and 6 and be truthy", () => {
  expect(numbers.multiply(2, 9)).toBeTruthy();
});

it("should a sum greater than or equal to 15", () => {
  expect(numbers.sum(14, 4)).toBeGreaterThanOrEqual(15);
});

it("should concatenate two arrays but not contain 3", () => {
  expect(arrays.concatArr([1, 5, 7], [4, 2, 6, 8])).not.toContain(3);
});

it("should not contain a large number and be falsy", () => {
  expect(arrays.lgNum(wordArr)).toBeFalsy();
});

it("should return lowercase string", () => {
  expect(strings.lowerCase("I LOVE CODING")).toBe("i love coding");
});

// StringCalculator.test.js

const StringCalculator = require('./StringCalculator');

test("Testing empty string", () => {
  expect(StringCalculator.Add("")).toBe(0);
});

test("Testing one number", () => {
  expect(StringCalculator.Add("8")).toBe(8);
});

test("Testing two numbers", () => {
  expect(StringCalculator.Add("8,7")).toBe(15);
});

test("Testing unknown number of numbers", () => {
  expect(StringCalculator.Add("8,7,12,11,1")).toBe(39);
});

test("Testing to allow newline or 'comma' to split numbers", () => {
  expect(StringCalculator.Add("8,7\n12,11\n1")).toBe(39);
});

test("Testing to not allow negative numbers", () => {
  expect(StringCalculator.Add("2,-4,3,-5")).toBe("Negatives not allowed: -4,-5");
});

test("Testing to not allow negative numbers when 1 negative", () => {
  expect(StringCalculator.Add("2,3,-5")).toBe("Negatives not allowed: -5");
});

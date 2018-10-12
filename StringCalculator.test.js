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

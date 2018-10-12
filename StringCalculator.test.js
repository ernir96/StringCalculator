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

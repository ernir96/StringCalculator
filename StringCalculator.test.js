// StringCalculator.test.js

const StringCalculator = require('./StringCalculator');

test("Testing empty string", () => {
  expect(StringCalculator.Add("")).toBe(0);
});

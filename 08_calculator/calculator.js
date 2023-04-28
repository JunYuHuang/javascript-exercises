const add = function (num1, num2) {
  return Number.parseInt(num1 + num2);
};

const subtract = function (num1, num2) {
  return Number.parseInt(num1 - num2);
};

const sum = function (nums) {
  return nums.reduce((prev, curr) => prev + curr, 0);
};

const multiply = function (nums) {
  return nums.reduce((prev, curr) => prev * curr, 1);
};

const power = function (base, power) {
  return base ** power;
};

const factorial = function (int) {
  if (int === 0) return 1;
  let res = 1;
  for (let i = 1; i < int + 1; i++) {
    res *= i;
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};

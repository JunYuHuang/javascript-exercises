const fibonacci = function (n) {
  n = Number.parseInt(n);
  if (n <= 0) return "OOPS";
  if (n <= 2) return 1;

  let nMinus1 = 1;
  let nMinus2 = 1;
  let res = -1;
  for (let i = 3; i < n + 1; i++) {
    res = nMinus1 + nMinus2;
    nMinus2 = nMinus1;
    nMinus1 = res;
  }
  return res;
};

// Do not edit below this line
module.exports = fibonacci;

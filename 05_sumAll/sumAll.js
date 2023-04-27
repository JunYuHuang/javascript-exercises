const sumAll = function (intBound1, intBound2) {
  const isInvalidIntBound = function (int) {
    return !(Number.isInteger(int) && int >= 0);
  };
  if (isInvalidIntBound(intBound1) || isInvalidIntBound(intBound2))
    return "ERROR";

  let start = intBound1 < intBound2 ? intBound1 : intBound2;
  let end = intBound1 < intBound2 ? intBound2 : intBound1;
  let res = 0;
  for (let i = start; i < end + 1; i++) res += i;
  return res;
};

// Do not edit below this line
module.exports = sumAll;

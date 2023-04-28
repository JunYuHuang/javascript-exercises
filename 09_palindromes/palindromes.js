const palindromes = function (string) {
  const sanitizeString = function (string) {
    return string.toLowerCase().replace(/[^a-z0-9]/g, "");
  };

  const stringAsArr = sanitizeString(string).split("");
  let l = 0;
  let r = stringAsArr.length - 1;
  while (l < r) {
    if (stringAsArr[l] !== stringAsArr[r]) return false;
    l++;
    r--;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;

const reverseString = function (string) {
  let stringArr = String(string).split("");
  let l = 0;
  let r = string.length - 1;
  while (l < r) {
    temp = stringArr[l];
    stringArr[l] = stringArr[r];
    stringArr[r] = temp;
    l++;
    r--;
  }
  return stringArr.join("");
};

// Do not edit below this line
module.exports = reverseString;

const repeatString = function (string, num) {
  string = String(string);
  num = parseInt(num);
  EMPTY_STRING = "";

  if (num === 0) return EMPTY_STRING;
  if (num < 0) return "ERROR";
  if (string === EMPTY_STRING) return string;

  let res = [];
  for (let i = 0; i < num; i++) res.push(string);
  return res.join("");
};

// Do not edit below this line
module.exports = repeatString;

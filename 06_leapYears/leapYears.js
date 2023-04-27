const leapYears = function (year) {
  const isNotDivBy4 = year % 4 !== 0;
  const isDivBy100 = year % 100 === 0;
  const isDivBy400 = year % 400 === 0;

  if (isNotDivBy4) return false;
  if (isDivBy100) return isDivBy400;
  return true;
};

// Do not edit below this line
module.exports = leapYears;

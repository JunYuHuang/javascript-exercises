const removeFromArray = function (array, ...targets) {
  return array.filter((element) => !targets.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;

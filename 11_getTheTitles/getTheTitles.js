const getTheTitles = function (bookObj) {
  return Array.from(Object.values(bookObj)).map((val) => val.title);
};

// Do not edit below this line
module.exports = getTheTitles;

const findTheOldest = function (peopleArray) {
  const getAge = (personObj) => {
    return (
      (personObj.yearOfDeath
        ? personObj.yearOfDeath
        : new Date().getUTCFullYear()) - personObj.yearOfBirth
    );
  };

  const maxAge = Math.max(...peopleArray.map((person) => getAge(person)));

  return peopleArray.find((person) => getAge(person) === maxAge);
};

// Do not edit below this line
module.exports = findTheOldest;

const findTheOldest = function(array) {
    // check input objects for currenly alive people
    array.forEach(person => {
    if (person.yearOfDeath === undefined) {
        // get current year
        const currentYear = new Date().getFullYear();
        // set death year as current year for age calc later
        person.yearOfDeath = currentYear;
    };
  });
  // map current ages to new array
  const ageMap = array.map(person => person.yearOfDeath - person.yearOfBirth);
  const max = Math.max(...ageMap);
  const oldestIndex = ageMap.indexOf(max);
  return array[oldestIndex];
};

// Do not edit below this line
module.exports = findTheOldest;

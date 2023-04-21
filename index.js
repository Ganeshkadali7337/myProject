const getFirstNames = require("../utilities/utils/index");
const list = require("../country/state/city/index");

const getPeopleInCity = function (list) {
  const result = getFirstNames(list);
  return result;
};

console.log(getPeopleInCity(list));
module.exports = getPeopleInCity;

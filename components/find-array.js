"use strict";
const findInArray = (arrayData, searchValue, objectName) => {
  let findValue = arrayData.find((data) => {
    return objectName ? data[objectName] === searchValue : data === searchValue;
  });
  return findValue;
};

module.exports = findInArray;

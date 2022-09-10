"use strict";
const filterArray = (arrayData, searchValue, objectName) => {
  let filterValue = arrayData.filter((data) => {
    return objectName ? data[objectName] === searchValue : data === searchValue;
  });
  return filterValue;
};

module.exports = filterArray;
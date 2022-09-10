"use strict";
const sortArray = (arrayData, sortType, objectName) => {
  let sortedArray = arrayData.sort((a, b) => {
    return objectName
      ? sortType === "desc"
        ? a[objectName] > b[objectName]
          ? -1
          : a[objectName] < b[objectName]
          ? 1
          : 0
        : a[objectName] < b[objectName]
        ? -1
        : a[objectName] > b[objectName]
        ? 1
        : 0
      : sortType === "desc"
      ? b - a
      : a - b;
  });
  return sortedArray;
};

module.exports = sortArray;
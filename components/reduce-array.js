"use strict";
const reduceArray = (arrayData, operation = "sum", accum, objectName) => {
  const arrayValue = arrayData.reduce((accum, data) => {
    const value = objectName ? data[objectName] : data;
    switch (operation.toLocaleLowerCase()) {
      case "sum":
        accum = accum + value;
        return accum;
        break;
      case "minus":
        accum = accum - value;
        return accum;
        break;
      case "multiply":
        accum = accum * value;
        return accum;
        break;
      default:
        return accum;
    }
  }, accum);
  return arrayValue;
};

module.exports = reduceArray;

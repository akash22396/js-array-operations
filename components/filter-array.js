"use strict";
 const filterArray = (arrayData, searchValue, objectName) => {
  let filterValue = arrayData.filter((data) => {
    return objectName ? data[objectName] === searchValue : data === searchValue;
  });
  return filterValue;
};
 const filterByObject = (arrayData, objectName) => {
  const objectKey = Object.keys(objectName);
  let filterDataArray = arrayData;
  objectKey.forEach((dt) => {
    filterDataArray = filterArray(filterDataArray, objectName[dt], dt);
  });
  return filterDataArray;
};
// module.exports=filterByObject
module.exports ={ filterArray,filterByObject};

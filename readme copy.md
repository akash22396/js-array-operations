
# Installation:

```
npm i js-array-operations
```

# Find in Array

```
const { findInArray } = require('js-array-operations');
or
import { findInArray } from 'js-array-operations';

// With object name findInArray(arrayData,searchValue,objectName)

findInArray(
    [
      { name: "akash", age: 25 },
      { name: "ravi", age: 28 },
      { name: "rajan", age: 25 },
    ],
    28,
    "age"
);

// Without object name findInArray(arrayData,searchValue)

findInArray([1, 2, 3, 4, 5], 1);
```

# Sort Array

```
const { sortArray } = require('js-array-operations');
or
import { sortArray } from 'js-array-operations';

// By default it sort data in Ascending Order.
// For :
//     Ascending Order: asc
//     Descending Order: desc

// With object name sortArray(arrayData,sortType,objectName)

  sortArray(
    [
      { name: "akash", age: 25 },
      { name: "ravi", age: 28 },
      { name: "rajan", age: 25 },
    ],
    "desc",
    "name"
  );


// Without object name sortArray(arrayData,sortType)

sortArray([1, 2, 4, 3, 5], "desc");
```

# Filter Array


```
const {filterArray} = require('js-array-operations');
or
import {filterArray} from 'js-array-operations';

// With object name filterArray(arrayData,searchValue,objectName)

filterArray(
    [
      { name: "akash", age: 25 },
      { name: "ravi", age: 28 },
      { name: "rajan", age: 25 },
    ],
    28,
    "age"
);

// Without object name filterArray(arrayData,searchValue)

filterArray([1, 2, 3, 4, 5], 1);
```
# Other operations coming soon..
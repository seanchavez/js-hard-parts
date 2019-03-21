//console.log("Hello, world!");

// Challenge 1
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
//console.log(addTwo(3));
//console.log(addTwo(10));

// Challenge 2
function addS(word) {
  return word + "s";
}

// uncomment these to check your work
//console.log(addS("pizza"));
//console.log(addS("bagel"));

// Challenge 3
function map(array, callback) {
  const results = [];
  for (let el of array) {
    results.push(callback(el));
  }
  return results;
}

//console.log(map([1, 2, 3], addTwo));

// Challenge 4
function forEach(array, callback) {
  for (let el of array) {
    callback(el);
  }
}

// see for yourself if your forEach works!

// var alphabet = "";
// var letters = ["a", "b", "c", "d"];
// forEach(letters, function(char) {
//   alphabet += char;
// });
// console.log(alphabet); //prints 'abcd'

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
  const results = [];
  forEach(array, el => {
    results.push(callback(el));
  });
  return results;
}

//console.log(mapWith([1, 2, 3], addTwo));

//Extension 2
function reduce(array, callback, initialValue) {
  let accu = initialValue;
  forEach(array, el => {
    accu = callback(accu, el);
  });
  return accu;
}

var nums = [4, 1, 3];
var add = function(a, b) {
  return a + b;
};
console.log(reduce(nums, add, 0)); //-> 8

//Extension 3
function intersection(arrays) {
  const args = Array.from(arguments);
  const results = [];
  for (i = 0; i < args[0].length; i++) {
    let match = false;
    for (j = 1; j < args.length; j++) {
      if (args[j].includes(args[0][i])) {
        match = true;
      } else {
        match = false;
        break;
      }
    }
    if (match) {
      results.push(args[0][i]);
    }
  }
  return results;
}

console.log(
  intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])
);
//should log: [5, 15]

//Extension 4
function union(arrays) {
  args = Array.from(arguments);
  const results = [];
  for (i = 0; i < args.length; i++) {
    for (let j = 0; j < args[i].length; j++) {
      if (!results.includes(args[i][j])) {
        results.push(args[i][j]);
      }
    }
  }
  return results;
}

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
  const matches = {};
  for (i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i].toLowerCase()) {
      matches[array1[i]] = callback(array2[i]);
    }
  }
  return matches;
}

console.log(
  objOfMatches(
    ["hi", "howdy", "bye", "later", "hello"],
    ["HI", "Howdy", "BYE", "LATER", "hello"],
    function(str) {
      return str.toUpperCase();
    }
  )
);
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
  const resultObj = {};
  for (i = 0; i < arrVals.length; i++) {
    values = [];
    for (j = 0; j < arrCallbacks.length; j++) {
      values.push(arrCallbacks[j](arrVals[i]));
    }
    resultObj[arrVals[i]] = values;
  }
  return resultObj;
}

console.log(
  multiMap(
    ["catfood", "glue", "beer"],
    [
      function(str) {
        return str.toUpperCase();
      },
      function(str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
      },
      function(str) {
        return str + str;
      }
    ]
  )
);
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

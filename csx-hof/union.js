function union(arrays) {
  const flattened = arrays.reduce((acc, cv) => {
    const results = cv.filter(el => {
      return !acc.includes(el);
    });
    return acc.concat(results);
  });
  return flattened;
}

const arr1 = [5, 10, 15];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [100, 15, 10, 1, 5];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]

function objOfMatches(arr1, arr2, cb) {
  const result = {};
  arr1.forEach((el, i) => {
    if (cb(el) === arr2[i]) {
      result[el] = arr2[i];
    }
  });
  return result;
}

const arr1 = ["hi", "howdy", "bye", "later", "hello"];
const arr2 = ["HI", "Howdy", "BYE", "later", "HELLO"];
function uppercaser(str) {
  return str.toUpperCase();
}
console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }

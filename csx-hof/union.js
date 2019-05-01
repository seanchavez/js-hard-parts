function union(arrays) {
  const flattened = arrays.reduce((acc, cv) => {
    const results = cv.filter((el, i) => {
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

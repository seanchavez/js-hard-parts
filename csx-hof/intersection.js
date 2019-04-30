function intersection(arrOfArrs) {
  const results = [];

  for (let i = 0; i < arrOfArrs[0].length; i++) {
    const matchCount = arrOfArrs.reduce((acc, cv) => {
      if (cv.includes(arrOfArrs[0][i])) {
        return acc + 1;
      }
    }, 0);
    if (matchCount === arrOfArrs.length) {
      results.push(arrOfArrs[0][i]);
    }
  }
  return results;
}

const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]

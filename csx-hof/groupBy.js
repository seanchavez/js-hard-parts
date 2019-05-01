function groupBy(arr, cb) {
  return arr.reduce((acc, cv) => {
    const key = cb(cv);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(cv);
    return acc;
  }, {});
}

const decimals = [1.3, 2.1, 2.4];
const floored = function(num) {
  return Math.floor(num);
};
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

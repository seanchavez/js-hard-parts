function prioritize(arr, cb) {
  const priorities = [];
  const nonPriorities = [];
  arr.forEach(el => (cb(el) ? priorities.push(el) : nonPriorities.push(el)));
  return priorities.concat(nonPriorities);
}

function startsWithS(str) {
  return str[0].toLowerCase() === "s";
}
const tvShows = ["curb", "rickandmorty", "seinfeld", "sunny", "friends"];
console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']

function countBy(arr, cb) {
  const result = {};
  arr.forEach(el => {
    const key = cb(el);
    if (result[key]) {
      result[key]++;
    } else {
      result[key] = 1;
    }
  });
  return result;
}

function evenOdd(n) {
  if (n % 2 === 0) return "even";
  else return "odd";
}
const nums = [1, 2, 3, 4, 5];
console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }

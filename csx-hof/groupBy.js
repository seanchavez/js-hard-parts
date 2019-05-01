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

function goodKeys(obj, cb) {
  const results = [];
  for (const prop in obj) {
    if (cb(obj[prop])) {
      results.push(prop);
    }
  }
  return results;
}

const sunny = {
  mac: "priest",
  dennis: "calculator",
  charlie: "birdlaw",
  dee: "bird",
  frank: "warthog"
};
function startsWithBird(str) {
  return str.slice(0, 4).toLowerCase() === "bird";
}
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']

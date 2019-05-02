function addByX(x) {
  return num => num + x;
}

const addByTwo = addByX(2);
console.log(addByTwo(1));
console.log(addByTwo(2));
console.log(addByTwo(3));

function once(cb) {
  let result;
  return (...args) => {
    if (!result) {
      result = cb(...args);
    }
    return result;
  };
}

const addByTwoOnce = once(function(num) {
  return num + 2;
});

console.log(addByTwoOnce(5)); //should log 7
console.log(addByTwoOnce(10)); //should log 7
console.log(addByTwoOnce(9001)); //should log 7

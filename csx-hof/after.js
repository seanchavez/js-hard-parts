function after(num, cb) {
  let callCount = 0;
  return arg => {
    callCount++;
    if (callCount >= num) {
      return cb(arg);
    }
  };
}

const called = function(string) {
  return "hello " + string;
};
const afterCalled = after(3, called);

console.log(afterCalled("world")); // -> nothing is printed
console.log(afterCalled("world")); // -> nothing is printed
console.log(afterCalled("world")); // -> 'hello world' is printed

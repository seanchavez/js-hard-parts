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

function delay(cb, waitTime) {
  return () => {
    setTimeout(cb, waitTime);
  };
}

let count = 0;
const delayedFunc = delay(() => count++, 1000);
delayedFunc();
console.log(count); // should print '0'
setTimeout(() => console.log(count), 1000); // should print '1' after 1 second

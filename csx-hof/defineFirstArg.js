function defineFirstArg(cb, arg) {
  return (...args) => {
    return cb(arg, ...args);
  };
}

const subtract = function(big, small) {
  return big - small;
};
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // should log: 15

function dateStamp(cb) {
  return (...args) => ({
    date: new Date().toDateString(),
    output: cb(...args)
  });
}

const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); // should log: { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // should log: { date: (today's date), output: 12 }

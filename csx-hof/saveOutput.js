function saveOutput(cb, str) {
  const result = {};
  return input => {
    if (input === str) {
      return result;
    } else {
      result[input] = cb(input);
      return result[input];
    }
  };
}

const multiplyBy2 = function(num) {
  return num * 2;
};
const multBy2AndLog = saveOutput(multiplyBy2, "boo");
console.log(multBy2AndLog(2)); // should log: 4
console.log(multBy2AndLog(9)); // should log: 18
console.log(multBy2AndLog("boo")); // should log: { 2: 4, 9: 18 }

function cycleIterator(arr) {
  let i = -1;
  return () => {
    i++;
    if (i === arr.length) {
      i = 0;
    }
    return arr[i];
  };
}

const threeDayWeekend = ["Fri", "Sat", "Sun"];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // should log: 'Fri'
console.log(getDay()); // should log: 'Sat'
console.log(getDay()); // should log: 'Sun'
console.log(getDay()); // should log: 'Fri'

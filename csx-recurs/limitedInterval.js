function limitedInterval(callback, wait, limit) {
  const intervalID = setInterval(callback, wait);
  setTimeout(() => clearInterval(intervalID), limit);
}

limitedInterval(() => console.log("repeating"), 100, 550);
// should log 'repeating' once per 100 ms, five times.

function runInOrder(functions, times) {
  let delay = 0;
  functions.forEach((element, index) => {
    delay += times[index];
    setTimeout(() => {
      element();
    }, delay);
  });
}

function sayHi() {
  console.log("hi");
}
function sayBye() {
  console.log("bye");
}
function sayHowdy() {
  console.log("howdy");
}

runInOrder([sayHi, sayBye, sayHowdy], [200, 100, 300]);

/*
should log:
'hi' (after 200 ms)
'bye' (100 ms after 'hi')
'howdy' (300 ms after 'bye')
*/

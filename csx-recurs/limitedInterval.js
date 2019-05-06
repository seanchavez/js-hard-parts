function limitedInterval(callback, wait, limit) {
  const intervalID = setInterval(callback, wait);
  setTimeout(() => clearInterval(intervalID), limit);
}

limitedInterval(() => console.log("repeating"), 100, 550);
// should log 'repeating' once per 100 ms, five times.

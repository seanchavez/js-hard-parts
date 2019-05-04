let counter = 0;

function repeater(char) {
  counter++;
  if (counter === 5) {
    counter = 0;
    return char.repeat(5);
  }
  return repeater(char);
}

console.log(repeater("g"));
console.log(repeater("j"));

function factorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}

console.log(factorial(4)); // -> 24
console.log(factorial(6)); // -> 720
console.log(factorial(0)); // -> 1

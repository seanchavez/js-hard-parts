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

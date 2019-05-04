function getLength(array, count = 0) {
  if (!array[0]) {
    return count;
  }
  const newArr = array.slice(1);
  count++;
  return getLength(newArr, count);
}

console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5
console.log(getLength([])); // -> 0

function pow(base, exponent) {
  if (exponent === 1) return base * exponent;
  return base * pow(base, exponent - 1);
}

console.log(pow(2, 4)); // -> 16
console.log(pow(3, 5)); // -> 243

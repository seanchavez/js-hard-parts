function flow(input, funcArray) {
  if (funcArray.length === 1) return funcArray[0](input);

  return flow(
    funcArray[0](input),
    funcArray.slice(1)
  );
}

function multiplyBy2(num) {
  return num * 2;
}
function add7(num) {
  return num + 7;
}
function modulo4(num) {
  return num % 4;
}
function subtract10(num) {
  return num - 10;
}
const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
console.log(
  flow(
    2,
    arrayOfFunctions
  )
); // -> -7

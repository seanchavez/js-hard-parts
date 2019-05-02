function createFunction() {
  return () => "hello world";
}

const myFunction = createFunction();
console.log(myFunction()); //should log: 'hello world'

function createFunctionWithInput(input) {
  return () => input;
}

const sampleFunc = createFunctionWithInput("sample");
console.log(sampleFunc()); // should log: 'sample'
const helloFunc = createFunctionWithInput("hello");
console.log(helloFunc()); // should log: 'hello'

// CHALLENGE 1

function sumFunc(arr) {
  let sum = 0;
  for (const el of arr) {
    sum += el;
  }
  return sum;
}

// Uncomment the lines below to test your work
const array = [1, 2, 3, 4];
console.log(sumFunc(array)); // -> should log 10

function returnIterator(arr) {
  let i = 0;
  return () => arr[i++];
}

// Uncomment the lines below to test your work
const array2 = ["a", "b", "c", "d"];
const myIterator = returnIterator(array2);
console.log(myIterator()); // -> should log 'a'
console.log(myIterator()); // -> should log 'b'
console.log(myIterator()); // -> should log 'c'
console.log(myIterator()); // -> should log 'd'

// CHALLENGE 2

function nextIterator(arr) {
  let i = 0;
  return { next: () => arr[i++] };
}

// Uncomment the lines below to test your work
const array3 = [1, 2, 3];
const iteratorWithNext = nextIterator(array3);
console.log(iteratorWithNext.next()); // -> should log 1
console.log(iteratorWithNext.next()); // -> should log 2
console.log(iteratorWithNext.next()); // -> should log 3

// CHALLENGE 3

function sumArray(arr) {
  const iterate = nextIterator(arr);
  let sum = 0;
  do {
    next = iterate.next();
    if (next) sum += next;
  } while (next);
  return sum;
}

// Uncomment the lines below to test your work
const array4 = [1, 2, 3, 4];
console.log(sumArray(array4)); // -> should log 10

// CHALLENGE 4

function setIterator(set) {
  values = [];
  set.forEach((val1, val2, set) => {
    values.push(val1);
  });
  let i = 0;
  return { next: () => values[i++] };
}

// Uncomment the lines below to test your work
const mySet = new Set("hey");
const iterateSet = setIterator(mySet);
console.log(iterateSet.next()); // -> should log 'h'
console.log(iterateSet.next()); // -> should log 'e'
console.log(iterateSet.next()); // -> should log 'y'

// CHALLENGE 5

function indexIterator(arr) {
  // YOUR CODE HERE
}

// Uncomment the lines below to test your work
// const array5 = ['a', 'b', 'c', 'd'];
// const iteratorWithIndex = indexIterator(array5);
// console.log(iteratorWithIndex.next()); // -> should log [0, 'a']
// console.log(iteratorWithIndex.next()); // -> should log [1, 'b']
// console.log(iteratorWithIndex.next()); // -> should log [2, 'c']

// CHALLENGE 6

function Words(string) {
  this.str = string;
}

Words.prototype[Symbol.iterator] = function() {
  // YOUR CODE HERE
};

// Uncomment the lines below to test your work
// const helloWorld = new Words('Hello World');
// for (word of helloWorld) { console.log(word); } // -> should log 'Hello' and 'World'

// CHALLENGE 7

// function valueAndPrevIndex(array) {}

// const returnedSentence = valueAndPrevIndex([4, 5, 6]);
// console.log(returnedSentence.sentence());
// console.log(returnedSentence.sentence());
// console.log(returnedSentence.sentence());

// //CHALLENGE 8

// function* createConversation(string) {}

// console.log(createConversation("english").next());

// //CHALLENGE 9
// function waitForVerb(noun) {}

// async function f(noun) {}

// f("dog");

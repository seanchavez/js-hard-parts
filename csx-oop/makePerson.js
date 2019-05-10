function makePerson(name, age) {
  // add code here
  const person = Object.create(null);
  person.name = name;
  person.age = age;
  return person;
}

const vicky = makePerson("Vicky", 24);

console.log(vicky.name); // -> Logs 'Vicky'
console.log(vicky.age); // -> Logs 24

const personStore = {
  greet: function() {
    console.log("hello");
  }
};

function personFromPersonStore(name, age) {
  // add code here
  const person = Object.create(personStore);
  person.name = name;
  person.age = age;
  return person;
}

const sandra = personFromPersonStore("Sandra", 32);

console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age); // -> Logs 26
sandra.greet(); // -> Logs 'hello'

console.log(personStore.prototype);

function PersonConstructor() {
  this.greet = function() {
    console.log("hello");
  };
}

function personFromConstructor(name, age) {
  // add code here
  const person = new PersonConstructor();
  person.name = name;
  person.age = age;
  return person;
}

const mike = personFromConstructor("Mike", 30);

console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); // -> Logs 30
mike.greet(); // -> Logs 'hello'

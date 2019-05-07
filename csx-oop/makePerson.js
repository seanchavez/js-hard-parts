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

const sandra = personFromPersonStore("Sandra", 26);

console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age); // -> Logs 26
sandra.greet(); // -> Logs 'hello'

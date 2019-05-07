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

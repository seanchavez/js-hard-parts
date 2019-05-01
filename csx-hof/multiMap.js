function multiMap(valArr, cbArr) {
  const result = {};
  for (const val of valArr) {
    result[val] = cbArr.map(cb => {
      return cb(val);
    });
  }
  return result;
}

function uppercaser(str) {
  return str.toUpperCase();
}
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
function repeater(str) {
  return str + str;
}
const items = ["catfood", "glue", "beer"];
const functions = [uppercaser, capitalize, repeater];
console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }, 'Beer', 'beerbeer'] }

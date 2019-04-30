function intersection(arrOfArrs) {
  const results = [];
  for (i = 0; i < arrOfArrs[0].length; i++) {
    match = arrOfArrs.reduce((acc, cv) => {
      console.log("fuck you " + cv);
      return cv.includes(arrOfArrs[0][i]);
    }, false);

    if (match === true) {
      results.push(arrOfArrs[0][i]);
    }
  }
  return results;
}

// function intersection(arrays) {
//   //const args = Array.from(arguments);
//   const results = [];
//   for (i = 0; i < arrays[0].length; i++) {
//     let match = false;
//     for (j = 1; j < arrays.length; j++) {
//       if (arrays[j].includes(arrays[0][i])) {
//         match = true;
//       } else {
//         match = false;
//         break;
//       }
//     }
//     if (match) {
//       results.push(arrays[0][i]);
//     }
//   }
//   return results;
// }

// function intersection(arrOfArrs) {
//   arrOfArrs.reduce((acc, cv) => {
//     console.log(acc);
//     for (let i = 0; i < arrOfArrs[0].length; i++) {
//       if (!cv.includes(acc[i])) {
//         return acc.push(acc[i]); //.slice(i, 1);
//       }
//     }
//   });
// }

// function intersection(arrOfArrs) {
//   const results = [];
//   for (i = 0; i < arrOfArrs[0].length; i++) {
//     let match = arrOfArrs.reduce((acc, cv) => {
//       acc = cv.includes(arrOfArrs[0][i]);
//       return acc;
//     }, false);
//     console.log(match);
//     if (match) {
//       results.push(arrOfArrs[0][i]);
//     }

// for (j = 1; j < arrOfArrs.length; j++) {
//   arrOfArrs.reduce((acc, cv) => {
//     return
//   })
// }
//   }
//   return results;
// }

const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]

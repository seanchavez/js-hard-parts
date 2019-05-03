function censor() {
  const pairs = {};
  return (str1, str2) => {
    if (str1 && str2) {
      pairs[str1] = str2;
    } else if (str1) {
      const result = str1
        .split("")
        .map(char => {
          if (pairs.hasOwnProperty(char)) {
            char = pairs[char];
          }
          return char;
        })
        .join("");
      return result;
    }
  };
}

const changeScene = censor();
changeScene("dogs", "cats");
changeScene("quick", "slow");
console.log(changeScene("The quick, brown fox jumps over the lazy dogs.")); // should log: 'The slow, brown fox jumps over the lazy cats.'

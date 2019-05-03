function censor() {
  const pairs = {};
  return (str1, str2) => {
    if (str1 && str2) {
      pairs[str1] = str2;
    } else if (str1) {
      const strArr = str1.split(" ");
      for (key in pairs) {
        strArr.forEach((str, i, arr) => {
          if (str.startsWith(key)) {
            const offset = str.length - key.length;
            if (offset) {
              const punctuation = str.slice(-offset);
              arr[i] = pairs[key] + punctuation;
            } else {
              arr[i] = pairs[key];
            }
          }
        });
      }
      return strArr.join(" ");
    }
  };
}

const changeScene = censor();
changeScene("dogs", "cats");
changeScene("quick", "slow");
console.log(changeScene("The quick, brown fox jumps over the lazy dogs.")); // should log: 'The slow, brown fox jumps over the lazy cats.'

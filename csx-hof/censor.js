function censor() {
  const pairs = {};
  return (str1, str2) => {
    if (str1 && str2) {
      pairs[str1] = str2;
    } else if (str1) {
      console.log(pairs);
      const props = Object.getOwnPropertyNames(pairs);
      console.log(props);
      const strArr = str1.split(" ");

      for (key in pairs) {
        strArr.forEach((str, i, arr) => {
          if (str.startsWith(key)) {
            arr[i] = pairs[key];
          }
        });
      }

      // results = strArr.map((char, i, arr) => {
      //   console.log("char ", char);
      //   if (props.includes(char)) {
      //     strApp[i] = pairs[char];
      //   }
      //   return arr[i];
      // });
      return strArr.join(" ");
    }
  };
}

const changeScene = censor();
changeScene("dogs", "cats");
changeScene("quick", "slow");
console.log(changeScene("The quick, brown fox jumps over the lazy dogs.")); // should log: 'The slow, brown fox jumps over the lazy cats.'

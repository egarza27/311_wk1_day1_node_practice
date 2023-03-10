const split = (str, delim) => str.split(delim);

const pairs = (str) => {
  let splitStringArr = [];
  for (let i = 0; i < str.length; i = i + 2) {
    splitStringArr.push(str.slice(i, i + 2));
  }
  return splitStringArr;
};

console.log(pairs("hello"));

const reverse = (str) => {
  // write code for strings.reverse
  const stringArray = str.split("");
  const reverseArray = stringArray.reverse();
  const arrayToString = reverseArray.join("");
  return arrayToString;
};

module.exports = {
  split,
  pairs,
  reverse,
};

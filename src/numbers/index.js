const isEven = (num) => {
  // write code for numbers.isEven
  if (num % 2 === 0) {
    return true;
  }
};

const sum = (arr) => arr.reduce((a, b) => a + b);

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  for (let i = 0; i < arr.length; i++) {
    for (let n = -1; n < arr.length; n++)
      if (arr[i] + arr[n] === sum) {
        return true;
      }
  }
  return false;
};

module.exports = {
  isEven,
  sum,
  comboSum,
};

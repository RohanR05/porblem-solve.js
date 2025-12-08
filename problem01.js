let mainArray = [1, 2, 31];
let ava = 0;
let total = 0;

function AverageOfOddNum(str) {
  for (let s of str) {
    if (s % 2 === 1) {
      total = total + s;
      ava++;
    }
  }
  let average = total / ava;
  console.log(average);
  return average;
}

str = mainArray;
AverageOfOddNum(str);

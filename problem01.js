let mainArray = [2, 2, 2, 2, 2];
let ava = 0;
let total = 0;

function AverageOfOddNum(str) {
  for (let s of str) {
    if (s % 2 === 1) {
      total = total + s;
      ava++;
    }
  }
  if (ava === 0) {
    console.log("No Odd is here");
    return null;
  }
  let average = total / ava;
  console.log(average);
  return average;
}

str = mainArray;
AverageOfOddNum(str);

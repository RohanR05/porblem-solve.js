let mainArray = [1, 2, 3, 4, 5, 6, 7, 8, -9, 0];
let largeNum = mainArray[0];

for (let i = 0; i < mainArray.length; i++) {
  let num = mainArray[i];
  if (num > largeNum) {
    largeNum = num;
  }
}

console.log(largeNum);

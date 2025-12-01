let mainArray = [1, 2, 3, 4, 5, 6, -7];
let largeArray = mainArray[0];

for (i = 0; i < mainArray.length; i++) {
  if (mainArray[i] > largeArray) {
    largeArray = mainArray[i];
  }
}

console.log(largeArray);

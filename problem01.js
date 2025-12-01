let mainArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let revArray = [];

for (i = 0; i < mainArray.length; i++) {
  revArray.unshift(mainArray[i]);
}

console.log(revArray);

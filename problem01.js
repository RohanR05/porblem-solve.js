let mainArray = [1, 2, 3, 4, 5, 5, 4, 9, -1];
let singleArray = [];

for (i = 0; i < mainArray.length; i++) {
  if (!singleArray.includes(mainArray[i])) {
    singleArray.push(mainArray[i]);
  }
}
singleArray.sort((a, b) => a - b);

console.log(singleArray);

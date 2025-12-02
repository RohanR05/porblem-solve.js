let mainArray = [1, 2, 3, 4, 5, 6, 6, 6, 6 - 1, -2, -3];
let singleArray = [];

for (let i = 0; i < mainArray.length; i++) {
  let num = mainArray[i];
  if (!singleArray.includes(num)) {
    singleArray.push(num);
  }
}

singleArray.sort((b, a) => a - b);

console.log(singleArray);

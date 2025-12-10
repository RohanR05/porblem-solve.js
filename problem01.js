let mainArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function findMax(numbers) {
  let num = mainArray[0];
  for (const number of numbers) {
    if (num < number) {
      num = number;
    }
  }
  return num;
}
numbers = mainArray;
let hhh = findMax(numbers);
console.log(hhh);

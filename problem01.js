function totalOfEven(str) {
  let total = 0;
  for (let s of str) {
    if (s % 2 === 0) {
      total += s;
    }
  }
  console.log(total);
  return total;
}
let str = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
totalOfEven(str);

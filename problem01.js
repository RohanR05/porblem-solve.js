function sumOfOdd(str) {
  let totalOfEven = 0;
  let totalOfOdd = 0;
  for (let s of str) {
    if (s % 2 === 1) {
      totalOfOdd += s;
    } else {
      totalOfEven += s;
    }
  }
  console.log("total of odd num -", totalOfOdd);
  console.log("total of Even num -", totalOfEven);
  return { totalOfEven, totalOfEven };
}
str = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
sumOfOdd(str);

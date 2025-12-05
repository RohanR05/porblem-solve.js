function totalOfOddandEven(str) {
  let totalOfOdd = 0;
  let totalOfEven = 0;
  for (let s of str) {
    if (s % 2 === 0) {
      totalOfEven = s + totalOfEven;
    } else {
      totalOfOdd = s + totalOfOdd;
    }
  }
  console.log("Total Of Odd", totalOfOdd);
  console.log("Total of even", totalOfEven);
  return { totalOfEven, totalOfOdd };
}
str = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
totalOfOddandEven(str);

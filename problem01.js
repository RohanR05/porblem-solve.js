function evenTotal(message, arr) {
  let total = 0;
  for (let s of arr) {
    if (s % 2 === 0) {
      total += s;
    }
  }
  console.log(message, total);
  return total;
}

let str = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
evenTotal("Total of even numbers =", str);

function duplicateFunction(str) {
  let singleArray = [];
  for (let s of str) {
    if (!singleArray.includes(s)) {
      singleArray.push(s);
    }
  }
  singleArray.sort((a, b) => a - b);
  console.log(singleArray);
  return singleArray;
}
str = [1, 2, 3, 4, 5, 5, 6, 6, 6, 6, 3, 2, -7];
duplicateFunction(str);

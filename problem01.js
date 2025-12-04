function duplicateFunction(str) {
  let singleArray = [];
  for (let s of str) {
    let num = str[s];
    if (!singleArray.includes(num)) {
      singleArray.push(num);
    }
  }
  console.log(singleArray);
  return singleArray;
}
str = [1, 2, 3, 4, 5, 5, 6, 6, 6, 6, 3, 2, 7, 5];
duplicateFunction(str);

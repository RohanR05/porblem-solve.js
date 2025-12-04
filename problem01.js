function revFunction(arr) {
  let largeNum = arr[0];
  for (let a of arr) {
    if (arr[a] > largeNum) {
      largeNum = arr[a];
    }
  }
  console.log(largeNum);
}
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
revFunction(arr);

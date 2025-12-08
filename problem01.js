let mainArray = [1, 2, 3, 4, 5, 5, 5, 5, 5, -10];
let singleArray = [];

function RemoveDuplicate(str) {
  for (let s of str) {
    if (!singleArray.includes(s)) {
      singleArray.push(s);
    }
  }
  singleArray.sort((a, b) => a - b);
  console.log(singleArray);
}

str = mainArray;
RemoveDuplicate(str);

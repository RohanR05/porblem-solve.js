let mainArray = [1, 2, 3, 4, 5, 5, 5, 5, 5, 5];
let singleArray = [];

function RemoveDuplicate(str) {
  for (let s of str) {
    let num = mainArray[s];
    if (!singleArray.includes(num)) {
      singleArray.push(num);
    }
  }

  console.log(singleArray);
}

str = mainArray;
RemoveDuplicate(str);

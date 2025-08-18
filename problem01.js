// problem 01 -reverse//
function reverseString(reverseWord) {
  return reverseWord.split("").reverse().join("");
}
console.log(reverseString("ok i am not good"));


// problem 02 - vowels //
function countVowels(req) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let singleVowels of req) {
    if (vowels.includes(singleVowels)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("rohan")); 


// problem 03 - palindrome//

function isPalindrome(word) {
  const reversed = word.split("").reverse().join("");
  return word === reversed;
}

console.log(isPalindrome("")); 

// problem 4 - big number//
function findMaxNum(arrayOfNum) {
  let max = arrayOfNum[0]; 
  for (let num of arrayOfNum) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

console.log(findMaxNum([5, 1, 9, 3]));


// problem 5 -duplicate//
function removeDuplicatesNum(arr) {
  let unique = [];
  for (let num of arr) {
    if (!unique.includes(num)) {
      unique.push(num);
    }
  }
  return unique;
}

console.log(removeDuplicatesNum([1, 2, 2, 3, 4, 4]));

// problem 6 -sum//
function sumArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 9]));

// problem 7 even//

function findEvenNumbers(arr) {
  let evens = [];
  for (let num of arr) {
    if (num % 2 === 0) {
      evens.push(num);
    }
  }
  return evens;
}

console.log(findEvenNumbers([1, 2, 3, 4, 5, 6])); 

// problem 8 capitalized/
function capitalizeWords(singleWord) {
  return singleWord
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeWords("hello world")); 

// problem 9 factorial //
function factorial(n) {
  if (n < 0) return "Invalid input";
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Example usage
console.log(factorial(7));


// problem 10 pignpong//
function pingPong() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("PingPong");
    } else if (i % 3 === 0) {
      console.log("Ping");
    } else if (i % 5 === 0) {
      console.log("Pong");
    } else {
      console.log(i);
    }
  }
}

// Run the function
pingPong();

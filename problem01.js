// // problem 01 -reverse//
// function reverseString(reverseWord) {
//   return reverseWord.split("").reverse().join("");
// }
// console.log(reverseString("ok i am not good"));

// // problem 02 - vowels //
// function countVowels(req) {
//   const vowels = "aeiouAEIOU";
//   let count = 0;

//   for (let singleVowels of req) {
//     if (vowels.includes(singleVowels)) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countVowels("rohan"));

// // problem 03 - palindrome//

// function isPalindrome(word) {
//   const reversed = word.split("").reverse().join("");
//   return word === reversed;
// }

// console.log(isPalindrome("hihi"));

// // problem 4 - big number//

// function findMaxNum(arrayOfNum) {
//   let max = arrayOfNum[0];
//   for (let num of arrayOfNum) {
//     if (num > max) {
//       max = num;
//     }
//   }
//   return max;
// }
// console.log(findMaxNum([2, , 1, 234, 35, 446, 5]));

// // problem 5 -duplicate//
// function removeDuplicatesNum(arr){
//   let unique= []
//   for(let num of arr){
//     if(!unique.includes(num)){
//       unique.push(num)
//     }
//   }
//   return unique
// }
// console.log(removeDuplicatesNum([2,2,2,3,4]))

// // problem 6 -sum//
// function sumArray(arr){
//   let sum = 0
//   for(let num of arr){
//     sum += num
//   }
//   return sum
// }
// console.log(sumArray([3,4,0,9,11]))

// // problem 7 even//
// function findEvenNumbers(arr){
//   let evens=[]
//   for(let num of arr){
//     if(num %2 === 0 ){
//       evens.push(num)
//     }
//   }
//   return evens
// }
// console.log(findEvenNumbers([1,2,3,4,45,]))

// // problem 8 capitalized/
// function capitalizeWords(singleWord) {
//   return singleWord
//     .split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
// }

// console.log(capitalizeWords("hello world"));

// // problem 9 factorial //
// function factorial(n) {
//   if (n < 1) return "Invalid input";
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }

// // Example usage
// console.log(factorial(1 ));

// // problem 10 pignpong//
// function pingPong() {
//   for (let i = 1; i <= 20; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("PingPong");
//     } else if (i % 3 === 0) {
//       console.log("Ping");
//     } else if (i % 5 === 0) {
//       console.log("Pong");
//     } else {
//       console.log(i);
//     }
//   }
// }

// // Run the function
// pingPong();

// const isPass = false;

// if (isPass) {
//   console.log("leader asche");
// } else {
//   console.log("ashche na");
// }

// const data = [2, 3, 4, 5, 6, 7, 8];
// data[4] = 0
// const find = data.includes(6)
// console.log(find)

// let sum = 0;
// while (sum <= 10) {
//   console.log(sum);
//   sum++;
// }

// for (i = 10; i >= 0; i--) {
//   console.log(i);
// }
// console.log(i);

// for(let i =0; i>=-10; i--){
//   console.log(i)
// }

// for (let i = 1; i <= 30; i++) {
//   if (i % i === 0) {
//     console.log(i);
//   }
// }

// let total = 0;
// for (let i = 2; i <= 9; i++) {
//   let isPrime = true;
//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     console.log(i);
//     total = total + i;
//   }
// }
// console.log(total);

// let i = 0;
// while (i < 20) {
//   i++;
//   if (i % 5 !== 0) {
//     continue;
//   }
//   console.log(i)
// }

// let total = 0;
// for (i = 1; i <= 20; i++) {
//   if (i % 5 === 0) {
//     console.log(i)
//     total = total + i;
//   }
// }
// console.log(total);

// let i = 0;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }

let total = 0;
for (i = 3; i <= 100; i++) {
  if (i % 2 === 0) {
    total = total + i;
    if (total >= 30) {
      break
    }
  }
}
console.log(total);

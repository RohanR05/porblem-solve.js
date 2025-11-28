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

// let total = 0;
// for (i = 3; i <= 100; i++) {
//   if (i % 2 === 0) {
//     total = total + i;
//     if (total >= 30) {
//       break
//     }
//   }
// }
// console.log(total);

// for (i = 0; i >= -10; i--) {
//   console.log(i);
// }

// for (i = 1; i <= 20; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("pingpong", i);
//   } else if (i % 3 === 0) {
//     console.log("ping", i);
//   }
//   else if (i % 5 === 0) {
//     console.log("pong", i);
//   } else {
//     console.log(i);
//   }
// }

// function namearr(reverseName) {
//   return reverseName.split("").reverse().join("");
// }
// console.log(namearr("RohanKabir"));

// let total = 0;
// for (i = 1; i <= 20; i++) {
//   if (i % 2 === 1) {
//     total = total + i;
//     console.log(total);
//     if (total >= 50) {
//       break;
//     }
//   }
// }
// console.log(total);

// function namearr(reverseName) {
//   return reverseName.split("").reverse().join("");
// }
// console.log(namearr("RohanKabir"));

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// let sum = 0;
// for (let i = 0; i <= 10; i++) {
//   if (i % 2 === 1) {
//     console.log(i);
//     sum = sum + i;
//   }
// }
// console.log(sum);

// let arrs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// let rarrs = [];
// for (i = 0; i < arrs.length; i++) {
//   const num = arrs[i];
//   rarrs.unshift(num);
// }
// console.log(rarrs);

// function namee(namerr) {
//   return namerr.split("").reverse().join("");
// }
// console.log(namee("Rohan Kabir"));

// let firstArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// let halfarray = firstArray.slice(3, 6);
// console.log(halfarray);

// let even = [];
// for (i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     even.push(i);
//   }
// }
// console.log(even)

// let arrayOfNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// let arrayOfEven = [];
// let arrayOfOdd = [];
// let newArray = [];
// let newReverseArray = [];

// for (i = 0; i < arrayOfNum.length; i++) {
//   let num = arrayOfNum[i];

//   if (num % 2 === 0) {
//     arrayOfEven.push(num);
//   } else {
//     arrayOfOdd.push(num);
//   }
// }

// newArray = [...arrayOfEven, ...arrayOfOdd];

// for (let j = 0; j < newArray.length; j++) {
//   newReverseArray.push(j);
// }

// console.log(arrayOfEven);
// console.log(arrayOfOdd);
// console.log(newArray);
// console.log(newReverseArray);

// for (let i = 1; i <= 20; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i, "- ping pong");
//   } else if (i % 5 === 0) {
//     console.log(i, "- pong");
//   } else if (i % 3 === 0) {
//     console.log(i, "- ping");
//   } else {
//     console.log(i);
//   }
// }

// let mainArray = [1, 2, 3, 3, 4, 4, 4, 4];
// let arraySingle = [];

// for (let i = 0; i < mainArray.length; i++) {
//   let num = mainArray[i];
//   if (!arraySingle.includes(num)) {
//     arraySingle.push(num);
//   }
// }

// console.log(arraySingle);

// let mainArray = [11, 2, 3, 4, 5, 6];
// let largeNum = mainArray[0];

// for (let i = 0; i < mainArray.length; i++) {
//   if (mainArray[i] > largeNum) {
//     largeNum = mainArray[i];
//   }
// }
// console.log(largeNum);

// let mainArray = [1, 2, 3, 4, 4, 5, 5];
// let simpleArray = [];

// for (i = 0; i < mainArray.length; i++) {
//   let num = mainArray[i];
//   if (!simpleArray.includes(num)) {
//     simpleArray.unshift(num);
//   }
// }
// console.log(simpleArray);

// let mainArray = [1, "3", 8, 2, 3, 4, 5, 6, 1, 1, -1];
// let arr = mainArray.map(Number);
// let singleArray = [];

// for (i = 0; i < arr.length; i++) {
//   let num = arr[i];
//   if (!singleArray.includes(num)) {
//     singleArray.push(num);
//   }
// }
// singleArray.sort((b, a) => a - b);

// console.log(singleArray);

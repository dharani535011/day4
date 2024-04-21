// Anonymous Function & IIFE:
// a. Print odd numbers in an array:
// Using Anonymous Function & IIFE
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const oddNumbers = numbers.filter(num => num % 2 !== 0);
    console.log(oddNumbers);
  })();
  
  // Output: [1, 3, 5, 7, 9]

//   b. Convert all the strings to title caps in a string array:  
// Using Anonymous Function & IIFE
(() => {
    const strings = ["hello", "world", "javascript"];
    const titleCapsStrings = strings.map(str => str.charAt(0).toUpperCase() + str.slice(1));
    console.log(titleCapsStrings);
  })();
  
  // Output: ["Hello", "World", "Javascript"]

//   c. Sum of all numbers in an array:
// Using Anonymous Function & IIFE
(() => {
    const numbers = [1, 2, 3, 4, 5];
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    console.log(sum);
  })();
  
  // Output: 15

//   d. Return all the prime numbers in an array:

// Using Anonymous Function & IIFE
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const isPrime = num => {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return num > 1;
    };
    const primeNumbers = numbers.filter(isPrime);
    console.log(primeNumbers);
  })();
  
  // Output: [2, 3, 5, 7]
  
//   e. Return all the palindromes in an array:

// Using Anonymous Function & IIFE
(() => {
    const words = ["level", "hello", "radar", "world", "madam"];
    const isPalindrome = word => word === word.split('').reverse().join('');
    const palindromes = words.filter(isPalindrome);
    console.log(palindromes);
  })();
  
  // Output: ["level", "radar", "madam"]

//   f. Return median of two sorted arrays of the same size:

// Using Anonymous Function & IIFE
(() => {
    const arr1 = [1, 3, 5];
    const arr2 = [2, 4, 6];
    const merged = [...arr1, ...arr2].sort((a, b) => a - b);
    const len = merged.length;
    const median = len % 2 === 0 ? (merged[len / 2 - 1] + merged[len / 2]) / 2 : merged[Math.floor(len / 2)];
    console.log(median);
  })();
  
  // Output: 3.5

//   g. Remove duplicates from an array:

// Using Anonymous Function & IIFE
(() => {
    const numbers = [1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 9];
    const uniqueNumbers = [...new Set(numbers)];
    console.log(uniqueNumbers);
  })();
  
  // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

//   h. Rotate an array by k times:

// Using Anonymous Function & IIFE
(() => {
    const array = [1, 2, 3, 4, 5];
    const rotate = (arr, k) => [...arr.slice(k), ...arr.slice(0, k)];
    console.log(rotate(array, 2)); // Rotate array by 2 times
  })();
  
  // Output: [3, 4, 5, 1, 2]
  
//   Arrow Functions:
// a. Print odd numbers in an array:

// Using Arrow Functions
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = number.filter(num => num % 2 !== 0);
console.log(oddNumbers);

// Output: [1, 3, 5, 7, 9]

// b. Convert all the strings to title caps in a string array:

// Using Arrow Functions
const strings = ["hello", "world", "javascript"];
const titleCapsStrings = strings.map(str => str.charAt(0).toUpperCase() + str.slice(1));
console.log(titleCapsStrings);

// Output: ["Hello", "World", "Javascript"]

// c. Sum of all numbers in an array:

// Using Arrow Functions
const numb = [1, 2, 3, 4, 5];
const sum = numb.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

// Output: 15


// d. Return all the prime numbers in an array:

// Using Arrow Functions
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const isPrime = num => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};
const primeNumbers = numbers.filter(isPrime);
console.log(primeNumbers);

// Output: [2, 3, 5, 7]

// e. Return all the palindromes in an array:

// Using Arrow Functions
const words = ["level", "hello", "radar", "world", "madam"];
const isPalindrome = word => word === word.split('').reverse().join('');
const palindromes = words.filter(isPalindrome);
console.log(palindromes);

// Output: ["level", "radar", "madam"]

// 1. Write a function that accepts an array of numbers and returns only the even numbers.
function getEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));

// 2. Create a program to count the occurrences of a specific value in an array.
function countOcc(arr, value) {
    return arr.reduce((count, current) => (current === value ? count + 1 : count), 0);
}
console.log(countOcc([1, 2, 3, 2, 4, 2], 2));

// 3. Write a function that accepts a string and returns whether it’s a palindrome.
function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome("12321"));
console.log(isPalindrome("racecar"));

// 4. Create a program to log a pattern:
function printPattern() {
    for (let i = 1; i <= 4; i++) {
        if (i % 2 !== 0) {
            console.log("*");
        } else {
            console.log("**");
        }
    }
}
printPattern();

// 5. Write a function that returns the square of each number in an array.
function squareArray(arr) {
    return arr.map(num => num * num);
}
console.log(squareArray([1, 2, 3, 4, 5]));

// 6. Use a for loop to sum all odd numbers between 1 and 50.
function sumOddNumbers() {
    let sum = 0;
    for (let i = 1; i <= 50; i += 2) {
        sum += i;
    }
    console.log(sum);
}
sumOddNumbers();

// 7. Create an object representing a person and log their full name.
const person = {
    firstName: "Shobhit",
    lastName: "Shrivastava"
}
let fullName = `${person.firstName} ${person.lastName}`;
console.log(fullName);

// 8. Write a program to convert the string "10" to a number and add 5 to it.
let str = "10";
let num = Number(str);
console.log(num + 5);

// 9. Write a program to reverse an array without using.reverse().
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}
console.log(reverseArray([1, 2, 3, 4, 5]));

// 10. Create a program to check if an array is empty.
function isArrayEmpty(arr) {
    if (arr.length === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isArrayEmpty([]));
console.log(isArrayEmpty([1, 2, 3]));


// 11. Write a program to fetch the current date and format it as DD / MM / YYYY.
function fetchDate() {
    let date = new Date();
    let day = String(date.getDate());
    let month = String(date.getMonth() + 1);
    let year = date.getFullYear();
    if (day.length < 2) day = '0' + day;
    if (month.length < 2) month = '0' + month;
    return `${day} / ${month} / ${year}`;
}
console.log(fetchDate());

// 12. Write a program to find the smallest number in an array.
function findSmallest(arr) {
    if (arr.length === 0) return null;
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}
console.log(findSmallest([5, 3, 8, 2, 4]));

// 13. Create a function to return the Fibonacci sequence up to n terms.
function fibonacci(n) {
    let fib = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            fib.push(0);
        } else if (i === 1) {
            fib.push(1);
        } else {
            fib.push(fib[i - 1] + fib[i - 2]);
        }
    }
    return fib;
}
console.log(fibonacci(5));

// 14. Use a try...catch block to handle division by zero.
function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    } catch (error) {
        return error.message;
    }
}
console.log(divide(10, 2));
console.log(divide(10, 0));

// 15. Write a program to find the index of the first vowel in a string.
function firstVowel(str) {
    const vowels = 'aeiouAEIOU';
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            return i;
        }
    }
    return -1;
}
console.log(firstVowel("Python"));

// 16. Create a function that accepts an array and returns only unique values.
function getUniqueValues(arr) {
    return [...new Set(arr)];
}
console.log(getUniqueValues([1, 2, 2, 3, 4, 4, 4, 5]));

// 17. Write a program to merge two sorted arrays into one sorted array.
function mergeSortedArrays(arr1, arr2) {
    // return [...arr1, ...arr2].sort((a, b) => a - b);

    // return arr1.concat(arr2).sort((a, b) => a - b);

    let merged = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }
    return merged;
}
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));

// 18. Create a function to count the number of words in a string.
function countWords(str) {
    return str.trim().split(/\s+/).length;
}
console.log(countWords("Hello world! I am Shobhit."));

// 19. Write a program to toggle a button’s background color when clicked.
// let button = document.getElementById("myButton");
// button.addEventListener("click", function () {
//     if (this.style.backgroundColor === "blue") {
//         this.style.backgroundColor = "green";
//     } else {
//         this.style.backgroundColor = "blue";
//     }
// });

// 20. Write a function to check if all elements in an array are greater than a specific value.
function allGreaterThan(arr, value) {
    return arr.every(num => num > value);
}
console.log(allGreaterThan([5, 6, 7, 8], 3));
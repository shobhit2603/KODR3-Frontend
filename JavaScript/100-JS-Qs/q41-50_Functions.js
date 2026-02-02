// Write a function to check if a number is even or odd.
function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(isEvenOrOdd(4));
console.log(isEvenOrOdd(5));

// Create a function to calculate the area of a circle with a given radius.
function areaOfCircle(r) {
    return 3.14 * r * r;
}

console.log(areaOfCircle(3));

// Write a function that accepts an array and returns the sum of its elements.
function sumOfArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}
console.log(sumOfArray([1, 2, 3, 4, 5]));


// Create a function that checks if a string starts with a specific character.
function checkStart(str, char) {
    return str.startsWith(char);
}
console.log(checkStart("Hello", "H"));

// Write a function to find the maximum of two numbers.
function maxOfTwo(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
console.log(maxOfTwo(10, 20));

// Create a function that takes a number and returns its factorial.
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));



// Write a function that accepts a string and returns its reverse.
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("Hello"));

// Create a function to find the largest number in an array.
let arr = [3, 5, 6, 2, 8, 1];

function largestNumber(array) {
    let largest = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i];
        }
    }
    return largest;
}
console.log(largestNumber(arr));

// Write a function that converts a string to kebab -case (e.g., "Hello World" → "hello-world").
function toKebabCase(str) {
    return str.toLowerCase().replace(/\s+/g, '-');
}
console.log(toKebabCase("Hello World"));

// Create a function that logs "Hello, World!" every time it is called.
function greet() {
    console.log("Hello, World!");
}
greet();
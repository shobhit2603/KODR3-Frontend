// Write a for loop to print numbers from 1 to 50.
for (let i = 1; i <= 50; i++) {
    console.log(i);
}

// Use a while loop to sum the numbers from 1 to 10.
let sum = 0;
let j = 1;
while (j <= 10) {
    sum += j;
    j++;
}
console.log(sum);

// Create a for...of loop to log each character of the string "JavaScript".
let str = "JavaScript";
for (let char of str) {
    console.log(char);
}

// Write a for loop that skips even numbers between 1 and 20.
for (let k = 1; k <= 20; k++) {
    if (k % 2 === 0) continue;
    console.log(k);
}

// Use a do...while loop to log numbers from 5 to 1.
let num = 5;
do {
    console.log(num);
    num--;
} while (num >= 1);

// Create a for loop that calculates the factorial of 5.
let factorial = 1;
for (let l = 1; l <= 5; l++) {
    factorial *= l;
}
console.log(factorial);

// Write a nested loop to print a 3x3 grid of numbers.
for (let i = 1; i <= 3; i++) {
    let row = "";
    for (let j = 1; j <= 3; j++) {
        row += j + " ";
    }
    console.log(row);
}

// Use a for loop to reverse an array[1, 2, 3, 4].
let arr = [1, 2, 3, 4, 5];
let reversed = [];

for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
}

console.log(reversed);

// Write a while loop that logs numbers from 1 to 100 divisible by 5.
let p = 1;
while (p <= 100) {
    if (p % 5 === 0) {
        console.log(p);
    }
    p++;
}

// Use a for...in loop to iterate over an object and log its keys.
let obj = {
    name: "Shobhit",
    age: 23,
    city: "Bhopal"
};

for (let key in obj) {
    console.log(key);
}
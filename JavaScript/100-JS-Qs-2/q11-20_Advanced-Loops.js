// 1. Write a nested loop to generate a multiplication table(1 to 10).
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 2. Use a for...in loop to iterate through the properties of an object.
let obj = {
    name: "Shobhit",
    age: 23
}
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

// 3. Write a program to calculate the sum of all even numbers between 1 and 100 using a for loop.
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

// 4. Use a for...of loop to iterate over a string and count the vowels.
let str = "JavaScript";
let vowels = "aeiouAEIOU";
let count = 0;
for (let char of str) {
    if (vowels.includes(char)) {
        count++;
    }
}
console.log(count);

// 5. Create a loop that breaks out when a specific condition is met(e.g., number divisible by 7).
for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        console.log(i);
        break;
    }
}

// 6. Write a loop that skips numbers divisible by 3 but logs all others up to 20.
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}

// 7. Use a do...while loop to prompt the user until they enter a positive number.
// let number;
// do {
//     number = prompt("Enter a positive number:");
// } while (number <= 0);

// console.log("This is valid:", number);

// 8. Write a nested loop to generate a pyramid pattern:
// *
// **
// ***
// ****
for (let i = 1; i <= 4; i++) {
    console.log("*".repeat(i));
}

// 9. Use a loop to reverse a string "JavaScript".
let string = "JavaScript";
let reversed = "";
function reverseString() {
    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i];
    }
    console.log(reversed);
}
reverseString();

// 10. Write a program to calculate the product of all numbers in an array using a loop.
let arr = [1, 2, 3, 4, 5];
let product = 1;
for (let num of arr) {
    product *= num;
}
console.log(product);
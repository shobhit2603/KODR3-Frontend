// 1. Write a program to check if a number is positive, negative, or zero.
let num = -5;
if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// 2. Create a program to check if a year is a leap year.
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}

// 3. Write an if...else statement to determine if a person can vote based on their age.
let age = 19;
if (age > 18) {
    console.log("You can vote.");
} else {
    console.log("You cannot vote.");
}

// 4. Use a switch statement to log the name of the day based on its number(1 = Monday).
let day = 2;
switch (day) {
    case 1: console.log("Monday");
        break;
    case 2: console.log("Tuesday");
        break;
    case 3: console.log("Wednesday");
        break;
    case 4: console.log("Thursday");
        break;
    case 5: console.log("Friday");
        break;
    case 6: console.log("Saturday");
        break;
    case 7: console.log("Sunday");
        break;
    default: "Invalid Day"
}

// 5. Write a program to check if a number is divisible by 3 and 5.
let n = 15;
if (n % 3 === 0 && n % 5 === 0) {
    console.log(n + " is divisible by 3 and 5.");
} else {
    console.log(n + " is not divisible by 3 and 5.");
}

// 6. Create a program to check the grade of a student based on marks.
let marks = 65;
if (marks >= 90) {
    console.log("Grade A: Pass");
} else if (marks >= 80) {
    console.log("Grade B: Pass");
} else if (marks >= 70) {
    console.log("Grade C: Pass");
} else if (marks >= 60) {
    console.log("Grade D: Pass");
} else {
    console.log("Grade F: Fail");
}

// 7. Write an if condition to compare two strings and log if they are equal.
let str1 = "Hello";
let str2 = "Hello";
if (str1 === str2) {
    console.log("The strings are equal.");
} else {
    console.log("The strings are not equal.");
}

// 8. Use a ternary operator to check if a number is even or odd.
let a = 11;
let result = a % 2 === 0 ? "Even" : "Odd";
console.log(a + " is " + result);

// 9. Write a program to find the largest of three numbers using if...else.
let num1 = 10;
let num2 = 20;
let num3 = 30;
if (num1 >= num2 && num1 >= num3) {
    console.log(num1 + " is the largest number.");
} else if (num2 >= num1 && num2 >= num3) {
    console.log(num2 + " is the largest number.");
} else {
    console.log(num3 + " is the largest number.");
}

// 10. Create a program to calculate the discount based on the price of an item.
let price = 50;
let discount;
if (price >= 100) {
    discount = 0.1;
} else if (price >= 50) {
    discount = 0.05;
} else {
    discount = 0;
}
let discountedPrice = price - (price * discount);
console.log("Discounted Price:", discountedPrice);
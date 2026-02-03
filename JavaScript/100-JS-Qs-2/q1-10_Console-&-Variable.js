// 1. Create a program that calculates and logs the result of (5 + 3) * 2 - 8 / 4.
let result = (5 + 3) * 2 - 8 / 4;
console.log(result);

// 2. Log the value of a variable before and after incrementing it using ++.
let variable = 5;
console.log(variable);
console.log(++variable);

// 3. Write a program that swaps the values of two variables without using a third variable.
let var1 = 5;
let var2 = 10;
[var1, var2] = [var2, var1];
console.log(var1, var2);

// 4. Create a variable with a template literal that includes your name and age.
let name = "Shobhit";
let age = 23;
console.log(`My name is ${name} and I am ${age} years old.`);

// 5. Use console.table() to display the following object: { name: "John", age: 30, city: "New York" }.
let person = {
    name: "John",
    age: 30,
    city: "Ney York"
}
console.table(person);

// 6. Create a program that uses console.group() to group related logs.
console.group("Group 1");
console.log("Hello World!");
console.log("I am Shobhit");

// 7. Use console.time() and console.timeEnd() to measure the execution time of a simple loop.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.time("Loop");
console.timeEnd("Loop");

// 8. Log a variable’s value dynamically by including it in a string: "The value is: <value>".
let value = 5;
console.log(`The value is: ${value}`);

// 9. Use console.trace() to debug a function call stack.
function func1() {
    func2();
}

function func2() {
    console.trace();
}

func1();

// 10. Create and log an object dynamically using computed property names.
let key = "name";
let person1 = {
    [key]: "Shobhit"
}
console.log(person1);
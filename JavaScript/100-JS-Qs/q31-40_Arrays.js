// Create an array of your top 5 favorite movies and log it.
let favMovies = ["Gran Tourismo", "Interstellar", "F1", "Godfather", "Inception"];
console.log(favMovies);

// Find and log the second element of an array.
console.log(favMovies[1]);

// Add two new elements to the start of an array using.unshift().
favMovies.unshift("The Matrix", "Avengers");
console.log(favMovies);

// Remove the last element of an array and log the updated array.
favMovies.pop();
console.log(favMovies);

// Use.slice() to extract the first three elements of an array.
let firstThree = favMovies.slice(0, 3);
console.log(firstThree);

// Find the index of a specific element in an array using.indexOf().
console.log(favMovies.indexOf("F1"));

// Check if a value exists in an array using.includes().
console.log(favMovies.includes("Transformers"));

// Combine two arrays[1, 2] and[3, 4] using.concat().
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = arr1.concat(arr2);
console.log(combined);

// Sort an array of numbers[5, 2, 9, 1] in ascending order.
let numbers = [5, 2, 9, 1];
numbers.sort((a, b) => a - b);
console.log(numbers);

// Write a program that creates a copy of an array without mutating the original.
let copy = favMovies.slice();
console.log(copy);
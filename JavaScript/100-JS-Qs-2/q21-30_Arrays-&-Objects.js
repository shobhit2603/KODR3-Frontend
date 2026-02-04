// 1. Write a program to merge two arrays and remove duplicate values.
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];
let merged = arr1.concat(arr2);
let unique = [];
    for (let i = 0; i < merged.length; i++) {
        if (!unique.includes(merged[i])) {
            unique.push(merged[i]);
        }
    }
console.log(unique);

// 2. Create a program to find the second largest number in an array.
// 3. Write a function that removes all falsy values from an array.
// 4. Use.reduce() to find the total sum of numbers in an array.
// 5. Write a program that rotates an array to the left by n positions.
// 6. Use.find() to locate the first even number in an array.
// 7. Create a function that flattens a nested array(e.g., [1, [2, [3]]] →[1, 2, 3]).
// 8. Write a program that counts how many times each element appears in an array.
// 9. Use.some() and.every() to check conditions on an array.
// 10. Sort an array of objects by a specific property.
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
let arr = [5, 2, 9, 1, 7];
arr.sort((a, b) => b - a);
console.log(arr[1]);

// 3. Write a function that removes all falsy values from an array.
let array = [0, 1, false, 2, '', 3];
let filtered = array.filter(Boolean);
console.log(filtered);

// 4. Use.reduce() to find the total sum of numbers in an array.
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);

// 5. Write a program that rotates an array to the left by n positions.
let nums = [1, 2, 3, 4, 5];
let n = 3;
for (let i = 0; i < n; i++) {
    let temp = nums.shift();
    nums.push(temp);
}
console.log(nums);

// 6. Use.find() to locate the first even number in an array.
let nums2 = [1, 2, 3, 4, 5];
let firstEven = nums2.find(num => num % 2 == 0);
console.log(firstEven);

// 7. Create a function that flattens a nested array(e.g., [1, [2, [3]]] →[1, 2, 3]).
let nested = [1, [2, [3]]];
let flattened = nested.flat(Infinity);
console.log(flattened);

// 8. Write a program that counts how many times each element appears in an array.
let arr3 = [1, 2, 3, 4, 5, 1, 2, 3];
let count = {};
for (let i = 0; i < arr3.length; i++) {
    if (count[arr3[i]]) {
        count[arr3[i]]++;
    } else {
        count[arr3[i]] = 1;
    }
}
console.log(count);


// 9. Use.some() and.every() to check conditions on an array.
// 10. Sort an array of objects by a specific property.
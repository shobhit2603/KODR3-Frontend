// 1. Create an object with properties name, age, and city.Log the object.
let user = {
    name: "Shobhit",
    age: 22,
    city: "Bhopal"
};
console.log(user);

// 2. Add a new property isStudent to the object above and set it to true.
user.isStudent = true;
console.log(user);

// 3. Access and log the value of the city property using bracket notation.
console.log(user["city"]);

// 4. Delete the age property from an object and log the updated object.
delete user.age;
console.log(user);

// 5. Write a function that accepts an object and logs all its keys.
function printKeys(obj) {
    for (let key in obj) {
        console.log(key);
    }
}
printKeys(user);

// 6. Create an array of objects representing books with title and author properties.
let books = [
    { title: "Book1", author: "AUTHOR1" },
    { title: "Book2", author: "AUTHOR2" },
    { title: "Book3", author: "AUTHOR1" }
]
console.log(books);

// 7. Access and log the author of the second book in the array.
console.log(books[1].author);

// 8. Write a program to check if a specific key exists in an object.
function hasKey(obj, key) {
    return key in obj;
}
console.log(hasKey(user, "gender"));

// 9. Create a function to count the number of keys in an object.
function countKeys(obj) {
    let count = 0;
    for (let key in obj) {
        count++;
    }
    return count;
}
console.log(countKeys(user));

// 10. Use Object.assign() to merge two objects.
let object1 = { a: 1, b: 2 };
let object2 = { c: 3, d: 4 };
let mergedObject = Object.assign({}, object1, object2);
console.log(mergedObject);
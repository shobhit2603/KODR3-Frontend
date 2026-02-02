// 1. Create a string and log its length.
let str = "Hello World";
console.log(str.length);

// 2. Extract the last 4 characters of a string.
console.log(str.slice(-4));

// 3. Convert a string to lowercase and log it.
console.log(str.toLowerCase());

// 4. Split a sentence into words using.split() and log the result.
let sentence = "This is a sentence";
console.log(sentence.split(" "));

// 5. Find the position of the first occurrence of "a" in a string.
let string = "JavaScript is a programming language";
console.log(string.indexOf("a"));

// 6. Replace "JavaScript" with "JS" in the string "I love JavaScript".
let str2 = "I love JavaScript";
console.log(str2.replace("JavaScript", "JS"));

// 7. Repeat a string 3 times using.repeat().
let repeatStr = "Hi! ";
console.log(repeatStr.repeat(3));

// 8. Create a function that checks if a string contains a specific word.
function checkWord(str, word) {
    return str.includes(word);
}
console.log(checkWord("Hello world", "world"));

// 9. Write a program to remove whitespace from both ends of a string.
let str3 = "   SHOBHIT   ";
console.log(str3.trim());

// 10. Create a function to count the number of vowels in a string.
function countVowels(str) { 
    let count = 0;
    let vowels = "aeiouAEIOU";
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Hello World"));
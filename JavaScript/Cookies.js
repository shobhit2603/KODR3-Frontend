// COOKIES
document.cookie = 'name=Shobhit; age=23; path=/'
document.cookie = 'theme=dark;'
console.log(document.cookie);

// LOCAL STORAGE
localStorage.setItem("name", "Shobhit");
localStorage.setItem("age", "23");

console.log(localStorage.getItem("name"));
console.log(localStorage.getItem("age"));
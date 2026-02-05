function outerFun(name) {
    return function innerFun() {
        console.log(name);
    }
}

const innerFun = outerFun("Anshu");
innerFun();

// Memoisation 
function memoization() {
    const cache = {};

    return function (n) {
        if (n in cache) {
            console.log('Fetching from cache...');
            return cache[n];
        }
        console.log('Calculating...');
        const result = n * n;
        cache[n] = result;
        return result;
    };
}

const square = memoization();
// console.log(square(5));
// console.log(square(5));
// console.log(square(6));
// console.log(square(6));

// Another Example
function fun1() {
    const a = 10;
    function fun2() {
        const b = 22;
        function fun3() {
            console.log(a + b);
            // console.log(this);
        }
        fun3();
    }
    fun2();
}
fun1();
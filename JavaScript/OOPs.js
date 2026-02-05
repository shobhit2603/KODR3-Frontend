// Student class to create a New Student
class student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    canVote() {
        return this.age > 18 ? true : false;
    }
}

let student1 = new student("shobhit", 13);
console.log(student1.canVote());

// Box and Square class to calculate the Area using (extends & super keyword) - INHERITANCE
class Box {
    constructor(name, l, b) {
        this.name = name;
        this.l = l;
        this.b = b;
    }

    area() {
        let area = this.l * this.b;
        return `Box area is ${area}`;
    }
}

class Square extends Box {
    constructor(a) {
        super("Square", a, a);
    }

    area() {
        let area = super.area();
        return `Square area is ${area}`;
    }
}

let box = new Box("Box1", 10, 20);
console.log(box.area());

let square = new Square(5);
console.log(square.area());


// Prototype Inheritance
const obj1 = {
    age: 23
}

const obj2 = Object.create(obj1);
obj2.age = 12
obj2.name = "Shobhit";
const obj3 = Object.create(obj2);
obj3.age = 26;
const obj4 = Object.create(obj3);
obj4.age = 34;
const obj5 = Object.create(obj4);
obj5.age = 45;

console.log(obj5);
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

// Immediate Invoke Function

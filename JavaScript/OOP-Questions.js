// Question 1 - Design Person and Employee
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `Hi, I'm ${this.name} and I am ${this.age} years old`;
    }
}

class Employee extends Person {
    constructor(name, age, jobTitle, salary) {
        super(name, age);
        this.jobTitle = jobTitle;
        this.salary = salary;
    }

    introduce() {
        return `${super.introduce()} and I work as ${this.jobTitle}`;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }
}

let Employee1 = new Employee("Shobhit", "23", "Developer", "100000");
console.log(Employee1);
console.log(Employee1.introduce());
console.log(Employee1.getAnnualSalary());

// Question - n
const techStores = [
    {
        storeName: "Store1",
        items: [
            {
                name: "item1",
                price: 200
            },
            {
                name: "item2",
                price: 300
            }
        ]
    },
    {
        storeName: "Store2",
        items: [
            {
                name: "item3",
                price: 400
            },
            {
                name: "item4",
                price: 500
            }
        ]
    }
]

const getTotalPrice = function () {
    let total = 0;
    this.items.forEach(item => {
        total += item.price;
    });
    console.log(this.storeName,total);
}

techStores.forEach((techStore) => {
    getTotalPrice.call(techStore);
})

// Question - n2
const stores = [
    {
        storeName: "Apple Store",
        items: [
            { name: "iPhone 15", price: 79900 },
            { name: "MacBook Air M2", price: 114900 },
            { name: "AirPods Pro", price: 24900 }
        ]
    },
    {
        storeName: "Samsung Store",
        items: [
            { name: "Galaxy S24", price: 74999 },
            { name: "Galaxy Tab S9", price: 58999 },
            { name: "Galaxy Buds 2", price: 11999 }
        ]
    },
    {
        storeName: "Nike Store",
        items: [
            { name: "Air Jordan 1", price: 12999 },
            { name: "Nike Air Max", price: 9999 },
            { name: "Nike Dri-FIT T-Shirt", price: 2499 }
        ]
    },
    {
        storeName: "Adidas Store",
        items: [
            { name: "Ultraboost Shoes", price: 15999 },
            { name: "Adidas Tracksuit", price: 6999 },
            { name: "Adidas Cap", price: 1999 }
        ]
    },
    {
        storeName: "Amazon Store",
        items: [
            { name: "Echo Dot", price: 4499 },
            { name: "Fire TV Stick", price: 3999 },
            { name: "Kindle Paperwhite", price: 13999 }
        ]
    },
    {
        storeName: "Reliance Digital",
        items: [
            { name: "Sony LED TV", price: 45999 },
            { name: "HP Pavilion Laptop", price: 64999 },
            { name: "Boat Rockerz Headphones", price: 2999 }
        ]
    }
];

const getPriceAndName = function () {
    let sum = 0;
    this.items.forEach(item => {
        sum += item.price;
    });
    console.log(this.storeName, sum);
}

stores.forEach((store) => {
    getPriceAndName.call(store);
});
// Classes
// 1. **Theory**: What is a class in JavaScript?
// A class is a blueprint for creating objects. It defines the properties and methods that the objects created from it will have.

class Amount {
    constructor() {
        this.total = 0;
    }

    lacs(value) {
        this.total += value * 100000;
        return this;
    }

    crore(value) {
        this.total += value * 10000000;
        return this;
    }

    thousand(value) {
        this.total += value * 1000;
        return this;
    }

    value() {
        return this.total;
    }
}

function computeAmount() {
    return new Amount();
}

// Example usage
// const result = computeAmount()
//     .lacs(15)
//     .crore(5)
//     .crore(2)
//     .lacs(20)
//     .thousand(45)
//     .crore(7)
//     .value();

// console.log(result); // Output: 143545000


//<------------------------------------------------------------------->

// Prototype in JavaScript

const employee = {
    calTax() {
        console.log('tax rate is 10%')
    }
}

const Deepak = { // New Employee
    salary: 50000
}

// now we want to calculate the tax on Deepak's salary
// so we need to add the calTax method in Deepak object

Deepak.__proto__ = employee;
Deepak.calTax(); // Output: tax rate is 10%

const Deepak2 = { // New Employee
    salary: 50000,
    calTax() {
        console.log('tax rate is 20%')
    }
}

Deepak2.__proto__ = employee;
// now Deepak2 have already calTax method and we also attach calTax method in Deepak object using __proto__
// so Deepak2 have two calTax methods
// so if we want to calculate tax on Deepak2's salary then it will give the result from the Deepak2's local calTax method not from proto object

Deepak2.calTax(); // Output: tax rate is 20%




//<------------------------------------------------------------------->

//Classes
// Classes is used in js for creating object 
// mainly used when we need to create object iof similar pattern in bulk
// it will provide the template for creating object

// for example toyota is a car making company and there are some features that will be same for all cars so we can create a class for that

class Toyota {
    printlogo() {
        console.log('Toyota');
    }

    testCar() {
        console.log('test car');
    }

    setBrand(brand) {
        this.brandName = brand;
    }

}

// now we will build fortuner car that will follow that structure of toyota compamny

const fortuner = new Toyota();
// fortuner.printSticker(); // Output: Toyota sticker
// fortuner.testCar(); // Output: test car

fortuner.brandName('Fortuner');
console.log(fortuner);// Output: { brandName: 'Fortuner' }

// we don't write any constructor in class as it is already created by js
//because constructor is automatically created by js when we create any object with new keyword

// but we can also create our own constructor in our class

// when any object is created then constructor will be called automatically and it will be executed


class Toyota1 {
    constructor() {
        console.log('constructor called');
    }

    printlogo() {
        console.log('Toyota');
    }
}

const toyota1 = new Toyota1(); // it will print without logging toyota1 -> constructor called


//<------------------------------------------------------------------->

//Inheritance
// Inheritance is passing down properties & methods from parent class to child class.

class Person {
    eat() {
        console.log('eat')
    }

    sleep() {
        console.log('sleep')
    }
}

class Engineer extends Person {
    code() {
        console.log('code')
    }
    repeat() {
        console.log('repeat')
    }
}

const engineer = new Engineer();
engineer.eat(); // Output: eat
engineer.sleep(); // Output: sleep
engineer.code(); // Output: code
engineer.repeat(); // Output: repeat


//<-------------------------------------------------------------------

// Super keyword
// The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.


class Person1 {
    constructor() {
        console.log('person1');
    }

    eat() {
        console.log('eat')
    }
}

class Engineer1 extends Person1 {
    constructor() {
        super(); // used to invoke parent class constructor
        console.log('engineer1');
    }

    code() {
        console.log('write code')
    }

}

const engineer1 = new Engineer1();
// now we have access to both constructors of parent and child class
// we cannot use constructor in child class without super keyword
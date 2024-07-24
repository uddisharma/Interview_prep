// ### Callbacks

// 1. **Theory**: Explain what a callback function is in JavaScript and provide an example.
// Callback function is a function that is passed as an argument to another function.
// for example ->

setTimeout(() => {
    console.log('Hello callback function')
}, 1000)

// 2. **Concept**: What are the advantages and disadvantages of using callbacks?
// callbacks are used to handle async functions in js , 
// advantages->
// they are very easy to use so that we can handle async functions easily

// disadvantages ->
// they are not as performant as promises
// if we have lot of async function that are depending on each other so when we write callback functions inside each other then it will be very difficult to maintain the code , and this is also called as callback hell
// there is an another problem called inversion of control



//<------------------------------------------------------------------->


// ### Promises

// 3. **Theory**: What is a promise in JavaScript, and what are its states?
// promise is a object that represents the eventual completion or failure of an asynchronous operation. promise has 3 states -> pending , fulfilled , rejected . default as pending .
//for example ->

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Success!"), 2000);
})

promise1.then(result => console.log(result)).catch(error => console.log(error))

// 4. **Concept**: How do you handle errors in promises?
// in promises we can handle errors using .catch() block

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("Error!"), 2000);
})

promise2.then(result => console.log(result)).catch(error => console.log(error))



//<------------------------------------------------------------------->



// ### Promise Chaining

// 5. **Output Guess**: What will be the output of the following code?


let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Success!"), 2000);
});

promise
    .then(result => {
        console.log(result); // (A) // Succcess!
        return result + " Again!";
    })
    .then(result => {
        console.log(result); // (B) // Success! Again!
        throw new Error("Something went wrong!");
    })
    .catch(error => {
        console.log(error.message); // (C) // Something went wrong
    })
    .finally(() => {
        console.log("Promise complete"); // (D) // Promise complete
    });




//<------------------------------------------------------------------->



// ### Async/Await

// 6. **Theory**: What is the purpose of `async` and `await` in JavaScript? Provide a brief example.
// `async` and `await` are used to write asynchronous code in JavaScript.
// async keywords denotes that this is an async function and await keyword will wait for to fully execute the code or promise , it may me resolve or reject , we cannot use await keyword without async function.
//for example -> 

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Success!"), 2000);
})

async function asyncFunc() {
    try {
        const result = await promise3;
        console.log(result);
    } catch (error) {
        console.log(error)
    }
}


// 7. **Concept**: What happens if you don't use `await` in an `async` function when dealing with promises?
// if we don't use await keyword in an async function then it will not wait for the promise to be resolved or reject and it will execute the code immediately.

async function asyncFunc() {
    try {
        const result = await promise3;
        console.log("with await"); // will print after getting result from promise3
        console.log(result);
    } catch (error) {
        console.log(error)
    }
}

async function asyncFunc() {
    try {
        const result = promise3;
        console.log("without await"); // may be print before getting result from promise3 also
        console.log(result);
    } catch (error) {
        console.log(error)
    }

}



//<------------------------------------------------------------------->



// ### `this` Keyword

// 8. **Theory**: Explain the `this` keyword in JavaScript. How does its value get determined?
// this keyword in js refers to an global object that can be accessed from anywhere in the code.
// value of this keyword depends on where this keyword is used.
// like in global scope or inside a function 
// if we use this keyword in global scope then it will refer to global object and if we use this keyword in a function then it will refer to that function object.
// also value of this keyword depends on stict or non stict mode.
// inside function and using strict mode will give undefined value of this keyword

console.log(this) // prints window object in browser , global in node js and  empty object in online compiler

function func() {
    console.log(149, this) // prints window object in non stict mode, undefined in stict mode
}
func()


const func1 = () => {
    console.log(this) // prints window object in both mode
}

func1()


// 9. **Output Guess**: What will be the output of the following code?


const person = {
    name: 'John',
    greet: function () {
        console.log(this.name);
    }
};

const greet = person.greet;
greet(); // (A) // undefined // because greet function looses it context when assigned to variable
person.greet(); // (B) // John


// ### `new` Keyword

// 10. **Theory**: What does the `new` keyword do in JavaScript? Describe its function with an example.

// `new` keyword is used to create a new object or new instance of a class.
// it only works with that object that has a constructor function 
// for example ->

class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log('Hello, ' + this.name);
    }
}

const person1 = new Person('Alice');
person1.greet(); // Hello, Alice



//<------------------------------------------------------------------->



// ### Callbacks

// 1. **Output Guess**: What will be the output of the following code, and why?


function doSomething(callback) {
    console.log('Start');
    setTimeout(() => {
        callback();
        console.log('End');
    }, 1000);
}

doSomething(() => {
    console.log('Callback');
});

// Start , Callback , End



//<------------------------------------------------------------------->



// 2. **Concept**: How would you convert the following callback-based function to return a promise instead?


function loadData(callback) {
    setTimeout(() => {
        callback('Data loaded');
    }, 1000);
}
//->
loadData.then((data) => {
    console.log(data);
}).catch((error) => {
    console.error(error);
})



//<------------------------------------------------------------------->



// ### Promises

// 3. **Output Guess**: What will be the output of the following code, and why?


const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => reject('Error occurred!'), 1000);
});

promise4
    .then(result => {
        console.log('Success:', result);
    })
    .catch(error => {
        console.log('Caught:', error); // Caught: Error occurred!
    });

promise4
    .then(result => {
        console.log('Success again:', result);
    })
    .catch(error => {
        console.log('Caught again:', error);  // Caught again: Error occurred!
    });



//<------------------------------------------------------------------->



// ### Promise Chaining

// 4. **Output Guess**: What will be the output of the following code, and why?


let promise5 = new Promise((resolve, reject) => {
    resolve(1);
});

promise5
    .then(result => {
        console.log(result); // (A) // 1   
        return result * 2;
    })
    .then(result => {
        console.log(result); // (B) // 2
        return result * 3;
    })
    .then(result => {
        console.log(result); // (C) // 6
        throw new Error('Chain error!');
    })
    .catch(error => {
        console.log(error.message); // (D) // Chain error!
        return 100;
    })
    .then(result => {
        console.log(result); // (E)  // 100
    });




//<------------------------------------------------------------------->



// ### Async/Await

// 5. **Output Guess**: What will be the output of the following code, and why?


async function asyncFunction() {
    return 42;
}

async function anotherFunction() {
    const result = await asyncFunction();
    console.log(result);
    return result + 1;
}

anotherFunction().then(result => {
    console.log(result); // (A) // 43
});


// 6. **Concept**: How would you handle multiple promises in parallel using `async/await`?
// using Promise.all()

async function fetchMultipleData() {
    const promise1 = fetch('https://api.example.com/data1');
    const promise2 = fetch('https://api.example.com/data2');
    const promise3 = fetch('https://api.example.com/data3');

    try {
        const [response1, response2, response3] = await Promise.all([promise1, promise2, promise3]);
        const data1 = await response1.json();
        const data2 = await response2.json();
        const data3 = await response3.json();

        return [data1, data2, data3];
    } catch (error) {
        console.error('One or more promises failed:', error);
        throw error;
    }
}

fetchMultipleData()
    .then(data => console.log(data))
    .catch(error => console.error(error));


//<------------------------------------------------------------------->


// ### `this` Keyword

// 7. **Output Guess**: What will be the output of the following code, and why?

const person2 = {
    name: 'Alice',
    greet: function () {
        setTimeout(function () { // normal function
            console.log(this.name); // undefined
        }, 1000);
    }
};

person2.greet();

// The correct output is `undefined` because `this` inside the `setTimeout` function refers to the global object, not the `person2` object.

// To ensure that this inside the setTimeout function refers to the person2 object, you can use an arrow function or bind() method:

const person3 = {
    name: 'Alice',
    greet: function () {
        setTimeout(() => { // arrow function
            console.log(this.name); // Alice
        }, 1000);
    }
};

person3.greet();


// 8. **Concept**: How can you ensure that `this` inside the `setTimeout` function refers to the `person2` object?
//here we are calling the greet method and this method is addressed to a normal function and not a arrow function so it will refer to window object. thats why it refers to person2 object



//<------------------------------------------------------------------->



// ### `new` Keyword

// 9. **Output Guess**: What will be the output of the following code, and why?

function Car(make, model) {
    this.make = make;
    this.model = model;
}

Car.prototype.getDetails = function () {
    return this.make + ' ' + this.model;
};

const car = new Car('Toyota', 'Camry');
console.log(car.getDetails());
// Toyota Camry


// 10. **Concept**: What would happen if you call the `Car` function without the `new` keyword?
// it will throw an error because new keyword is used to create an object or instance of that class and it will require an object as an argument to create the object.


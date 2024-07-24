// Illegal shadowing -> when we declare a variable with a some name in c certain scope after that we will define a variable with same name in another scope then it will become illegal shadowing
// for example->

let x = 10;
function test() {
    let x = 20; // This is legal shadowing.
    if (true) {
        let x = 30; // This is also legal shadowing.
        console.log(x);
    }
}
test();


//<------------------------------------------------------------------->


var a = 10;
{
    var a = 100
}
console.log(a) // 100

// Because of same memoary address for var a , js finds that there is a variable a with same memory address then it will firstly set to 10 and then update it to 100


//<------------------------------------------------------------------->


let b = 10;

{
    // var b = 100
}

// if we uncomment let b = 100 then it will give an error that b is already declared


//<------------------------------------------------------------------->


const c = 10;
{
    const c = 100
}
console.log(c)  // 10
// It doesn't give any error because they are in different scope 
// in last question error happened because var is a global scope so it will go in top and it will give an error


//<------------------------------------------------------------------->


// function declaration => function func(){}
// function statement => function func(){}
// function expression => const func = function(){}
// arrow function => const func = () => {}
// named function expression => const func = function func(){}


//<------------------------------------------------------------------->


// build a function that will print the numbers from 1 to 10 after every second
function timer() {
    for (let i = 1; i <= 10; i++) {
        setTimeout(() => {
            console.log(i)
        }, i * 1000)
    }
}
timer()
// if we put var instead of let then it will print 11 11 11 upto 10 times because there is web api come into picture in loop so it will execute after certain amount of time till it print the final value of i is 11 so after every second it will print 11 11 11 instead of 1 2 3 4


//<------------------------------------------------------------------->



// what is starving 
// there are two phases of event loop 1. microtask queue 2. callback queue
// microtask queue => it has more priority than callback queue
// but sometime there may be some function that will be in microtask queue and they will keep executing again and again in microtask queue so that function will not come outside from microtask queue , so there starvation happens 


//<------------------------------------------------------------------->


// web apis
// Timer functions , fetch api , console , DOM api ( document )

// timer functions will pushed into callback queue after execution
// fetch api will pushed into microtask queue
// consoling a synchronous function will not pushed into callback queue or microtask queue
// DOM api also synchronous function will not pushed into callback queue or microtask queue

console.log('Start');

setTimeout(() => {
    console.log('setTimeout');
}, 0);

Promise.resolve().then(() => {
    console.log('Promise');
});

console.log('End');

// output

// Start
// End
// Promise
// setTimeout



//<------------------------------------------------------------------->


// Date functions
const date = new Date()
const time = date.getTime()
const year = date.getFullYear()
const month = date.getMonth()
const day = date.getDay()
const hour = date.getHours()
const minute = date.getMinutes()
const second = date.getSeconds()

//Month
const date1 = new Date('2024-12-31');
console.log(date1.getMonth());
//Ans = 11 -> Becuase Months are zero-indexed in JavaScript, so December is 11


// add 5 days to a date
const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 5);


//difference between getUTCDate() and getDate()?
//getUTCDate() returns the day of the month according to UTC time, while getDate() returns the day of the month according to local time.


// create a settimeout using date function ( without settimeout ) and print something after certain amout of time

const start = new Date().getTime();
let end = start;

while (end < start + 5000) {  // 5000 milliseconds = 5 seconds
    end = new Date().getTime();
}

console.log("runs after 5 seconds");



//<------------------------------------------------------------------->



function a() {
    console.log("a")
    c()
}

async function b() {
    await a()

    setTimeout(() => {
        console.log("c")
    }, 0)

    console.log("b")
   
}

function c(){
    setTimeout(() => {
        console.log("d")
    }, 1000)
}

b()
console.log('e')

// output -> a e b c d


//<------------------------------------------------------------------->


// ### Question 1: Promise Chaining and Timing

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function foo() {
    console.log("start");
    await delay(1000);
    console.log("middle");
    await delay(2000);
    console.log("end");
}

foo();
console.log("done");

// output -> start done middle end



//<------------------------------------------------------------------->



// ### Question 2: Error Handling in Promises

function fail() {
    return new Promise((_, reject) => {
        reject("Error occurred");
    });
}

async function process() {
    try {
        await fail();
        console.log("Success");
    } catch (error) {
        console.log("Caught:", error);
    }
    console.log("End");
}

process();

//output -> Caught Error occurred , End



//<------------------------------------------------------------------->



// ### Question 3: Nested Async Functions

async function a() {
    console.log("a1");
    await b();
    console.log("a2");
}

async function b() {
    console.log("b1");
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("b2");
}

console.log("start");
a();
console.log("end");

//output -> start a1 b1 end b2 a2 



//<------------------------------------------------------------------->



// ### Question 4: Microtasks and Macrotasks


console.log("A");

Promise.resolve().then(() => {
    console.log("B");
    setTimeout(() => {
        console.log("C");
    }, 0);
});

console.log("D");

setTimeout(() => {
    console.log("E");
}, 0);

//output -> A D B C E



//<------------------------------------------------------------------->



// ### Question 5: Async/Await and Promise.all


async function task1() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Task 1 completed");
}

async function task2() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Task 2 completed");
}

async function main() {
    console.log("Start");
    await Promise.all([task1(), task2()]);
    console.log("End");
}

main();

//output -> ["Start","Task 2 completed","Task 1 completed","End"]



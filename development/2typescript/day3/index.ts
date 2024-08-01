//TEST


// ### Question 1:
// what are utility types in typescript? and tell me which method of TS from type and interface will work with utility types
// Uility types provide a way to manipulate types and derive new types based on existing ones. and Types will works with utility types


// ### Question 2:
// what are type gaurds in TS and how to use them
// Type guards are expressions that perform runtime checks to ensure that a variable is of a specific type.
// this can be done using
// typeof
// instanceof
// custom type guard functions

function isString1(value: any) {
    return typeof value === 'string';
}

function printLength1(value: string | number) {
    if (isString1(value)) {
        console.log(value.length); // `value` is now narrowed to `string`
    } else {
        console.log(value.toString().length); // `value` is now narrowed to `number`
    }
}


// ### Question 3:
// Do you know generics in TS , can we pass more than 1 type parameter in generics or can we change the name of the type parameter from T to any?
//Generics are used to write functions that work with different types and we can tell the compiler that we are working with this type this time while calling that function.
// we can pass the more than 1 type parameter in generics
// we can change the T keyword to any keyword this is just a naming convensiton that lot of developers use


function identity2<T, U>(arg1: T, arg2: U): [T, U] {
    return [arg1, arg2];
}

const output_4 = identity2<string, number>('deepak', 42);  // [string, number]
const output_5 = identity2<boolean, string>(true, 'hello');  // [boolean, string]
const output_6 = identity2<number, boolean>(10, false);  // [number, boolean]

console.log(output_4);  // Output: ['deepak', 42]
console.log(output_5);  // Output: [true, 'hello']
console.log(output_6);  // Output: [10, false]


//### Question 4:
// What is discriminated unions in TypeScript? , give an example
// Discriminated unions are same as normal unions (number | string | boolean) but Discriminated word means each type or varient have a common property


interface Square1 {
    kind: 'square';
    size: number;
}

interface Rectangle1 {
    kind: 'rectangle';
    width: number;
    height: number;
}

interface Circle1 {
    kind: 'circle';
    radius: number;
}

type Shape1 = Square1 | Rectangle1 | Circle1;

function area1(shape: Shape1): number {
    switch (shape.kind) {
        case 'square':
            return shape.size * shape.size;
        case 'rectangle':
            return shape.width * shape.height;
        case 'circle':
            return Math.PI * shape.radius * shape.radius;
        default:
            throw new Error("Unknown shape");
    }
}

console.log(area({ kind: 'square', size: 2 }));        // Output: 4
console.log(area({ kind: 'rectangle', width: 2, height: 3 })); // Output: 6
console.log(area({ kind: 'circle', radius: 3 }));      // Output: 28.27


//### Question 5:
// Define an array and make the array in the way so that we cannot modify the array in future
const colors1 = ['red', 'green', 'blue'] as const;
// TypeScript infers the type as: readonly ["red", "green", "blue"]

// Trying to modify the array will result in an error
// colors1.push('yellow'); // Error: Property 'push' does not exist on type 'readonly ["red", "green", "blue"]'.


//### Question 6:
// copy this code 
const map = new Map();
map.set('key1', { name: 'deepak', address: { city: 'jind' } });
map.set('key2', { name: 'amit', address: { city: 'pauri' } });
map.delete('key1');
// write type for it using utility types


//### Question 7:
// do you know about classes
// make a class and implement the interface,
// how to use inheritance on this parent class 
// how to use super keyword in child class and how to send data from child to parent class after creating child class object

interface User1 {
    name: string;
    age: number;
    address: string;
}

class Person1 implements User1 {

    name: string;
    age: number;
    address: string;

    constructor() {
        console.log('person1');
        this.name = 'deepak';
        this.age = 42;
        this.address = 'jind';
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
//TypeScript is an open-source programming language developed and maintained by Microsoft. It is a statically typed superset of JavaScript, which means it extends JavaScript by adding optional static types, interfaces, enums, and other features. TypeScript code is transpiled into plain JavaScript, which can then be run in any environment that supports JavaScript, such as web browsers and Node.js.

//we cannot use typescript in other languages than javascript

// **Key Features of TypeScript:**

// 1. **Static Typing:** TypeScript allows developers to specify types for variables, function parameters, and return values. This helps catch type-related errors at compile time rather than at runtime.

// 2. **Type Inference:** TypeScript can infer types based on the values assigned to variables, reducing the need for explicit type annotations.

// 3. **Interfaces and Type Aliases:** These allow for defining custom types, making code more readable and maintainable.

// 4. **Generics:** TypeScript supports generics, enabling the creation of reusable and type-safe components.

// 5. **Enum Types:** TypeScript provides enumerated types (enums) for defining a set of named constants.

// 6. **Advanced Type System:** It includes features like union types, intersection types, type guards, and more, providing robust type-checking capabilities.

// 7. **Tooling and Editor Support:** TypeScript's type system improves tooling and editor features, such as autocomplete, navigation, and refactoring.

// **Why Developers Use TypeScript:**

// 1. **Improved Code Quality and Maintainability:** Static typing helps catch errors early, making the code more reliable and easier to maintain.

// 2. **Better Tooling:** TypeScript's integration with popular editors and IDEs enhances developer productivity by providing better code navigation, refactoring, and autocompletion.

// 3. **Large-Scale Application Support:** TypeScript's features, like interfaces and modules, help manage large codebases and make collaboration among teams more efficient.

// 4. **Gradual Adoption:** Developers can gradually introduce TypeScript into an existing JavaScript codebase, making it easier to adopt.

// 5. **Popular Frameworks and Libraries Support:** Many popular JavaScript frameworks and libraries, such as Angular and React, have strong TypeScript support, and TypeScript definitions are available for many libraries.

// 6. **Community and Ecosystem:** TypeScript has a strong community and a rich ecosystem of tools and libraries, making it easier to find resources and support.

// Overall, TypeScript enhances JavaScript development by providing a type system that helps reduce bugs, improve code clarity, and enable more powerful refactoring and analysis tools.

//<------------------------------------------------------->

//ts.config file is used to configure the project in the way like how our code should be strict , how to compile it to js or not etc.

//there are some ts compilers like tsc , es-build , swc, etc

//It has lot of properties here are some properties with explanation
//target  ---->  tell the compiler what version of javascript we are using 
//module  ---->  tell the compiler what kind of module we are using
//strict  ---->  tell the compiler that we are using strict mode or not
//rootDir  ---->  tell the compiler where is our root directory
//outDir  ---->  tell the compiler where is our output directory
//noImplicitAny  ---->  tell the compiler that we are not using any implicit any
//removeComments  ---->  tell the compiler that keep the comments in final compiled js code or not.





const a: number = 10

//<-------------------------------------------------------------->

const func = (name: String) => {
    console.log(name)
}

func("deepak")

const sum = (a: number, b: number): number => a + b

console.log(sum(1, 2))

//<-------------------------------------------------------------->

const func2 = (fun: (msg: string) => void) => {
    setTimeout(() => {
        fun("deepak")
    }, 1000)
}

const fun = (msg: string) => {
    console.log(msg)
}

func2(fun)

//<-------------------------------------------------------------->

// assign types to objects using interface

interface User {
    name: string
    age: number
    address: string
}

const user: User = {
    name: 'John',
    age: 30,
    address: '123 Main St'
}

//<-------------------------------------------------------------->

// assign types to objects using type
// types are very similar to interface but they also let you aggregate types or data together means union and intersections

type User2 = {
    name: string
    age: number
    address: string
}

const user2: User2 = {
    name: 'John',
    age: 30,
    address: '123 Main St'
}

// union 

type ID = number | string
const id: ID = 1

// intersection

type Person = {
    name: string
    age: number
}
type Employee = {
    address: string
}
type User3 = Person & Employee
const user3: User3 = {
    name: 'John',
    age: 30,
    address: '123 Main St'
}

//<-------------------------------------------------------------->

//Difference between interface and type

//syntaxically difference , we have to pass equal to  in type and nothing need to paas in interface
// Both are used to define object types. They differ in the way they handle object properties.
// types let you to aggregate types or data together means union and intersections
// interfaces can be implements in classes as well but types doesn't
interface Animal {
    name: string;
    sound(): void;
}

class Dog implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sound(): void {
        console.log("Woof!");
    }
}

const myDog = new Dog("Buddy");
myDog.sound(); // Output: Woof!

//declaration merging only works with interfaces not with types
interface User_2 {
    name: string;
}

interface User_2 {
    age: number;
}

const user_3: User_2 = {
    name: 'John',
    age: 30
};

// we can define array type using type only 
type NumberType = number[]

//<-------------------------------------------------------------->

//Enums

enum Direction {
    Up = "UP",
    Down = "Down",
    Left = "Left",
    Right = 'Right'
}

function doSomething(keyPressed: Direction) {
    console.log(keyPressed)
}

doSomething(Direction.Down)


//<-------------------------------------------------------------->

//Generics
//generics allows us to make a function that works with different types and we can tell ts compilor that we are working with this type this time while calling that function.

function identity<T>(arg: T): T {
    return arg
}

const output = identity<string>('deepak'); // string
const output2 = identity<number>(10);  // number
const output3 = identity<boolean>(true); // boolean

// also we can pass the more than 1 type parameter in generics

function identity1<T, U>(arg1: T, arg2: U): [T, U] {
    return [arg1, arg2];
}

const output4 = identity1<string, number>('deepak', 42);  // [string, number]
const output5 = identity1<boolean, string>(true, 'hello');  // [boolean, string]
const output6 = identity1<number, boolean>(10, false);  // [number, boolean]

console.log(output);  // Output: ['deepak', 42]
console.log(output2);  // Output: [true, 'hello']
console.log(output3);  // Output: [10, false]


// here you can change the T keyword to any keyword this is just a naming convensiton that lot of developers use

//<-------------------------------------------------------------->

// as const
// as const is used to make objects arrays or variables immutale means we can't change them in future

const colors = ['red', 'green', 'blue'] as const;
// TypeScript infers the type as: readonly ["red", "green", "blue"]

// Trying to modify the array will result in an error
// colors.push('yellow'); // Error: Property 'push' does not exist on type 'readonly ["red", "green", "blue"]'.

//<-------------------------------------------------------------->

//Type Guards
//A type guard in TypeScript is an expression that performs a runtime check to ensure a variable is of a specific type, which allows TypeScript to narrow the variable's type within a certain scope.

// this can be done using
// typeof
// instanceof
// custom type guard functions

//<------------------------------------------------------------->

//Advanced API's

//<------------------------------------------------------------->

// Pick
//Pick is a utility type that allows us to pick certain properties from and existing type or interface.

type Person2 = {
    name: string
    age: number
    address: string
}

type newPerson = Pick<Person2, 'name' | 'age'>

//<------------------------------------------------------------->

//Partials
// It allows us to make all the properties of a type or interface optional

type newPersonOptional = Partial<Person2>

//<------------------------------------------------------------->

//Readonly
// It allows us to make all the properties of a type or interface readonly

type newPersonReadonly = Readonly<Person2>

//<------------------------------------------------------------->

//Records 
//This is used to handle objects with a specific key and value type

type Person3 = Record<number, string>

const person: Person3 = {
    1: 'John',
    2: 'Jane',
    3: 'Bob'
}

type Person4 = Record<number, { name: string, age: number }>

const person2: Person4 = {
    1: { name: 'John', age: 30 },
    2: { name: 'Jane', age: 25 },
    3: { name: 'Bob', age: 40 }
}

//<------------------------------------------------------------->

//Map
// It is used to handle Maps with a specific key and value type

const Person5 = new Map<number, { name: string, age: number }>()

Person5.set(1, { name: 'John', age: 30 })
Person5.set(2, { name: 'Jane', age: 25 })
Person5.delete(1)

//<------------------------------------------------------------->

//Exludes
//It is used to exclude certain properties from a type or interface of union type 

type Person6 = "name" | "age" | "address"

type newPerson6 = Exclude<Person6, 'address'> // "name" | "age"

//<------------------------------------------------------------->

//Omit
//It is used to exclude certain properties from a object type or interface

interface Todo {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
}

type TodoPreview = Omit<Todo, "description">; // title: string; completed: boolean; createdAt: number;

//<------------------------------------------------------------->

//Zod library validation and type creation

// import { z } from "zod";

// const personSchema = z.object({
//     name: z.string(),
//     age: z.number(),
//     address: z.string(),
// });

// type Person1 = z.infer<typeof personSchema>;

// ===> equal to ==> type Person1 = { name: string; age: number; address: string; };


//<------------------------------------------------------------->

// Explicit Type vs Implicit Type

// Explicit Typing
// Explicit typing means that the type of a variable, function, parameter, etc., is directly specified by the developer. This can improve code readability and maintainability, as it clearly communicates the intended type.

let age: number = 25;
function greet(name: string): void {
    console.log(`Hello, ${name}!`);
}

// Implicit Typing
// Implicit typing, also known as type inference, means that the TypeScript compiler automatically infers the type of a variable, function, etc., based on the assigned value or the context. TypeScript's type inference system is quite powerful and can often deduce the correct type without explicit annotations.

let age1 = 25; // TypeScript infers `age` as `number`
//@ts-ignore
function greet1(name) {
    console.log(`Hello, ${name}!`);
}

//<----------------------------------------------------->

// how to constantly change the compiled typescript file with manually compile ts file
// means without tsc --b
// by using tsc --watch 

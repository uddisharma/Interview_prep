
// ### Question 1:
// **Explain how you would configure a TypeScript project to target ES6, use CommonJS modules, enforce strict type checking, set the root directory to `src`, output compiled files to `dist`, and remove comments from the final compiled JavaScript. Provide the `tsconfig.json` configuration for this setup.**

const config = {
  compilerOptions: {
    "target": "ES6",               // Target ES6
    "module": "commonjs",          // Use CommonJS modules
    "strict": true,                // Enforce strict type checking
    "rootDir": "src",              // Set the root directory to src
    "outDir": "dist",              // Output compiled files to dist
    "removeComments": true         // Remove comments from the final compiled JavaScript
  }
}

//<------------------------------------------------------------->

// ### Question 2:
// **Explain the difference between the `any` and `unknown` types in TypeScript. Provide examples of how each can be used and why `unknown` might be preferred over `any` in certain situations.**

// any: The any type is the most flexible type. It allows any kind of value to be assigned to it and bypasses type checking.

let value: any;
value = 10;       // OK
value = 'hello';  // OK
value = true;     // OK

let num: number = value; // OK, but no type safety

// unknown: The unknown type is similar to any in that it can hold any value, but it enforces type checking before performing operations on the value.

let value1a: any = 10; // No type checking, can be used directly
console.log(value1a.toFixed(2)); // Compiles but might throw an error at runtime

let value2: unknown = "hello";
// console.log(value2.toFixed(2)); // Error: Property 'toFixed' does not exist on type 'unknown'
if (typeof value2 === "string") {
  console.log(value2.length); // Safe to use after type checking
}

// Why unknown is preferred:
// Using unknown enforces type checks and helps prevent runtime errors, making the code safer and more predictable.

//<------------------------------------------------------------->

// ### Question 3:
// **You have a `User` interface and a `User2` type with identical structure. Demonstrate how you would extend both the interface and the type to add an optional `email` property. Explain the differences in how this extension is achieved.**

// Using Interface extends
interface User {
  name: string;
  age: number;
  address: string;
}

interface ExtendedUser extends User {
  email?: string; // Optional email property
}

const user1: ExtendedUser = {
  name: 'John',
  age: 30,
  address: '123 Main St',
  email: 'john@example.com'
};

// Using Type extends
type User_1 = {
  name: string;
  age: number;
  address: string;
}

type ExtendedUser2 = User_1 & {
  email?: string; // Optional email property
}

const user4: ExtendedUser2 = {
  name: 'John',
  age: 30,
  address: '123 Main St',
  email: 'john@example.com'
};

//<------------------------------------------------------------->

// ### Question 4:
// **Explain the concept of type guards in TypeScript. Provide examples of how to use user-defined type guards to narrow down types.**

// Type guards are expressions that perform runtime checks to ensure that a variable is of a specific type.

function isString(value: any) {
  return typeof value === 'string';
}

function printLength(value: string | number) {
  if (isString(value)) {
    console.log(value.length); // `value` is now narrowed to `string`
  } else {
    console.log(value.toString().length); // `value` is now narrowed to `number`
  }
}

printLength("Hello"); // Output: 5
printLength(12345);   // Output: 5

//<------------------------------------------------------------->

// ### Question 5:
// **Discuss the concept of discriminated unions in TypeScript. How can discriminated unions be used to handle different types of actions in a type-safe way? Provide an example.**

//Discriminated unions are same as normal unions (number | string | boolean) but Discriminated word means each type or varient have a common property

interface Square {
  kind: 'square';
  size: number;
}

interface Rectangle {
  kind: 'rectangle';
  width: number;
  height: number;
}

interface Circle {
  kind: 'circle';
  radius: number;
}

type Shape = Square | Rectangle | Circle;

function area(shape: Shape): number {
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


// We can use unions only with types not with interfaces but on which types we are using discriminated unions can be interfaces or types, doesn't matter

//<------------------------------------------------------------->

// ### Question 6:
// **Explain how TypeScript's declaration merging works. Provide an example where interfaces and namespaces are merged.**

interface User_2 {
  name: string;
}

interface User_2 {
  age: number;
}

const user_2: User_2 = {
  name: 'John',
  age: 30
};







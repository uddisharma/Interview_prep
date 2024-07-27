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

// Both are used to define object types. They differ in the way they handle object properties.
// types let you to aggregate types or data together means union and intersections
// interfaces can be implements in classes as well but types doesn't
//syntaxically difference , we have to pass equal to  in type and nothing need to paas in interface
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

// here you can change the T keyword to any keyword this is just a naming convensiton that lot of developers use 

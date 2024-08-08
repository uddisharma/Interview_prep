// What is react and why this is important , downside and benefits of react
// React is a popular JavaScript library developed by Facebook for building user interfaces, particularly for single-page applications where data changes over time. It's primarily used for creating complex, interactive UIs by breaking them down into reusable components.

// ### Benefits of React:
// 1. Performance
// 2. Reusability 
// 3. Strong Community and Ecosystem 
// 4. Flexibility 

// ### Downsides of React:
// 1. Learning Curve
// 2. Boilerplate Code
// 3. Rapidly Changing
// 4. Complexity with Larger Applications

//5. Waterfall effect : This means we will see white screen even for some miliseconds after we load the page , it is called waterfall effect
// when we hit any url then google will gives a single html file by attaching js file and css file , 
// then  2nd request will go js file 
// then 3rd call will got to some server then return the user details or some other data 
// so this is the biggest problem of react there are minimum 3 request in react to render the page for first time 

//6. SEO unfriedly : React is not SEO friendly because first request only contain the empty html file with referecing script file and css file
// so google cannot know what content inside this html file 
// so finally our website not be ranked in google


//<--------------------------------------------------------------------->

// How react works behind the scenes

// Virtual DOM -> React contain a lightweight copy of the actual DOM. when something change in real DOM , it will not reflect in virtual DOM.
// this process is called reconciliation or diffing in react

// JSX-> It is javascript syntax that allows us to write HTML in Javascript.
//JSX is transpiled to JavaScript using tools like Babel.

// Diffing Algorithm:
// React uses a diffing algorithm to determine what has changed in the Virtual DOM compared to the previous version.
// Only the changed parts are updated in the actual DOM ( process called "reconciliation"), which improves performance.

// Hooks:
// Introduced in React 16.8, hooks are functions that let you use state and lifecycle features in function components.
// Common hooks include useState, useEffect, useContext, etc.

// Error Boundaries:
// Components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.


//<--------------------------------------------------------------------->


// What is reconciliation
// Reconciliation involves identifying what parts of the virtual DOM have changed and efficiently updating only those parts in the actual DOM. The single-root structure simplifies this process by providing a clear entry point for React to determine where updates should occur.


//react fiber 
// it's a new engine in react that is used to optimize the rendering process.


// API
// Application Programming Interface (API) refers to a set of protocols and tools used to communicate with a system.

// React API's
// All hooks are part of the React API.

//Lifecycle of Components
// Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.

// The three phases are: Mounting, Updating, and Unmounting.

const MyComponent = () => {

    return (
        <> // single entry point for DOM
            <Header />
            <MainContent />
            <Footer />
        </>
    );
};


//<--------------------------------------------------------------------->


// When Does a Rerender Happen?
// 1. Changes in a state variable utilized within the component.
// 2. A re - render of a parent component, which subsequently triggers the re - rendering of all its child components. This cascading effect ensures synchronization throughout the component tree.

// Solutions
// There are broadly 2 ways of minimizing the amount of rerenders

// 1. Push the State down
// Pushing the state down in React refers to the practice of managing state at the lowest possible level in the component tree. By doing so, you localize the state to the components that absolutely need it, reducing unnecessary re-renders in higher-level components.

// 2. By Using Memoization
// The above problem of reducing the number of rerenders can also be tackled using Memoization. Memoization in React, achieved through the useMemo hook, is a technique used to optimize performance by memoizing (caching) the results of expensive calculations. This is particularly useful when dealing with computations that don't need to be recalculated on every render, preventing unnecessary recalculations and re-renders.


//<--------------------------------------------------------------------->


// Significance of Key in React
// In React, when rendering a list of elements using the `map` function, it is crucial to assign a unique `key` prop to each element. The "key" is a special attribute that helps React identify which items have changed, been added, or been removed. This is essential for efficient updates and preventing unnecessary re-renders of the entire list.
// When the `key` prop is not provided or not unique within the list, React can't efficiently track the changes, leading to potential issues in the application's performance and rendering.


//<--------------------------------------------------------------------->


// Hooks
// hooks are just javascript functions so using that function we write more logic in less code and they are very fast , and every hook have different use cases
// useState, useEffect, useMemo, useCallback,  useRef, useReducer, useContext, useLayoutEffect

// useState
// useState is a Hook that allows you to add state to functional components. It returns an array with two elements: the current state value and a function to update that state. You can use it to manage and update state in your functional components.

//useEffect :is used for performing side effects in functional components. It is often used for tasks such as data fetching, subscriptions, or manually changing the DOM.
// console.log() outside useEffect will be logged first and inside one will logged second

// useMemo : is used for optimizing performance. It prevent the unnecessary recalculations. it holds very expensive calculations and returns a memoized value of a function.
// The memorized function will only be recomputed when the values in the dependencies array change.


import React, { useState, useMemo } from 'react';

const ExpensiveCalculation = ({ value }) => {
    const expensiveResult = useMemo(() => {
        // Simulating a computationally expensive operation
        console.log('Calculating expensive result...');
        return value * 2;
    }, [value]); // Dependency array: recalculates when 'value' changes

    return (
        <div>
            <p>Value: {value}</p>
            <p>Expensive Result: {expensiveResult}</p>
        </div>
    );
};

const MemoExample = () => {
    const [inputValue, setInputValue] = useState(5);

    return (
        <div>
            <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(Number(e.target.value))}
            />
            <ExpensiveCalculation value={inputValue} />
        </div>
    );
};

export default MemoExample;

// useCallback : it is used to memoized a callback function and prevent unnecessary re-creation on each render.
//  This can be useful when passing callbacks to child components to ensure they don't trigger unnecessary renders

import React, { useState, useCallback } from 'react';

const ChildComponent = ({ onClick }) => {
    console.log('ChildComponent rendering...');
    return <button onClick={onClick}>Click me</button>;
};

const CallbackExample = () => {
    const [count, setCount] = useState(0);

    // Regular callback function
    const handleClick = () => {
        console.log('Button clicked!');
        setCount((prevCount) => prevCount + 1);
    };

    // Memoized callback using useCallback
    const memoizedHandleClick = useCallback(handleClick, []);

    return (
        <div>
            <p>Count: {count}</p>
            <ChildComponent onClick={memoizedHandleClick} />
        </div>
    );
};

//<--------------------------------------------------------------------->

// let we have a component of header in which there is a button on which when we click on that button it will change to logout button and vice versa
// so the question is will all the header component will rerender when we click on logout button and vice versa 
// answer is yes  
// we can proof it using logging something before returning the component
// so that value will be logged when we click on logout button and vice versa

//<--------------------------------------------------------------------->

const [value, setValue] = useState("")

// we cannot update the value that is assigned by const , so here how we are able to update the value because this is init by const and we are able to update it
// when we update the value using set function then react will recall the whole component again behind the scene thats why we are able to update the value that is assigned by const


//<--------------------------------------------------------------------->

function Test(a) { // argument
    console.log(a)
}

Test(10) // parameter

//<--------------------------------------------------------------------->

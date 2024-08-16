

// Question 1
// what are hooks , please explain me about useLayoutEffect and implement it in react
// useLayoutEffect is a hook that runs synchronously after all DOM mutations but before the browser has painted. It's similar to useEffect, but it fires synchronously.

// Use Cases
// Measuring DOM Elements: You might want to measure the size of a DOM element before rendering based on that size.
// Manipulating the DOM: If you need to perform a DOM mutation that should be visible to the user before the browser has had a chance to paint, you should use useLayoutEffect.

import React, { useState, useLayoutEffect, useRef } from 'react';

function MeasureExample() {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const boxRef = useRef(null);

    useLayoutEffect(() => {
        if (boxRef.current) {
            const { width, height } = boxRef.current.getBoundingClientRect();
            setDimensions({ width, height });
        }
    }, []);

    return (
        <div>
            <div
                ref={boxRef}
                style={{ width: '200px', height: '100px', backgroundColor: 'lightblue' }}
            >
                Box
            </div>
            <p>Box dimensions: {dimensions.width} x {dimensions.height}</p>
        </div>
    );
}


//---------------------------------------------------------->


// Question 2
// what are higher order components and implement it in react.
// Higher Order Components (HOCs) are an advanced technique in React for reusing component logic. An HOC is a function that takes a component and returns a new component. HOCs can add additional data, inject props, or modify the behavior of the original component.


import React from 'react';

// Higher Order Component
function withLoading(Component) {
    return function WithLoadingComponent({ isLoading, ...props }) {
        if (isLoading) {
            return <p>Loading...</p>;
        }
        return <Component {...props} />;
    };
}

// Component that will be wrapped by HOC
function DataDisplay({ data }) {
    return (
        <ul>
            {data.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}

// Wrapped Component with HOC
const DataDisplayWithLoading = withLoading(DataDisplay);

// Usage
function App() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        setTimeout(() => {
            setData(['Item 1', 'Item 2', 'Item 3']);
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <div>
            <DataDisplayWithLoading isLoading={isLoading} data={data} />
        </div>
    );
}


// <--------------------------------------------------------->


// Question 3
// what is subscription and how to implement it in react
// A subscription is a function that sets up a subscription to some data source. It returns a function that can be called to unsubscribe.


import { useEffect, useState } from 'react';

function MyComponent() {
    const [data, setData] = useState < string | null > (null);

    useEffect(() => {
        // subscribeToData is a function that sets up a subscription to some data source
        const unsubscribe = subscribeToData((newData) => {
            setData(newData);
        });

        // Cleanup function to unsubscribe when the component unmounts
        return () => {
            unsubscribe();
        };
    }, []); // Empty dependency array means this effect runs once when the component mounts

    return <div>{data}</div>;
}

function subscribeToData(callback) {
    // This is a mock implementation of a subscription
    const intervalId = setInterval(() => {
        callback(`Data received at ${new Date().toLocaleTimeString()}`);
    }, 1000);

    // The unsubscribe function clears the interval
    return () => clearInterval(intervalId);
}

export default MyComponent;


// <--------------------------------------------------------->


// Question 4
// Which elment in react js has relation with lazy loading , and please implement it.

import React, { Suspense } from 'react';

const MyLazyComponent = React.lazy(() => import('./MyComponent'));

function App() {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <MyLazyComponent />
            </Suspense>
        </div>
    );
}


// <--------------------------------------------------------->


// Question 5
// Implement a context api that will change the theme of the app

// Context creation
import React, { createContext, useState } from 'react';

// interface ThemeContextType {
//     theme: 'light' | 'dark';
//     toggleTheme: () => void;
// }

export const ThemeContext = createContext < ThemeContextType | null > (null);

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState < ThemeContextType['theme'] > ("light");

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}


// <--------------------------------------------------------->


// Question 6
// What is child props
// Child props refers to a design pattern where a parent component passes a function to a child component as a prop. This function can then be called by the child component, allowing the parent component to control what is rendered within the child.

import React from 'react';

// Parent Component
function ParentComponent() {
    const renderContent = (name) => (
        <div>
            <h1>Hello, {name}!</h1>
        </div>
    );

    return <ChildComponent render={renderContent} />;
}

// Child Component
function ChildComponent({ render }) {
    return <div>{render("World")}</div>;
}


// <--------------------------------------------------------->


// Question 7
// why functional bases component is more prefferable in production instead of class based by keeping aside the developer point of view
// because in class based component , components are changed to functonal bases component in production build and then rendered but in functional based components , components are directly rendered , so these bypass the 1 step while rendering in production build. 
// thats why functional based component is more prefferable in production build.


// <--------------------------------------------------------->


// Question 8
// if we used class instead of className in react will it give error 
<p className='first' class="second">use Context</p>
// tell me which classname will be shown in the DOM 
// 2nd one


// <--------------------------------------------------------->


// Question 9
// Error Boundary
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

// Fallback Component
function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    );
}

// Component that may throw an error
function BuggyComponent() {
    // Simulating an error
    throw new Error('Simulated error!');
    return <div>This will not render</div>;
}

// App Component
function App() {
    return (
        <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => {
                // Reset any state if necessary
            }}
        >
            <BuggyComponent />
        </ErrorBoundary>
    );
}


// <--------------------------------------------------------->


// Question 10
// Do Hooks cover all the functionalities provided by the classes?
//  Our goal is for Hooks to cover all the functionalities for classes at its    
// earliest. There are no Hook equivalents for the following methods that are  
// not introduced in Hooks yet:

// 1) getSnapshotBeforeUpdate()
// 2) getDerivedStateFromError()
// 3) componentDidCatch() 


// <--------------------------------------------------------->


// Question 11
// Output

useEffect(() => {
    console.log(1);
    return () => {
        console.log(2);
    };
}, []);

useEffect(() => {
    console.log(3);
    return () => {
        console.log(4);
    };
}, []);

useEffect(() => {
    console.log(5);
    return () => {
        console.log(6);
    };
}, []);

// 1, 3 , 5, 2, 4, 6




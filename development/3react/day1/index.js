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


// What is reconicllation
// Reconciliation involves identifying what parts of the virtual DOM have changed and efficiently updating only those parts in the actual DOM. The single-root structure simplifies this process by providing a clear entry point for React to determine where updates should occur.

const MyComponent = () => {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    );
};

//<--------------------------------------------------------------------->


// When Does a Rerender Happen?
// 1. Changes in a state variable utilized within the component.
// 2. A re - render of a parent component, which subsequently triggers the re - rendering of all its child components.This cascading effect ensures synchronization throughout the component tree.

// Solutions
// There are broadly 2 ways of minimizing the amount of rerenders

// 1. Push the State down
// Pushing the state down in React refers to the practice of managing state at the lowest possible level in the component tree. By doing so, you localize the state to the components that absolutely need it, reducing unnecessary re-renders in higher-level components.

// 2. By Using Memoization
// The above problem of reducing the number of rerenders can also be tackled using Memoization. Memoization in React, achieved through the useMemo hook, is a technique used to optimize performance by memoizing (caching) the results of expensive calculations. This is particularly useful when dealing with computations that don't need to be recalculated on every render, preventing unnecessary recalculations and re-renders.
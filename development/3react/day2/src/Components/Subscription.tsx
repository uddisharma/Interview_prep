import { useEffect, useState } from 'react';

function MyComponent() {
    const [data, setData] = useState<string | null>(null);

    useEffect(() => {
        // subscribeToData is a function that sets up a subscription to some data source
        const unsubscribe = subscribeToData((newData: string) => {
            setData(newData);
        });

        // Cleanup function to unsubscribe when the component unmounts
        return () => {
            unsubscribe();
        };
    }, []); // Empty dependency array means this effect runs once when the component mounts

    return <div>{data}</div>;
}

function subscribeToData(callback: (newData: string) => void): () => void {
    // This is a mock implementation of a subscription
    const intervalId = setInterval(() => {
        callback(`Data received at ${new Date().toLocaleTimeString()}`);
    }, 1000);

    // The unsubscribe function clears the interval
    return () => clearInterval(intervalId);
}

export default MyComponent;

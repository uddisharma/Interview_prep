import { useCallback, useEffect, useMemo, useRef, useState } from "react"

const Hooks = () => {
    //useState
    const [value, setValue] = useState<number>(0)


    //useEffect
    useEffect(() => {
        console.log(value)
    }, [])

    //useMemo
    const computeFactorial = (num: number): number => {
        if (num <= 0) return 1;
        return num * computeFactorial(num - 1);
    };
    const factorial = useMemo(() => computeFactorial(value), [value]);

    //useCallback
    const memoizedCallback = useCallback(() => {
        console.log('Callback called')
        setValue(value + 1)
    }, [value])

    //useRef
    const inputRef = useRef<HTMLInputElement>(null)
    const handleFocus = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const print = () => {
        console.log(inputRef.current?.value)
    }

    //useReducer
    const calculateTotal = (arr: number[]): number => {
        return arr.reduce((acc, curr) => acc + curr, 0)
    }

    return (
        <div>
            <div>
                <button onClick={() => {
                    memoizedCallback()
                }}>Increase</button>
                <p>Value: {value}</p>
                <p>Factorial: {factorial}</p>
            </div>
            <br />
            <hr />
            <div>
                <p>useRef</p>
                <input type="text" ref={inputRef} />
                <button onClick={() => {
                    handleFocus()
                }}>Focus</button>
                <button onClick={() => { print() }}>Print</button>
            </div>
            <br />
            <hr />
            <div>
                <p>useReducer</p>

                <p>Total using useReducer : {calculateTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])}</p>
            </div>
        </div>
    )
}

export default Hooks



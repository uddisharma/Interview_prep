
const checkPalindrome = (str) => {
    const reverse = str.split('').reverse().join('');
    return str === reverse;
}

const factorial = (num) => {
    if (num == 0) return 0
    let res = 0
    for (let i = num - 1; i > 0; i--) {
        res = num *= i
    }
    return res
}

const checkPrime = (num) => {
    if (num <= 1) return false
    for (let i = 2; i < num; i++) {
        if (num % i == 0) return false
    }
    return true
}

const fibbonacci = (num) => {
    if (num == 0) return 0
    if (num == 1) return 1
    return fibbonacci(num - 1) + fibbonacci(num - 2)
}


const useDebounce = (value, delay) => {

    const [debouncedValue, setDebouncedValue] = useState(value)
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)
        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])
    return debouncedValue
}


const Main = () => {
    const devounceValue = useDebounce("hello", 1000)
    console.log(devounceValue)
}

function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}


const deepcopy = (obj) => {
    return JSON.parse(JSON.stringify(obj))
}
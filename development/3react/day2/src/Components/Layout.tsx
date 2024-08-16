import { useState, useRef, useEffect } from 'react';


function LayoutEffect() {
    const [width, setWidth] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            if (ref.current) {
                setWidth(ref.current.offsetWidth);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, [ref]);

    return (

        <div ref={ref} style={{ width: '100%', border: '1px solid black' }}>
            Width: {width}px
        </div>

    );
}

export default LayoutEffect;

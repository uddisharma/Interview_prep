import { useState } from "react";

const Accordian = () => {
    const [isOpen, setIsOpen] = useState({
        id: 1,
        open: false
    });

    return (
        <div>
            {[...Array(3)].map((_, i) => (
                <div key={i} style={{ border: '1px solid black' }}>
                    <div style={{ display: 'flex', gap: "10px" }}>
                        <h1>Accordian {i + 1}</h1>
                        <button onClick={() => setIsOpen({ id: i, open: true })}>open</button>
                    </div>
                    <p style={{ display: isOpen.id === i && isOpen.open ? 'block' : 'none' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                </div>
            ))}
        </div >
    )
}

export default Accordian
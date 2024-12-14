import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export default function CleanUp() {
    const [toggle, setToggle] = useState(true);
    return (
        <div>
            {toggle && <Counter />}

            <br />

            <button onClick={() => setToggle(!toggle)}>Click Me</button>
        </div>
    );
}

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount((prev) => prev + 1);
            console.log('<= Counter');
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return <div>{count}</div>;
}

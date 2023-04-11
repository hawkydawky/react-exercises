import React, { useState } from "react";

export function ClickCounter({ initialValue = 0 }) {
    const [count, setCount] = useState(initialValue);

    function counter() {
        setCount(current => current + 1);
    }

    function reset() {
        setCount(initialValue);
    }

    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={counter}>Increase</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
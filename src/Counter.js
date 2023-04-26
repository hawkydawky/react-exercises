import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Counter({ initialValue = 0 }) {
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
            <button onClick={reset}>Reset </button>
            <div>
                <Link to="/">Back</Link> 
            </div>
        </div>
    )
}
import { useCounter } from "./useCounter";

export function Counter({ initialValue = 0 }) {
    const {counter, onIncrement, onDecrement, onReset} = useCounter();

    return (
        <div>
            <h3>Counter: {counter}</h3>
            <button onClick={onIncrement}>Increase</button>
            <button onClick={onDecrement}>Decrease</button>
            <button onClick={onReset}>Reset</button>
        </div>
    )
}
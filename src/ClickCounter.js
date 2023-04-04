import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class ClickCounter extends React.Component {
    state= {
        count: this.props.initial ?? 0,
        increment: this.props.increaseBy ?? 1,
    }

    counterIncrement = () => {
        this.setState((state) => {
            return {
                count: state.count + state.increment
            }
        })
    }

    render() {
        return (
            <div>
                <CounterDisplay count={this.state.count}/>
                <button onClick={this.counterIncrement}>Increment</button>
            </div>
        )
    }
}
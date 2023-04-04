import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
    state = {
        count: this.props.initial ?? 0,
        timer: this.props.time ?? 1000,
        increment: this.props.increaseBy ?? 1,
    }

    componentDidMount(){
        setInterval(() => {
            this.setState((state) => {
                return {count: state.count + state.increment}
            })
        }, this.state.timer)
    }
    
    render() {
        return (
            <CounterDisplay count={this.state.count}/>
        )
    }
}
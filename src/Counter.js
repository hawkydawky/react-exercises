import React from "react";

export class Counter extends React.Component {
    state = {
        count: this.props.initial ?? 0,
        timer: this.props.time ?? 1000,
        increment: this.props.increaseBy ?? 1,
    }

    constructor(props) {
        super(props)

        setInterval(() => {
            this.setState((state) => {
                return {count: state.count + state.increment}
            })
        }, this.state.timer)
    }

    render() {
        return (
            <h1>Count: {this.state.count}</h1>
        )
    }
}
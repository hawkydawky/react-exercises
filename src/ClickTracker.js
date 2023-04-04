import React from "react";

export class ClickTracker extends React.Component {
    state ={
        whichEvent: "",
    }

    clickHandler = (event) => {
        this.setState(() => {
            return {
                whichEvent: event.target.name
            }
        })
    }

    render() {
        return (
            <div>
                <button name="first button" onClick={this.clickHandler}>First!</button>
                <button name="second button" onClick={this.clickHandler}>Second...</button>
                <button name="third button" onClick={this.clickHandler}>Third :)</button>
                <h1>{this.state.whichEvent}</h1>
            </div>
        )
    }
}

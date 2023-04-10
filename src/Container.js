import React from "react";

export class Container extends React.Component {
    render() {
        const DivStyle ={
            backgroundColor: "white",
            border: "3px solid red"
        }
        return (
            <div style={DivStyle}>
                {this.props.children}
            </div>
        )
    }
}
import React from "react"

export class Welcome extends React.Component {
    render() {
        return (
            <div>
                <p>Welcome, {this.props.name || "John"}!</p>
                <p>Your age is {this.props.age || "unknown"}.</p>
            </div>
        )
    }
}
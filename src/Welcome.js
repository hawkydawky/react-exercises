import React from "react"

export class Welcome extends React.Component {
    render() {
        return (
            <div>
                <p>Welcome, {this.props.name || "John Doe"}!</p>
            </div>
        )
    }
}

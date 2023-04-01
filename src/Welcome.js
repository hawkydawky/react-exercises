import React from "react"
import { Age } from "./Age"

export class Welcome extends React.Component {
    render() {
        return (
            <div>
                <p>Welcome, {this.props.name || "John"}!</p>
                {this.props.age>18 && this.props.age<65 ? <Age age={this.props.age}/> : false}
            </div>
        )
    }
}

// {this.props.age && <Age age={this.props.age}/>} also works but i wanted to use ternary operator
//Create a Login component containing three inputs: a username input, a password input and a remember checkbox.
//All three inputs should be controlled components.

import React from "react"

export class Login extends React.Component {
    state ={
        userName:"",
        password: "",
        isChecked: false,
    }

    changeComponents = (event) => {
        this.setState({
            [event.target.name]: event.target.name === "isChecked" ? event.target.checked : event.target.value
        })
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.userName} name="userName" onChange={this.changeComponents}/>
                <input type="password" value={this.state.password} name="password" onChange={this.changeComponents}/>
                <input type="checkbox" name="isChecked" id="" checked={this.state.isChecked} onChange={this.changeComponents}/>

            </div>
        )
    }
}
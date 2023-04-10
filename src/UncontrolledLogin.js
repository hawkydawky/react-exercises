import React from "react";

export class UncontrolledLogin extends React.Component {

    formSubmit = (event) => {
        event.preventDefault()

        console.log(event.target.elements.username.value)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.formSubmit}>
                    <input type="text" name="username" autoFocus="true" placeholder="Username"/>
                    <input type="password" name="password" placeholder="Password"/>
                    <input type="checkbox" name="isChecked"/>
                    <button type="submit">Login</button>
                    <button type="reset">Reset</button>
                </form>
            </div>
        )
    }
}

import React from "react";
import { Welcome } from "./Welcome";
import { ClickTracker } from "./ClickTracker";
import { Login } from "./Login";

export class App extends React.Component {
    render() {
        return (
            <div>
                <Welcome name="John" age ={13}/>
                <ClickTracker />
                <Login />
            </div>
        )
    }
}


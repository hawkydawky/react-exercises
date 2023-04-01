import React from "react";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";

export class App extends React.Component {
    render() {
        return (
            <div>
                <Welcome name="John" age ={13}/>
                <Counter initial={47} time={470} increaseBy={4.7}/>
            </div>
        )
    }
}
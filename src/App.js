import React from "react";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";

export class App extends React.Component {
    render() {
        return (
            <div>
                <Welcome name="John" age ={13}/>
                <Counter initial={3} time={333} increaseBy={3}/>
            </div>
        )
    }
}
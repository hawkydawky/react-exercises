import React from "react";
import { Welcome } from "./Welcome";
import { TodoList } from "./TodoList";

export class App extends React.Component {
    render() {
        return (
            <div>
                <Welcome name="Bernard"/>
                <TodoList />
            </div>
        )
    }
}


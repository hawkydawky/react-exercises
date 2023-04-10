import React from "react";

export class TodoList extends React.Component {
    state = {
        items: ["mouse", "keyboard", "headphones"],
        element : ""
    }

    addElement = () => {
        this.setState((state) =>{
            if (state.element) {
                return {
                    items: [...state.items, state.element],
                    element: "",
                }
            }
        })
    }

    changeComponent = (event) => {
        this.setState({
            element: event.target.value
        })
    }

    resetTodo = () => {
        this.setState({
            items: [],
            element: "",
        })
    }

    render() {
        return (
            <div>
                <ul>{this.state.items.map((ele, index) => <li key={index}>{ele}</li>)}</ul>
                <input type="text" name="element" value={this.state.element} onChange={this.changeComponent}/>
                <button onClick={this.addElement}>Add</button>
                <button onClick={this.resetTodo}>Reset</button>
            </div>
        )
    }
}
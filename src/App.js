import React from "react";
import { Welcome } from "./Welcome";
import { Login } from "./Login";
import { Container } from "./Container";

export class App extends React.Component {
    render() {
        return (
            <Container>
                <Welcome name="Bernard"/>
                <Login />
            </Container>
        )
    }
}


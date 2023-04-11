import React from "react";
import { Welcome } from "./Welcome";
import { Login } from "./Login";
import { Sum } from "./Sum";

export class App extends React.Component {
  state = {
    language: 'en',
  };

  handleLanguageChange = (event) => {
    this.setState({
      language: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <Welcome name="Bernard" />
        <Login />
        <Sum />
      </div>
    );
  }
}
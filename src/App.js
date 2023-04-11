import React from "react";
import { Welcome } from "./Welcome";
import { Login } from "./Login";
import { ClickCounter } from "./ClickCounter";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome name="Bernard" />
        <Login />
        <ClickCounter onCounterChange={(count) => console.log(`Counter equals to ${count}`)}/>
      </div>
    );
  }
}
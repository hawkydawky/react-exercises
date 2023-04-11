import React from "react";
import { Welcome } from "./Welcome";
import { Login } from "./Login";
import { ClickCounter } from "./ClickCounter";
import { Counter } from "./Counter";

export function App() {
    return (
      <div>
        <Welcome name="Bernard" />
        <Login />
        <ClickCounter onCounterChange={(count) => console.log(`Counter equals to ${count}`)}/>
        <Counter />
      </div>
    );
}
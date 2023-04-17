import React from "react";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { Login } from "./Login";

export function App() {
    return (
      <div>
        <Welcome name="Bernard" />
        <Counter />
        <Login />
      </div>
    );
}
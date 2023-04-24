import React from "react";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";

export function App() {
    return (
      <div>
        <Welcome name="Bernard" />
        <Counter />
      </div>
    );
}

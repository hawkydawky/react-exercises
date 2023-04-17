import React from "react";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { Githubuser } from "./GithubUser";

export function App() {
    return (
      <div>
        <Welcome name="Bernard" />
        <Counter />
        <Githubuser />
      </div>
    );
}
import React from "react";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { FilteredList } from "./FilteredList";

export function App() {
    return (
      <div>
        <Welcome name="Bernard" />
        <FilteredList list={[
  { name: "John", age: 25, id: 1 },
  { name: "Jane", age: 30, id: 2 },
  { name: "Bob", age: 18, id: 3 },
  { name: "Alice", age: 22, id: 4 },
  { name: "Mark", age: 40, id: 5 }
]}/>
      </div>
    );
}

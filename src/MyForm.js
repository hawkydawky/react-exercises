import { useState } from "react";
import { Juniors } from "./Juniors";
import { Seniors } from "./Seniors";

export function MyForm() {
  const [formObject, setFormObject] = useState({
    firstname: "",
    lastname: "",
    age: "",
    job: "",
  });

  const [juniors, setJuniors] = useState([]);
  const [seniors, setSeniors] = useState([]);

  function handleFormChange(event) {
    setFormObject((old) => ({
      ...old,
      [event.target.name]: event.target.value,
    }));
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.age < 18) {
      setJuniors((old) => [...old, formObject]);
    } else if (formObject.age >= 18) {
      setSeniors((old) => [...old, formObject]);
    }

    setFormObject({
      firstname: "",
      lastname: "",
      age: "",
      job: "",
    });

    

  }

  return (
    <div>
      <form onChange={handleFormChange} onSubmit={handleFormSubmit}>
        <input type="text" name="firstname" value={formObject.firstname} placeholder="username"/>
        <input type="text" name="lastname" value={formObject.lastname} placeholder="lastname"/>
        <input type="number" name="age" value={formObject.age} placeholder="age"/>
        <input type="text" name="job" value={formObject.job} placeholder="job"/>
        <button type="submit">Submit</button>
      </form>
      <Juniors inputArray={juniors} />
      <Seniors inputArray={seniors} />
    </div>
  );
}

// Create a form with the following fields;
// Name, Surname, age , Job
// The button on the forms must be disabled even if one of the fields is left blanks
// You will need two container, one called JUNIORS and the other SENIORS
// Check if the age of the person is less than 18 and move them into the JUNIORS list else put them in a list that has SENIORS
// Add the possibility to Edit, delete and Update a user

import { useEffect, useRef, useState } from "react";

export function CarDetails({ initialData }) {
    const [formInput, setFormInput] = useState(initialData)
    const formRef = useRef()

    useEffect(() => {
        setFormInput(initialData)
        formRef.current.reset()
    }, [initialData])

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formInput)
    }

    function handleChange(event) {
        setFormInput((old) => ({
            ...old,
            [event.target.name]: event.target.value,
        }))
    }

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit} onChange={handleChange}>
        <div>
          <label htmlFor="model">Model: </label>
          <input type="text" name="model" defaultValue={formInput.model} />
        </div>
        <div>
          <label htmlFor="year">Year: </label>
          <input type="text" name="year" defaultValue={formInput.year} />
        </div>
        <div>
          <label htmlFor="color">Color: </label>
          <input type="text" name="color" defaultValue={formInput.color} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

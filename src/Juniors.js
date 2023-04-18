import { useEffect, useState } from "react"

export function Juniors({ inputArray }) {
    const [newArray, setNewArray] = useState([])

    useEffect(() => {
        setNewArray(inputArray)
    } ,[inputArray])

    function handleRemove(removeIndex) {
        setNewArray(newArray.filter((ele, index) => removeIndex !== index))
    }

    

    return(
        <div>
            <h3>Juniors: </h3>
            <ul>{newArray.map((ele, index) => <li key={index}>{ele.firstname} {ele.lastname}, {ele.age}, {ele.job}<button onClick={() => handleRemove(index)}>Remove</button></li>)}</ul>
        </div>
    )
}
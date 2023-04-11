import { useEffect, useState } from "react"
import { Githubuser } from "./GithubUser";

export function GithubUserList () {
    const [usersArr, setUsers] = useState([]);
    const [inputValue, setInputValue] = useState("");

    function handleAddUser() {
        setUsers([...usersArr, inputValue]);
        setInputValue("");
    }

        function handleInputChange(event) {
            setInputValue(event.target.value);
        }
    

    return (
        <div>
            <input type="text" onChange={handleInputChange} value={inputValue}/>
            <button onClick={handleAddUser}>Add User</button>
            <ul>{usersArr.map((user, index) => <li key={index}><Githubuser username={user}/></li> )}</ul>
        </div>
    )
}
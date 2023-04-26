import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export function GithubUserList() {
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
      <input type="text" onChange={handleInputChange} value={inputValue} />
      <button onClick={handleAddUser}>Add User</button>
      <ul>
        {usersArr.map((username) => (
          <li key={username}>
            <Link to={`/users/${username}`}>{username}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

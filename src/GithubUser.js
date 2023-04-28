import { useGithubUser } from "./useGithubUser";
import { useState } from "react";

export function Githubuser() {
  const [usernameInput, setUsernameInput] = useState("");
  const { data, error, loading, onFetch} = useGithubUser(usernameInput);

  function onInputChange(event) {
    setUsernameInput(event.target.value)
  }

  return (
    <div>
      <hr />
      <h1>Github Username Fetcher!</h1>
      <input type="text" name="usernameInput" placeholder="username" value={usernameInput} onChange={onInputChange} />
      <button onClick={() => onFetch(usernameInput)}>Fetch</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <h2>{data.name}</h2>
          <a href={data.html_url}>{data.html_url}</a>
          <p>Public repo count: {data.public_repos}</p>
        </div>
      )}
      <hr />
    </div>
  );
}

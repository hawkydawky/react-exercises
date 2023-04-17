import { useGithub } from "./useGithub"

export function Githubuser() {

    const {data, onFetch, onInputChange} = useGithub()

    return (
        <div>
            <hr />
            <h1>Github Username Fetcher!</h1>
            <input type="text" name="usernameInput" placeholder="username" onChange={onInputChange}/>
            <button onClick={onFetch}>Fetch</button>
            {data && <h2>{data.name}</h2> }
            {data && <a href={data.html_url}>{data.html_url}</a> }
            {data && <p>Public repo count: {data.public_repos}</p>}
        </div>
    )
}
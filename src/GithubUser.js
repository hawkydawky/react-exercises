import { useGithub } from "./useGithub"

export function Githubuser() {

    const {data, error,loading, onFetch, onInputChange} = useGithub()

    return (
        <div>
            <hr />
            <h1>Github Username Fetcher!</h1>
            <input type="text" name="usernameInput" placeholder="username" onChange={onInputChange}/>
            <button onClick={onFetch}>Fetch</button>
            {loading && <h2>Loading...</h2>}
            {error && <div>
                <h3>There is an error!</h3>
                <p>{error.message}</p>
            </div>}
            {data && <h2>{data.name}</h2> }
            {data && <a href={data.html_url}>{data.html_url}</a> }
            {data && data.public_repos && <p>Public repo count: {data.public_repos}</p>}
        </div>
    )
}
import { useEffect, useState } from "react"

export function Githubuser({ username }) {

    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => {
                return response.json()
            })
            .then(json => {
                setData(json)
            })
    }, [username])

    return (
        <div>
            {data && <h2>{data.login}</h2> }
            {data && <a href={data.html_url}>{data.html_url}</a> }
            {data && <p>Public repo count: {data.public_repos}</p>}
        </div>
    )
}
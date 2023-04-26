import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export function Githubuser() {

    const [data, setData] = useState(null)
    const { username } = useParams()

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
            {data && <h2>{data.name}</h2> }
            {data && <a href={data.html_url}>{data.html_url}</a> }
            {data && <p>Public repo count: {data.public_repos}</p>}
            <Link to="/">Back</Link> 
        </div>
    )
}
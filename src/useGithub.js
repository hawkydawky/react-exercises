import { useState } from "react"

export function useGithub() {
    const [data, setData] = useState(null)
    const [usernameInput, setUsernameInput] = useState("")

    const handleFetch = async () => {
        const response = await fetch(`https://api.github.com/users/${usernameInput}`)
        const data = await response.json()
        setData(data)
      }
    

    function handleUsernameInputChange(event) {
        setUsernameInput(event.target.value)
    }

    return {
        data: data,
        onFetch: handleFetch,
        onInputChange: handleUsernameInputChange
    }
}
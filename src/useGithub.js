import { useState } from "react"

export function useGithub() {
    const [data, setData] = useState(null)
    const [usernameInput, setUsernameInput] = useState("")
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleFetch = async () => {
        setLoading(true)
        setError(null)
        
        try {
          const response = await fetch(`https://api.github.com/users/${usernameInput}`)
          const data = await response.json()
          if (data.message) {
            throw new Error(data.message)
          }
          setData(data)
        } catch(e) {
          setError(e)
          setData(null)
        } finally{
            setLoading(false)
        }
      }
      
      
    

    function handleUsernameInputChange(event) {
        setUsernameInput(event.target.value)
    }

    return {
        data: data,
        error: error,
        loading: loading,
        onFetch: handleFetch,
        onInputChange: handleUsernameInputChange
    }
}
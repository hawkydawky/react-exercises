import { useState } from "react";

export function useLogin() {
    const [login, setLogin] = useState({
        username: "",
        password: "",
    })

    function handleInputChange(event) {
        setLogin(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    return {
        login: login,
        onInputChange: handleInputChange,
    }
}
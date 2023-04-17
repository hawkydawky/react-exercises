import { useLogin } from "./useLogin";

export function Login () {
    const {login, onInputChange} = useLogin()

    return (
        <div>
            <input type="text" name="username" value={login.username} onChange={onInputChange} placeholder="username"/>
            <input type="password" name="password" value={login.password} onChange={onInputChange} placeholder="password"/>
            <button onClick={()=>console.log(login)}>Submit</button>
        </div>
    )
}
import React, { useState } from "react";

export function Login() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
    checkbox: false,
  });

  function handleInputChange(event) {
    setLoginData((data) => {
      return {
        ...data,
        [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value,
      };
    });
  }

  return (
    <div>
      <input type="text" name="username" value={loginData.username} onChange={handleInputChange} />
      <input type="password" name="password" value={loginData.password} onChange={handleInputChange} />
      <input type="checkbox" name="checkbox" checked={loginData.checkbox} onChange={handleInputChange} />
      <button disabled={!(loginData.username && loginData.password)}>Login</button>
    </div>
  );
}

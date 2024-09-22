import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login(){

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({userName, password})
    }
    return(
        <>
        <h2>Login</h2>
        <input
        type="text"
        placeholder="Username"
        value={userName}
        onChange={(e) => {
            setUserName(e.target.value);
        }}
        />
        <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => {
            setPassword(e.target.value);
        }}
        />
        <button
        onClick={handleSubmit}
        >
            Login
        </button>
        </>
    )
}

export default Login
import React from "react"

const Login = () => {
    const session = true

    return (
        <div>
            <h1>Login</h1>
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="chikito@gmail.com" />
            <label htmlFor="passwd">Password</label>
            <input type="text" placeholder="*********" />
            <button type="button" onClick={() => {}}>
                <h1>Login</h1>
            </button>
        </div>
    )
}

export default Login

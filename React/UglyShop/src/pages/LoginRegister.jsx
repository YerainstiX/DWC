import React from "react"

const LoginRegister = () => {
    
    const session = true

    return <div>{null ? <h1>Login</h1> : <h1>Register</h1>}
        <label htmlFor="email">Email</label>
        <input type="text" placeholder="chikito@gmail.com"/>
        <label htmlFor="passwd">Password</label>
        <input type="text" placeholder="*********"/>
        <button type="button" onClick={() => {}}>{null ? <h1>Login</h1> : <h1>Register</h1>}</button>

    </div>
}

export default LoginRegister

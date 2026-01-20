import React, { useContext, useState } from "react"
import { sessionContext } from "../context/ProviderSession"
import useSession from "../hooks/useSession"

const Register = () => {
    const [formdata, setFormData] = useState({
        email: "",
        password: "",
    })
    const [error, setError] = useState({
        email: "",
        password: "",
    })

    const { register } = useSession()

    return (
        <div>
            <h1>Register</h1>
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="chikito@gmail.com" value={formdata.email} onChange={}/>
            <label htmlFor="passwd">Password</label>
            <input type="text" placeholder="*********" />
            <button
                type="button"
                onClick={() => {
                    register()
                }}
            >
                <h1>Register</h1>
            </button>
        </div>
    )
}

export default Register

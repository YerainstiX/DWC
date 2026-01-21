import React, { useState } from "react"
import useSession from "../hooks/useSession"

const Register = () => {
    const [formdata, setFormData] = useState({
        email: "",
        password: "",
    })
    const [error, setError] = useState({
        email: "",
        password: "",
        infoMessage: "",
    })

    const { register } = useSession()

    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

        if (!email) return "The email can't be empty"
        if (!re.test(email.trim())) return "Please enter a valid email"
    }

    const validatePasswd = (pass) => {
        if (!pass) return "The password can't be empty"
        if (pass.length() < 6) return "The pass must have six or over six chars"
    }

    const validateForm = () => {
        const errors = {
            email: validateEmail(formdata.email),
            password: validatePasswd(formdata.password),
        }

        setError(errors)

        if (!errors.email && !errors.password) return true

        return false
    }

    const sendRegister = () => {
        if (!validateForm) {
            setError((prev) => ({
                ...prev,
                infoMessage: "Fix the error above",
            }))
        }
        register(formdata)
        setError((prev) => ({
            ...prev,
            infoMessage:
                "You will receive a confirmation email, this may take a few minutes",
        }))
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formdata, [name]: value })
    }

    return (
        <div className="register_container">
            <h1 className="register_title">Register</h1>
            <div className="register_email">
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    placeholder="chikito@gmail.com"
                    value={formdata.email}
                    onChange={handleChange}
                />
                {error.email && <p className="register_error">{error.email}</p>}
            </div>
            <div className="register_passwd">
                <label htmlFor="passwd">Password</label>
                <input
                    type="text"
                    placeholder="*********"
                    value={formdata.password}
                    onChange={handleChange}
                />
                {error.password && (
                    <p className="register_error">{error.password}</p>
                )}
            </div>
            <button
                className="register_button"
                type="button"
                onClick={() => {
                    sendRegister()
                }}
            >
                Register
            </button>
            {error.infoMessage && (
                <p className="register_error">{error.infoMessage}</p>
            )}
        </div>
    )
}

export default Register

import React, { useState } from "react"
import useSession from "../hooks/useSession"
import "./Login.css"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()

    //States for the logic of the page.
    const [formdata, setFormData] = useState({
        email: "",
        password: "",
    })
    const [error, setError] = useState({
        email: "",
        password: "",
        infoMessage: "",
    })

    const { passwdLogin, infoMessage } = useSession()

    //All the logic of validations.
    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (!email) return "The email can't be empty"
        if (!re.test(email.trim())) return "Please enter a valid email"
        return ""
    }

    const validatePasswd = (pass) => {
        if (!pass) return "The password can't be empty"
        if (pass.length < 6) return "The pass must have six or over six chars"
        return ""
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

    //The method to login.
    const login = async () => {
        if (!validateForm()) {
            setError((prev) => ({
                ...prev,
                infoMessage: "Fix the error above",
            }))
        } else {
            await passwdLogin(formdata)
            setError((prev) => ({
                ...prev,
                infoMessage: "",
            }))
            navigate("/")
        }
    }

    //The method for the controlled form.
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formdata, [name]: value })
    }

    return (
        <div className="login_container">
            <h1 className="login_title">Login</h1>
            <div className="login_email">
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    placeholder="kirawalker@gmail.com"
                    name="email"
                    value={formdata.email}
                    onChange={handleChange}
                />
                {error.email && <p className="login_error">{error.email}</p>}
            </div>
            <div className="login_passwd">
                <label htmlFor="passwd">Password</label>
                <input
                    type="text"
                    placeholder="*********"
                    name="password"
                    value={formdata.password}
                    onChange={handleChange}
                />
                {error.password && (
                    <p className="login_error">{error.password}</p>
                )}
            </div>
            <button
                className="login_button"
                onClick={() => {
                    login()
                }}
            >
                Login
            </button>
            {error.infoMessage && (
                <p className="login_error">{error.infoMessage}</p>
            )}
            {infoMessage && <p className="login_error">{infoMessage}</p>}
        </div>
    )
}

export default Login

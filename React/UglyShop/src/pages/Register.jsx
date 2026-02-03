import React, { useState } from "react"
import useSession from "../hooks/useSession"
import "./Register.css"

const Register = () => {
    //States for the logic of the page.
    const [formdata, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        username: "",
    })
    const [error, setError] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        infoMessage: "",
    })

    const { register, infoMessage } = useSession()

    //All the logic of validations.
    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (!email) return "The email can't be empty"
        if (!re.test(email.trim())) return "Please enter a valid email"
    }

    const validatePasswd = (pass) => {
        if (!pass) return "The password can't be empty"
        if (pass.length < 6) return "The pass must have six or over six chars"
    }

    const validateConfirmPassword = (pass, confirmPass) => {
        if (!confirmPass) return "Please confirm your password"
        if (pass !== confirmPass) return "Passwords do not match"
    }

    const validateForm = () => {
        const errors = {
            email: validateEmail(formdata.email),
            password: validatePasswd(formdata.password),
            confirmPassword: validateConfirmPassword(
                formdata.password,
                formdata.confirmPassword,
            ),
        }

        setError(errors)

        if (!errors.email && !errors.password && !errors.confirmPassword)
            return true

        return false
    }

    //The method to register.
    const sendRegister = async () => {
        if (!validateForm()) {
            setError((prev) => ({
                ...prev,
                infoMessage: "Fix the error above",
            }))
        } else {
            await register(formdata)
            setError((prev) => ({
                ...prev,
                infoMessage: "",
            }))
        }
    }

    //The method for the controlled form.
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formdata, [name]: value })
    }

    return (
        <div className="register_container">
            <h1 className="register_title">Register</h1>
            <div className="register_username">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    placeholder="CarlosEditTV"
                    name="username"
                    value={formdata.username}
                    onChange={handleChange}
                />
            </div>
            <div className="register_email">
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    placeholder="carlosedittv@gmail.com"
                    name="email"
                    value={formdata.email}
                    onChange={handleChange}
                />
                {error.email && <p className="register_error">{error.email}</p>}
            </div>
            <div className="register_passwd">
                <label htmlFor="passwd">Password</label>
                <input
                    type="password"
                    placeholder="*********"
                    name="password"
                    value={formdata.password}
                    onChange={handleChange}
                />
                {error.password && (
                    <p className="register_error">{error.password}</p>
                )}
            </div>
            <div className="register_confirm_passwd">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    type="password"
                    placeholder="*********"
                    name="confirmPassword"
                    value={formdata.confirmPassword}
                    onChange={handleChange}
                />
                {error.confirmPassword && (
                    <p className="register_error">{error.confirmPassword}</p>
                )}
            </div>
            <button
                className="register_button"
                onClick={() => {
                    sendRegister()
                }}
            >
                Register
            </button>
            {error.infoMessage && (
                <p className="register_error">{error.infoMessage}</p>
            )}
            {infoMessage && <p className="register_success">{infoMessage}</p>}
        </div>
    )
}

export default Register

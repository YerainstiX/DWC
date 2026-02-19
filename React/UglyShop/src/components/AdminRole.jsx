import React, { useState } from "react"
import useSession from "../hooks/useSession"
import "./AdminRole.css"

const AdminRole = ({ id, email, role, avatar_url }) => {
    const { sessionData, changeRole, isAdmin } = useSession()
    //The users can't manage their own role for security and in case the user has brain lag.
    const isOwn = id === sessionData.user.id

    const [formData, setFormData] = useState({
        id: id,
        email: email,
        role: role,
    })

    const [infoMessage, setInfoMessage] = useState({
        status: "",
    })
    const hasRoleChanged = role !== formData.role
    const [roleChanged, setRoleChanged] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))

        setRoleChanged(false)
    }

    const handleSave = () => {
        console.log(isAdmin)
        console.log(formData.role)
        if (isAdmin) {
            changeRole({ role: formData.role }, id)
            setRoleChanged(true)
            setInfoMessage({ status: "Role changed Successfully" })
            setTimeout(() => {
                setInfoMessage({ status: "" })
            }, 1500)
        }
    }

    return (
        <div className="AdminRole_container">
            <div className="AdminRole_avatar">
                <img src={avatar_url} alt="avatar" />
            </div>
            <div className="AdminRole_info">
            <p className="AdminRole_email">{formData.email}</p>
            <label htmlFor="role">Role</label>
            <select
                name="role"
                id="role"
                value={formData.role}
                onChange={handleChange}
                disabled={isOwn}
            >
                <option value="admin">admin</option>
                <option value="user">user</option>
            </select>
            {hasRoleChanged && !roleChanged && (
                <button className="AdminRole_btn" onClick={handleSave}>
                    CONFIRM CHANGE
                </button>
            )}
            {infoMessage && (
                <p className="AdminNote_infoMessage">{infoMessage.status}</p>
            )}
            </div>
        </div>
    )
}

export default AdminRole

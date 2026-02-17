import React, { useEffect } from "react"
import useSession from "../hooks/useSession"
import AdminRole from "../components/AdminRole"
import "./AdminRoles.css"
const AdminRoles = () => {
    const { getUserWithRoles, userRoles } = useSession()

    useEffect(() => {
        getUserWithRoles()
    }, [])
    return (
        <div className="AdminRoles_container">
            <h1 className="AdminRoles_tittle">ROLE MANAGEMENT</h1>
            {userRoles.map((user) => (
                <AdminRole
                    key={user.user_id}
                    id={user.user_id}
                    email={user.email}
                    role={user?.user_roles?.role}
                ></AdminRole>
            ))}
        </div>
    )
}

export default AdminRoles

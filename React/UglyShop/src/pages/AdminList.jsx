import React from "react"
import useSession from "../hooks/useSession"

const AdminList = () => {
    const { singed, isAdmin } = useSession()

    return <div>AdminList</div>
}

export default AdminList

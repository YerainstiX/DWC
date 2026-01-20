import React, { useContext } from "react"
import { sessionContext } from "../context/ProviderSession"

const useSession = () => {
    const ctx = useContext(sessionContext)
    if (!ctx) throw new Error("Error getting session content")
    return ctx
}

export default useSession

import { useContext } from "react"
import { ProfileContext } from "../context/ProviderProfiles"

const useProfile = () => {
    const ctx = useContext(ProfileContext)
    if (!ctx) throw new Error("Error")
    return ctx
}

export default useProfile

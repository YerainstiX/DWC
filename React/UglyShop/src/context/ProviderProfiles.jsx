import React, { createContext, useState } from "react"
import useSupaBase from "../hooks/useSupaBase"

const ProfileContext = createContext()

const ProviderProfiles = ({ children }) => {
    const { editTable, getData, getItem } = useSupaBase()

    const TABLE = "profiles"

    const [profile, setProfile] = useState()

    const getProfile = async () => {
        setProfile(await getData(TABLE))
    }

    const editProfile = async (data, id) => {
        const editedProfile = await editTable(TABLE, data, id, "user_id")

        if (editedProfile) setProfile([editedProfile])
    }

    const box = { getProfile, editProfile, profile }
    return (
        <ProfileContext.Provider value={box}>
            {children}
        </ProfileContext.Provider>
    )
}

export default ProviderProfiles

export { ProfileContext }

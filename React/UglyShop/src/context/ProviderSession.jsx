import React, { createContext, useEffect, useState } from "react"
import { supabaseConnection } from "../supabase/supabase"
import { useNavigate } from "react-router-dom"
import useSupaBase from "../hooks/useSupaBase"

const sessionContext = createContext()

const ProviderSession = ({ children }) => {
    const navigate = useNavigate()

    const [sessionData, setSessionData] = useState({
        email: "",
        password: "",
        username: "",
    })

    const { editTable, getData, getItem } = useSupaBase()
    const TABLE_ROLES = "user_roles"

    const [user, setUser] = useState({})
    const [infoMessage, setInfoMessage] = useState("")
    const [singed, setSinged] = useState(false)
    const [role, setRole] = useState(null)

    const [userRoles, setUserRoles] = useState([])

    const register = async (userData) => {
        setInfoMessage("")
        try {
            const { data, error } = await supabaseConnection.auth.signUp({
                email: userData.email,
                password: userData.password,
                options: {
                    data: {
                        display_name: userData.username,
                    },
                },
            })

            if (error) throw error
            else
                setInfoMessage("You will receive an account confirmation email")
        } catch (error) {
            setInfoMessage(error.message)
        }
    }

    const passwdLogin = async (userData) => {
        setInfoMessage("")
        try {
            const { data, error } =
                await supabaseConnection.auth.signInWithPassword({
                    email: userData.email,
                    password: userData.password,
                })

            if (error) throw error
            else {
                setSessionData(data)
                setSinged(true)
                setUser(data.user)
            }
        } catch (error) {
            setInfoMessage(error.message)
        }
    }

    const signOut = async () => {
        try {
            await supabaseConnection.auth.signOut()
            setInfoMessage("")
            setSinged(false)
            setUser({})
            setSessionData({ email: "", password: "", username: "" })
            navigate("/")
        } catch (error) {
            setInfoMessage(error.message)
        }
    }

    const loadRole = async () => {
        if (!sessionData?.user?.id) return

        const user = await getItem(TABLE_ROLES, "user_id", sessionData.user.id)
        setRole(user?.[0]?.role || null)
    }

    const getRoles = async () => {
        if (!isAdmin) return

        setUserRoles(await getData(TABLE_ROLES))
    }

    const changeRole = async (data, id) => {
        if (!isAdmin) return

        const editedRole = await editTable(TABLE_ROLES, data, id)

        const newUserRoles = userRoles.map((user) =>
            user.user_id === editedRole.user_id ? editedRole : user,
        )
        setUserRoles(newUserRoles)
    }

    const isAdmin = role === "admin"

    //The subscription to get notified when something changes and update the states that manage the logic of the page.
    useEffect(() => {
        supabaseConnection.auth.onAuthStateChange((event, session) => {
            if (!session) return navigate("/")

            if (event === "SIGNED_IN") {
                setSessionData(session)
                setUser(session.user)
                setSinged(true)
            }
        })
    }, [])

    useEffect(() => {
        loadRole()
    }, [sessionData])

    const box = {
        register,
        passwdLogin,
        signOut,
        changeRole,
        userRoles,
        isAdmin,
        changeRole,
        getRoles,
        singed,
        user,
        sessionData,
        infoMessage,
    }

    return (
        <sessionContext.Provider value={box}>
            {children}
        </sessionContext.Provider>
    )
}

export default ProviderSession
export { sessionContext }

import React, { createContext, useState } from "react"
import { supabaseConnection } from "../supabase/supabase"
import { useNavigate } from "react-router-dom"

const sessionContext = createContext()

const ProviderSession = ({ children }) => {
    const navigate = useNavigate()

    const [sessionData, setSessionData] = useState({ email: "", password: "" })
    const [user, setUser] = useState({})
    const [infoMessage, setInfoMessage] = useState("")
    const [singed, setSinged] = useState(false)

    const register = async (userData) => {
        setInfoMessage("")
        try {
            const { data, error } = await supabaseConnection.auth.signUp({
                email: userData.email,
                password: userData.password,
                options: {
                    data: userData.username,
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
            setSessionData({ email: "", password: "" })
            navigate("/")
        } catch (error) {
            setInfoMessage(error.message)
        }
    }

    const box = {
        register,
        passwdLogin,
        signOut,
        singed,
        user,
        sessionData,
        infoMessage,
    }

    return (
        <sessionContext.Provider value={box}>children</sessionContext.Provider>
    )
}

export default ProviderSession
export { sessionContext }

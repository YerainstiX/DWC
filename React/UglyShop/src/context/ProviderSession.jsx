import React, { createContext, useEffect, useState } from "react"
import { supabaseConnection } from "../supabase/supabase"
import { useNavigate } from "react-router-dom"

const sessionContext = createContext()

const ProviderSession = ({ children }) => {
    const navigate = useNavigate()

    const [sessionData, setSessionData] = useState({
        email: "",
        password: "",
        username: "",
    })
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
    //The subscription to get notified when something changes and update the states that manage the logic of the page.
    useEffect(() => {
        supabaseConnection.auth.onAuthStateChange((e, session) => {
            if (!session) return navigate("/")

            setSessionData(session)
            setUser(session.user)
            setSinged(true)
            navigate("/")
        })
    }, [])

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
        <sessionContext.Provider value={box}>
            {children}
        </sessionContext.Provider>
    )
}

export default ProviderSession
export { sessionContext }

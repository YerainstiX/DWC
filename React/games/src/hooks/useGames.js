import React from "react"
import { useContext } from "react"
import { ContextGames } from "../context/ProviderGames"

const useGames = () => {
    const ctx = useContext(ContextGames)
    if (!ctx) throw new Error("ERROR")
    return ctx
}

export default useGames

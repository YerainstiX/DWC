import React, { createContext, useEffect, useState } from "react"
import { useAPI } from "../hooks/useAPI"

const ContextGames = createContext()

const ProviderGames = ({ children }) => {
    const URL = "http://localhost:3000/games"
    const [games, setGames] = useState()

    const { loading, errors, get, post, put, destroy } = useAPI()

    const getGames = async () => setGames(await get(URL))

    const getGameById = async (id) => await get(`${URL}/${id}`)

    const saveGame = async (body) => await post(URL, body)

    const editGame = async (id, body) => await put(`${URL}/${id}`, body)

    const deleteGame = async (id) => await destroy(`${URL}/${id}`)

    
    useEffect(() => {
        getGames()
    }, [])

    const box = { games, loading, errors, getGames, getGameById, saveGame, editGame, deleteGame }

    return <ContextGames value={box}>{children}</ContextGames>
}

export default ProviderGames
export { ContextGames }

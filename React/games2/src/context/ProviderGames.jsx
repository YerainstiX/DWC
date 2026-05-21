import { createContext, useEffect, useState } from "react"
import useApi from "../hooks/useApi"

const ContextGames = createContext()

const ProviderGames = ({ children }) => {
    const URL = "http://localhost:3000/games"
    const [games, setGames] = useState([])
    const [game, setGame] = useState(null)

    const { loading, errors, get, post, put, destroy } = useApi()

    const getGames = async () => setGames(await get(URL))

    const getGameByID = async (id) => setGame(await get(`${URL}/${id}`))

    const saveGame = async (body) => await post(URL, body)

    const editGame = async (body, id) => await put(`${URL}/${id}`, body)

    const deleteGame = async (id) => await destroy(`${URL}/${id}`)

    useEffect(() => {
        getGames()
    }, [])

    const box = { games, game, loading, getGames, saveGame, editGame, deleteGame, getGameByID }

    return <ContextGames value={box}>{children}</ContextGames>
}

export default ProviderGames

export { ContextGames }

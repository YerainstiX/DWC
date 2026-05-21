import { useParams } from "react-router-dom"
import useGames from "../hooks/useGames"
import { useEffect, useState } from "react"
import useCharacters from "../hooks/useCharacters"

const GameDetails = () => {
    const { id } = useParams()

    const { getGameByID, game } = useGames()
    const { characters } = useCharacters()

    const [gameCharacters, setGameCharacters] = useState(null)

    useEffect(() => {
        getGameByID(id)
    }, [])

    const getGameCharacters = () => {
        const gameIds = game?.characters?.map((char) => char.split("/")[4])

        const filteredCharacters = characters?.filter((char) =>
            gameIds.includes(char.cheatID.toString()),
        )

        setGameCharacters(filteredCharacters)
    }

    useEffect(() => {
        getGameCharacters()
    }, [game])

    return (
        <div>
            <h1>{game?.title}</h1>
            <p>{game?.id}</p>
            <h2>Characters</h2>
            {gameCharacters ? gameCharacters?.map((c) => <>{c?.name} | </>) : <>Empty</>}
        </div>
    )
}

export default GameDetails

import React from "react"
import useGames from "../hooks/useGames"
import Game from "../components/Game"

const Games = () => {
    const { loading, games } = useGames()

    if (loading) return <h1>Loading...</h1>

    return (
        <div>
            <h1>GAMES</h1>
            {!games ? (
                <>
                    <h1>EMPTY LIST</h1>
                </>
            ) : (
                <>
                    {games.map((game) => (
                        <Game
                            key={game.id}
                            id={game.id}
                            name={game.titulo}
                            platform={game.plataforma}
                            gameCharacters={game.characters}
                        ></Game>
                    ))}
                </>
            )}
        </div>
    )
}

export default Games

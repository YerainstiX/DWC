import Game from "../components/Game"
import useGames from "../hooks/useGames"

const Games = () => {
    const { games, loading } = useGames()

    if (loading) return <h1>Loading...</h1>

    return (
        <div>
            <h1>Games</h1>
            {games ? (
                games.map((game) => (
                    <Game
                        key={game.id}
                        id={game.id}
                        title={game.title}
                        characters={game.characters}
                    ></Game>
                ))
            ) : (
                <></>
            )}
        </div>
    )
}

export default Games

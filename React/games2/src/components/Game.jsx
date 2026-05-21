import { Link } from "react-router-dom"
import useGames from "../hooks/useGames"

const Game = ({ id, title, characters }) => {
    const { deleteGame, getGames } = useGames()
    return (
        <div>
            <h1>{title}</h1>

            <Link to={`/games/${id}`}>
                <button>DETAILS</button>
            </Link>
            <Link to={`/games/${id}/edit`}>
                <button>EDIT</button>
            </Link>
        </div>
    )
}

export default Game

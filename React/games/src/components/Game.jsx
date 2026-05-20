import React from "react"
import { useState } from "react"
import useGames from "../hooks/useGames"
import { Link } from "react-router-dom"
import useCharacters from "../hooks/useCharacters"
import { useEffect } from "react"
import Character from "./Character"

const Game = ({ id, name, platform, gameCharacters }) => {
    const [confirmDelete, setConfirmDelete] = useState(false)
    const [gamePeople, setGamePeople] = useState([])
    const { deleteGame, getGames } = useGames()
    const { characters } = useCharacters()

    const getGameCharacters = () => {
        const charactersIDs = gameCharacters.map((character) => character.split("/")[4])
        const gameChars = characters.filter((character) =>
            charactersIDs.includes(character.cheatID.toString()),
        )

        setGamePeople(gameChars)
    }

    useEffect(() => {
        getGameCharacters()
    }, [characters])

    return (
        <div>
            <div>
                <h2>- {name}</h2>
                <p>- {platform}</p>
                <div>
                    <h3>Characters</h3>
                    {gamePeople ? (
                        gamePeople.map((char) => (
                            <Character key={char.id} name={char.nombre} rol={char.rol}></Character>
                        ))
                    ) : (
                        <>Loading...</>
                    )}
                </div>
            </div>
            <button onClick={() => setConfirmDelete(true)}>DELETE</button>
            {confirmDelete && (
                <>
                    <p>Confirm Delete?</p>
                    <button
                        onClick={() => {
                            deleteGame(id)
                            getGames()
                        }}
                    >
                        YES
                    </button>
                    <button onClick={() => setConfirmDelete(false)}>NO</button>
                </>
            )}
            <Link to={`/games/edit/${id}`}>
                <button>EDIT</button>
            </Link>
        </div>
    )
}

export default Game

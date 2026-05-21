import React, { use, useEffect, useState } from "react"
import useGames from "../hooks/useGames"
import { useParams } from "react-router-dom"
import Game from "../components/Game"

const EditGame = () => {
    const { id } = useParams()

    const { getGameByID, game, editGame, getGames } = useGames()

    useEffect(() => {
        getGameByID(id)
    }, [])

    const [formData, setFormData] = useState({
        id: id,
        title: game?.title,
        characters: game?.characters,
    })

    const [info, setInfo] = useState({ message: "" })
    /*
    useEffect(() => {
        setFormData({ id: id, title: game?.title, characters: game?.characters })
    }, [id, game])
*/
    const validateName = () => {
        if (!formData?.title) return false
        return true
    }

    const validateForm = () => {
        if (validateName()) return true
        return false
    }

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await editGame(formData, id)
        await getGameByID(id)
        await getGames()
        setInfo({ message: "Game Updated!!" })
    }

    return (
        <div>
            <h1>EditGame: {game?.title}</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    value={formData?.title}
                    onChange={handleChange}
                />
                <button type="submit">EDIT</button>
            </form>

            {info?.message && <p>{info.message}</p>}
        </div>
    )
}

export default EditGame

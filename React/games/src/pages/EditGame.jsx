import React from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import useGames from "../hooks/useGames"
import { useEffect } from "react"
const EditGame = () => {
    const { id } = useParams()

    const [game, setGame] = useState()

    const { games, editGame, getGames } = useGames()

    useEffect(() => {
        setGame(games.find((game) => game.id === id))
    }, [id, games])

    const [formData, setFormData] = useState({
        id: id,
        titulo: "",
        plataforma: "",
        genero: "",
        lanzamiento: "",
        precio: "",
        disponible: false,
        imagen: "",
        characters: [],
    })

    const [errors, setErrors] = useState({
        message: "",
    })

    useEffect(() => {
        if (game) {
            setFormData({
                titulo: game.titulo,
                plataforma: game.plataforma,
                genero: game.genero,
                lanzamiento: game.lanzamiento,
                precio: game.precio,
                disponible: game.disponible,
                imagen: game.imagen,
                characters: game.characters,
            })
        }
    }, [game])

    const validateName = (name) => {
        console.log(name)
        if (!name) return false
        if (!isNaN(name)) return false
        return true
    }

    const ValidateGame = () => {
        if (!validateName(formData.titulo)) return false
        return true
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async () => {
        console.log(ValidateGame())
        if (ValidateGame()) {
            await editGame(id, formData)
            await getGames()
        } else setErrors({ message: "Cannot Update Game" })
        setErrors({ message: "Game Updated" })

        setTimeout(() => {
            setErrors({ message: "" })
        }, 2000)
    }

    console.log(formData.title)

    return (
        <>
            <h1>EDIT GAME: {id}</h1>
            <form>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="titulo"
                    value={formData.titulo}
                    onChange={(e) => handleChange(e)}
                    placeholder={formData?.titulo}
                />
                {errors.message ? <p>{errors.message}</p> : <></>}
            </form>
            <button onClick={() => handleSubmit()}>EDIT</button>
        </>
    )
}

export default EditGame
